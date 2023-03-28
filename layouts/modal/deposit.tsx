import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from '@/pages/_app';
import axios from 'axios';
import Statement from './statement';
import moment from 'moment';
import Swal from 'sweetalert2';
import { icons } from 'react-icons';
import { time } from 'console';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

interface IBanks {
    code: string;
    name: string;
    banksCode: string;
    phone: string;
    email: string;
    contact: string;
    address1: string;
    createdAt: string;
    remark: string;
    status: string;
    editor: string;
    agentscode: string;
    parentagent: string;
    bdirection: string;
    botsCode: string;
    wlimit: number;
}

export default function Deposit(props: IProps) {
    const [transType, setTransType] = useState<string>("deposit")
    const { userData, userAccess, telnum, order, setOrder, count } = useContext(AuthContext)
    const [banks, setBanks] = useState<IBanks[]>([])
    const [depositBank, setDepositBank] = useState<IBanks | null>(null)
    const [withdraw, setWithdraw] = useState<IBanks | null>(null)
    const renderOnce = useRef<boolean>(false)

    const CreateOrder = async () => {
        try {
            const order = await axios.post(`${process.env.API_URL}/userdeposit/deposit/get-order`,
                {
                    userid: telnum,
                },
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => res.data.data)

            if (!order) {
                const create = await axios.post(`${process.env.API_URL}/userdeposit/deposit/create-order`,
                    {
                        txnid: (Math.floor(10000000000000000000 + Math.random() * 90000000000000000000)).toString(),
                        userid: telnum,
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${userAccess.accessToken}`
                        }
                    }
                ).then((res) => res.data.data)
                if (!order) {
                    setOrder(create)
                }
            } else {
                if (!order) {
                    setOrder(order)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const GetOrder = async () => {
        try {
            const order = await axios.post(`${process.env.API_URL}/userdeposit/deposit/get-order`,
                {
                    userid: telnum,
                },
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => res.data.data)

            if (!order) {
                setOrder(order)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const Withdraw = async () => {
        try {
            const balance = await axios.get(`${process.env.API_URL}/users/${telnum}`,
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => res.data[0].wallsum)
            
            if(Math.floor(balance) > 0) {
                const txnid = Math.floor(10000000000000000 + Math.random() * 90000000000000000);
                Swal.fire({
                    title: "กำลังทำรายการ...",
                    text: "กรุณารอสักครู่...",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })
                await axios.post(`${process.env.API_URL}/bots/checkBots`, {},
                    {
                        headers: {
                            "Authorization": `Bearer ${userAccess.accessToken}`
                        }
                    }
                )
                setTimeout(async () => {
                    await axios.post(`${process.env.API_URL}/userwithdraw/create`,
                        {
                            txnid: txnid.toString(),
                            amount: balance,
                            localtime: moment().format("DDMMYYYY"),
                            editor: userData.name,
                            profilesId: userData?.id,
                            crbankweb: userData?.banknum,
                            crbankcode: userData?.banksCode,
                            transtate: "START",
                            bankswebCode: "1261803298",
                            usersId: userData?.id
                        }
                    ).then(async () => {
                        await axios.post(`${process.env.API_URL}/userwithdraw/withdrawSub`)
                        .then(() => {
                            Swal.close();
                            Swal.fire({
                                title: "ทำรายการถอนสำเร็จ",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });
                        })
                        .catch((err) => {
                            Swal.close();
                            Swal.fire({
                                title: "Error",
                                icon: err,
                                timer: 1500,
                                showConfirmButton: false
                            });
                        })

                    })
                }, 3000)
            }else{
                Swal.fire({
                    title: "Error",
                    text: "จำนวนเงินไม่เพียงพอ",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "เกิดข้อผิดพลาดระบบ",
                icon: "error",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }

    const copyToClipboard = (str: string) => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        Swal.fire({
            title: "คัดลอกสำเร็จ",
            icon: "success",
            timer: 1000,
            showConfirmButton: false
        })
      }

    const fetchBanks = async () => {
        try {
            await axios.post(`${process.env.API_URL}/banksweb/findalladmin`,
                {
                    agentscode: userData.agentscode,
                    page: 1,
                    parentagent: userData.agentscode,
                    perpage: 50,
                    searchval: "",
                    sortField: "createdAt",
                    sortOrder: "desc"
                },
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => {
                const { data } = res.data
                const deposit = data.find((item: IBanks) => item.status === "ACTIVE" && item.bdirection === "DEPOSIT")
                const withdraw = data.find((item: IBanks) => item.status === "ACTIVE" && item.bdirection === "WITHDRAW")
                setDepositBank(deposit)
                setWithdraw(withdraw)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!renderOnce.current) {
            fetchBanks()
            GetOrder()
        }
        renderOnce.current == true
    }, [])

    useEffect(() => {
        console.log(order)
    }, [order])

    return (
        <>
            <Modal>
                <BgGrey />
                <DivFlexHead>
                    <TfiAngleLeft style={{ cursor: "pointer" }} size={16} color="Grey" onClick={() => props.setModalPage({ name: "menu", element: null })} />
                    <TextHead>ฝาก - ถอน</TextHead>
                    <AiOutlineClose style={{ cursor: "pointer" }} size={14.67} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                </DivFlexHead>

                <FlexButton>
                    <GoldLine isType={transType} />
                    <ButtonType isActive={transType == "withdraw" ? "true" : "false"} onClick={() => setTransType("withdraw")}>
                        <TextButtonType>ถอนเงิน</TextButtonType>
                    </ButtonType>
                    <ButtonType isActive={transType == "deposit" ? "true" : "false"} onClick={() => setTransType("deposit")}>
                        <TextButtonType>ฝากเงิน</TextButtonType>
                    </ButtonType>
                </FlexButton>

                {/* Deposit */}
                {
                    transType === "deposit" &&
                    (
                        <FlexMenu>
                            <DivTextMenu>
                                <Textmenu>บัญชีผู้ฝากที่ใช้สมัคร</Textmenu>
                            </DivTextMenu>
                            <FlexDeatil>
                                <DivTextDetail>
                                    <TextDetail>ชื่อบัญชี : {userData.name}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>บัญชีธนาคาร : {userData.bankname}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>เลขบัญชี : {userData.banknum}</TextDetail>
                                </DivTextDetail>
                            </FlexDeatil>
                            <DivTextRemark>
                                <TextRemark>ต้องใช้บัญชีที่สมัครเข้ามาในการฝากเงินเท่านั้น</TextRemark>
                            </DivTextRemark>
                            <Line />
                            <DivTextMenu>
                                <Textmenu>บัญชีฝากเข้า</Textmenu>
                            </DivTextMenu>
                            <FlexDeatil>
                                <DivTextDetail>
                                    <TextDetail>ชื่อบัญชี : {depositBank?.name.slice(0, 14)}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>บัญชีธนาคาร : {depositBank?.banksCode}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>เลขบัญชี : {depositBank?.code}</TextDetail>
                                </DivTextDetail>
                            </FlexDeatil>
                            <ButtonCopy onClick={() => copyToClipboard(depositBank?.code as string)}>
                                <TextButtonCopy>คัดลอกเลขบัญชี</TextButtonCopy>
                            </ButtonCopy>
                            <GoldButton onClick={CreateOrder}>
                                <TextButton>ตรวจสอบการฝากเงิน</TextButton>
                            </GoldButton>
                            {
                                order && (
                                    <>
                                        <Content>
                                            <NameContainer>
                                                <SubTitle>กำลังตรวจสอบรายการฝาก</SubTitle>
                                                <SubMenu>{moment(order.createdAt).format("hh:mm DD/MM/YYYY")}</SubMenu>
                                            </NameContainer>
                                            <NameContainer>
                                                <MoneyText>
                                                    เหลือเวลา {count ? `${count?.minutes(2)}:${count?.seconds().length == 1 ? "0"+count?.seconds() : count?.seconds()}` : `2:00`} นาที
                                                </MoneyText>
                                                <SubMenu1>
                                                    {order.transtate}
                                                </SubMenu1>
                                            </NameContainer>
                                        </Content>
                                    </>
                                )
                            }
                            <TextTransfer onClick={() => props.setModalPage({ name: "statement", element: <Statement modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>ประวัติธุรกรรม</TextTransfer>
                            <TextRemark2>- ยอดจะปรับอัตโนมัติภายใน 30 วินาที - <br />งดโอนช่วงเวลา 00.00 - 01.00 ยอดอาจเข้าช้าเกิน 2 ชั่วโมง *</TextRemark2>
                        </FlexMenu>
                    )
                }

                {/* Withdraw */}
                {
                    transType === "withdraw" &&
                    (
                        <FlexMenu>
                            <FlexDetailMoney>
                                <TextDetailMoney>จำนวนเครดิตทั้งหมด</TextDetailMoney>
                                <TextDetailMoney2>{ userData.wallsum.toFixed(2) } ฿</TextDetailMoney2>
                            </FlexDetailMoney>
                            <GoldButton onClick={Withdraw}>
                                <TextButton>ถอนเงินทั้งหมด</TextButton>
                            </GoldButton>
                            {/* <ButtonCopy>
                                <TextButtonCopy>ถอนระบุจำนวนเงิน</TextButtonCopy>
                            </ButtonCopy> */}
                            <TextTransfer onClick={() => props.setModalPage({ name: "statement", element: <Statement modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>ประวัติธุรกรรม</TextTransfer>
                            <DivTextRemark>
                                <TextRemark>ยอดเงินจะเข้าตามบัญชีที่ใช้สมัครด้านล่าง</TextRemark>
                            </DivTextRemark>
                            <Line />
                            <DivTextMenu>
                                <Textmenu>บัญชีที่ใช้สมัคร</Textmenu>
                            </DivTextMenu>
                            <FlexDeatil>
                                <DivTextDetail>
                                    <TextDetail>ชื่อบัญชี : {userData.name}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>บัญชีธนาคาร : {userData.bankname}</TextDetail>
                                </DivTextDetail>
                                <DivTextDetail>
                                    <TextDetail>เลขบัญชี : {userData.banknum}</TextDetail>
                                </DivTextDetail>
                            </FlexDeatil>
                            <TextRemark2>ถ้าคุณรับโปรโมชั่นอยู่ ยอดเครดิตจะถูกตัดออกทั้งหมด</TextRemark2>
                        </FlexMenu>
                    )
                }
            </Modal>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
        </>
    )
}

const SubMenu1 = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: yellow;
`

const MoneyText = styled.span`
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.5px;
    color: #fff;
`

const SubMenu = styled.p`
    font-size: 10px;
    font-weight: 300;
    color: #888;
`

const SubTitle = styled.span`
    font-size: 12px;
    font-weight: 300;
    color: #888;
`

const NameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Content = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);
`

const Modal = styled.div`
    width: 320px;
    height: 450px;

    position: relative;

    position: fixed;
    top: 50px;
    right: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 0px 0px 5px 5px;

    gap: 10px;
    
    background-color: #000000;
    color: #000;
    z-index: 150;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 89vh;

        top: 50px;
        left: 0;
    }
`

const BgGrey = styled.div`
    width: 320px;
    height: 40px;

    position: absolute;
    left: 0px;
    top: 0px;

    z-index: 1;

    background: #121116;

    @media (max-width: 1024px) {
        width: 100vw;
    }
`

const DivFlexHead = styled.div`
    width: 90%;
    height: 37px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`

const TextHead = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9DA3AD;
`

const FlexMenu = styled.div`
    width: 81%;
    height: 410px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-y: scroll;

    gap: 10px;
    padding-bottom: 54px;
    margin-top: 15px;

    @media (max-width: 1024px) {
        height: 100%;
    }
`

const FlexButton = styled.div`
    width: 77%;
    height: 33px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
    gap: 0px;

    /* overflow: hidden; */

    background: #121116;
    border-radius: 5px;
`

const GoldLine = styled.div<{ isType: string }>`
    width: 50%;
    height: 3px;

    position: absolute;
    transition-duration: 300ms;
    ${props => props.isType === "deposit" ? `left: 100%; transform: translateX(-100%);` : `left: 0;`}
    bottom: 0px;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const ButtonType = styled.div<{ isActive: string }>`
    cursor: pointer;
    width: 50%;
    height: 33px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${props => props.isActive === "true" && `background: #000;`}
`

const TextButtonType = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const DivTextMenu = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Textmenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const FlexDeatil = styled.div`
    width: 100%;
    height: 118px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;
`

const DivTextDetail = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const TextDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    padding-left: 15px;

    color: #FFFFFF;

    opacity: 0.3;
`

const DivTextRemark = styled.div`
    width: 100%;
    height: 18px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TextRemark = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    /* yellow */

    color: #D2BB6E;
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background: #121116;
`

const ButtonCopy = styled.button`
    cursor: pointer;
    width: 100%;
    height: 29px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 1px solid #FFFFFF;
    border-radius: 5px;

    background-color: #000000;
`

const TextButtonCopy = styled.p`
   font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const GoldButton = styled.button`
    cursor: pointer;
    border: none;
    width: 100%;
    height: 29px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 5px; 
`

const TextButton = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`

const TextTransfer = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #FFFFFF;
`

const TextRemark2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #FFFFFF;
`

const FlexDetailMoney = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 0;
`

const TextDetailMoney = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;
    /* identical to box height, or 15px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.011em;

    color: rgba(255, 255, 255, 0.8);
`

const TextDetailMoney2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    /* Label Color/Dark/Primary */

    color: #FFFFFF;
`