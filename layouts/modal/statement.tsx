import { AuthContext } from '@/pages/_app';
import axios from 'axios';
import moment from 'moment';
import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { TfiAngleLeft } from 'react-icons/tfi';
import styled from 'styled-components'

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Statement(props: IProps) {
    const { setUserAccess } = useContext(AuthContext)
    const [ transType, setTransType ] = useState<string>("all")
    const [ transactions, setTransaction ] = useState<any[]>([])
    const [ deposits, setDeposits ] = useState<any[]>([])
    const [ withdraws, setWithdraws ] = useState<any[]>([])
    const { userData, userAccess } = useContext(AuthContext)
    const [ filters, setFilters ] = useState<any[]>([])

    const fetchTransaction = async () => {
        try {
            const deposit: any[] = await axios.post(`${process.env.API_URL}/userdeposit/DepositCashReport`,
                {
                    nedate: moment(userData.createdAt).format("YYYY-MM-DD"), // newer date
                    searchval: userData.banknum.slice(4, 10),
                    todate: moment().format("YYYY-MM-DD") // older date
                },
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => res.data.data)

            const withdraw: any[] = await axios.post(`${process.env.API_URL}/userwithdraw/WithdrawCashReport`,
                {
                    nedate: moment(userData.createdAt).format("YYYY-MM-DD"), // newer date
                    searchval: userData.telnum.slice(0),
                    todate: moment().format("YYYY-MM-DD") // older date
                },
                {
                    headers: {
                        "Authorization": `Bearer ${userAccess.accessToken}`
                    }
                }
            ).then((res) => res.data.data)

            const tmp: any[] = []

            deposit.length > 0 && deposit.map((item: any) => {
                tmp.push(item.createdAt)
            })

            withdraw.length > 0 && withdraw.map((item: any) => {
                tmp.push(item.createdAt)
            })

            setFilters(Array.from(new Set(tmp)))

            setTransaction(deposit.concat(withdraw))
            setDeposits(deposit)
            setWithdraws(withdraw)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        setUserAccess(null)
        localStorage.removeItem("access")
        localStorage.removeItem("telnum")
        window.location.reload()
    }

    useEffect(() => {
        fetchTransaction()
    }, [])

    return (
        <>
            <Modal>
                <BgGrey />
                <DivFlexHead>
                    <TfiAngleLeft style={{ cursor: "pointer" }} size={16} color="Grey" onClick={() => props.setModalPage({ name: "menu", element: null })} />
                    <TextHead>ประวัติธุรกรรม</TextHead>
                    <AiOutlineClose style={{ cursor: "pointer" }} size={14.67} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                </DivFlexHead>
                <Flexmenu>

                    {/* Tabs */}
                    <FlexButton>
                        <GoldLine isType={transType} />
                        <ButtonType onClick={() => setTransType("all")}>
                            <TextButtonType>ทั้งหมด</TextButtonType>
                        </ButtonType>
                        <ButtonType onClick={() => setTransType("deposit")}>
                            <TextButtonType>ฝาก</TextButtonType>
                        </ButtonType>
                        <ButtonType onClick={() => setTransType("withdraw")}>
                            <TextButtonType>ถอน</TextButtonType>
                        </ButtonType>
                        <ButtonType onClick={() => setTransType("bonus")}>
                            <TextButtonType>โบนัส</TextButtonType>
                        </ButtonType>
                    </FlexButton>

                    {/* List */}
                    <FlexTransaction>

                        {
                            transType === "all" &&
                            (
                                filters.length > 0 ? filters.map((item_filters, index_filters) => (
                                    <>
                                        <DivTextDate key={index_filters}>
                                            <TextDate>{ moment(item_filters).format("DD/MM/YYYY") }</TextDate>
                                        </DivTextDate>
                                        <Line />
                                        {
                                            transactions.filter((item) => moment(item.createdAt).format("DD/MM/YYYY") == moment(item_filters).format("DD/MM/YYYY")) && transactions.map((item, index_transactions) => (
                                                <>
                                                    <FlexRow key={index_transactions}>
                                                        <Box />
                                                        <FlexDetail>
                                                            <TextHeadDetail>{ item.org_message ? "รายการฝากเงิน" : "รายการถอนเงิน" }</TextHeadDetail>
                                                            <TextDetail> { item.org_message ? "++" : "--" } {item.amount} ฿</TextDetail>
                                                        </FlexDetail>
                                                        <FlexDetail2>
                                                            <TextHeadDetail2>ณ เวลา { moment(item.createAt).format("hh:mm") } น.</TextHeadDetail2>
                                                            <Status transtate={item.transtate}>
                                                                <TextStatus>
                                                                    {
                                                                        (
                                                                            (item.transtate === "SUCCESS" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "COMPLETE" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "PENDING" && "กำลังทำรายการ") ||
                                                                            (item.transtate === "FAIL" && "ทำรายการไม่สำเร็จ")
                                                                        ) || "รอดำเนินการ"
                                                                    }
                                                                </TextStatus>
                                                            </Status>
                                                        </FlexDetail2>
                                                    </FlexRow>
                                                    <Line />
                                                </>
                                            ))
                                        }
                                    </>
                                ))
                                :
                                <NullText>ไม่มีข้อมูลในขณะนี้</NullText>
                            )
                        }

                        {
                            transType === "deposit" &&
                            (
                                filters.length > 0 ? filters.map((item_filters, index_filters) => (
                                    <>
                                        <DivTextDate key={index_filters}>
                                            <TextDate>{ moment(item_filters).format("DD/MM/YYYY") }</TextDate>
                                        </DivTextDate>
                                        <Line />
                                        {
                                            deposits.filter((item) => moment(item.createdAt).format("DD/MM/YYYY") == moment(item_filters).format("DD/MM/YYYY")) && deposits.map((item, index_deposit) => (
                                                <>
                                                    <FlexRow key={index_deposit}>
                                                        <Box />
                                                        <FlexDetail>
                                                            <TextHeadDetail>{ item.org_message ? "รายการฝากเงิน" : "รายการถอนเงิน" }</TextHeadDetail>
                                                            <TextDetail> { item.org_message ? "++" : "--" } {item.amount} ฿</TextDetail>
                                                        </FlexDetail>
                                                        <FlexDetail2>
                                                            <TextHeadDetail2>ณ เวลา { moment(item.createAt).format("hh:mm") } น.</TextHeadDetail2>
                                                            <Status transtate={item.transtate}>
                                                                <TextStatus>
                                                                    {
                                                                        (
                                                                            (item.transtate === "SUCCESS" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "COMPLETE" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "PENDING" && "กำลังทำรายการ") ||
                                                                            (item.transtate === "FAIL" && "ทำรายการไม่สำเร็จ")
                                                                        ) || "รอดำเนินการ"
                                                                    }
                                                                </TextStatus>
                                                            </Status>
                                                        </FlexDetail2>
                                                    </FlexRow>
                                                    <Line />
                                                </>
                                            ))
                                        }
                                    </>
                                ))
                                :
                                <NullText>ไม่มีข้อมูลการฝากในขณะนี้</NullText>
                            )
                        }

                        {
                            transType === "withdraw" &&
                            (
                                filters.length > 0 ? filters.map((item_filters, index_filters) => (
                                    <>
                                        <DivTextDate key={index_filters}>
                                            <TextDate>{ moment(item_filters).format("DD/MM/YYYY") }</TextDate>
                                        </DivTextDate>
                                        <Line />
                                        {
                                            withdraws.filter((item) => moment(item.createdAt).format("DD/MM/YYYY") == moment(item_filters).format("DD/MM/YYYY")) && withdraws.map((item, index_withdraw) => (
                                                <>
                                                    <FlexRow key={index_withdraw}>
                                                        <Box />
                                                        <FlexDetail>
                                                            <TextHeadDetail>{ item.org_message ? "รายการฝากเงิน" : "รายการถอนเงิน" }</TextHeadDetail>
                                                            <TextDetail> { item.org_message ? "++" : "--" } {item.amount} ฿</TextDetail>
                                                        </FlexDetail>
                                                        <FlexDetail2>
                                                            <TextHeadDetail2>ณ เวลา { moment(item.createAt).format("hh:mm") } น.</TextHeadDetail2>
                                                            <Status transtate={item.transtate}>
                                                                <TextStatus>
                                                                    {
                                                                        (
                                                                            (item.transtate === "SUCCESS" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "COMPLETE" && "ทำรายการทำเร็จ") || 
                                                                            (item.transtate === "PENDING" && "กำลังทำรายการ") ||
                                                                            (item.transtate === "FAIL" && "ทำรายการไม่สำเร็จ")
                                                                        ) || "รอดำเนินการ"
                                                                    }
                                                                </TextStatus>
                                                            </Status>
                                                        </FlexDetail2>
                                                    </FlexRow>
                                                    <Line />
                                                </>
                                            ))
                                        }
                                    </>
                                ))
                                :
                                <NullText>ไม่มีข้อมูลการถอนในขณะนี้</NullText>
                            )
                        }

                        {
                            transType === "bonus" &&
                            (
                                <NullText>ไม่มีข้อมูลการถอนโบนัสในขณะนี้</NullText>
                            )
                        }
                    </FlexTransaction>
                </Flexmenu>
                <DivFlexLogout onClick={handleLogout}>
                    <TextLogout>ออกจากระบบ</TextLogout>
                </DivFlexLogout>
            </Modal>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
        </>
    )
}

const NullText = styled.p`
    font-size: 12px;
    color: #fff;
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
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9DA3AD;
`

const Flexmenu = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 20px;
    gap: 15px;
`

const FlexButton = styled.div`
    width: 77%;
    height: 33px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0px;

    overflow: hidden;

    background: #121116;
    border-radius: 5px;
`

const GoldLine = styled.div<{ isType: string }>`
    width: 25%;
    height: 3px;

    position: absolute;
    transition-duration: 300ms;
    ${props => props.isType === "all" && `left: 0;`}
    ${props => props.isType === "deposit" && `left: 25%;`}
    ${props => props.isType === "withdraw" && `left: 50%;`}
    ${props => props.isType === "bonus" && `left: 75%;`}
    bottom: 0px;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const ButtonType = styled.div`
    cursor: pointer;
    width: 25%;
    height: 33px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

const FlexTransaction = styled.div`
    width: 88%;
    height: 279px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: scroll;

    gap: 5px;
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #121116;
`

const DivTextDate = styled.div`
    width: 100%;
    height: 18px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const TextDate = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.3;
`

const FlexRow = styled.div`
    width: 100%;
    height: 42px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;
`

const Box = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 90px;
    overflow: hidden;

    background-color: Grey;
`

const FlexDetail = styled.div`
    width: 147px;
    height: 42px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 0px;
`

const TextHeadDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const TextDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const FlexDetail2 = styled.div`
    width: 87px;
    height: 42px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    gap: 0px;
`

const TextHeadDetail2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 250;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #FFFFFF;
`

const Status = styled.div<{ transtate: string }>`
    width: 87px;
    height: 17px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${props => props.transtate === "SUCCESS" && `background: #198754;`}
    ${props => props.transtate === "COMPLETE" && `background: #34C759;`}
    ${props => props.transtate === "FAIL" && `background: #dc3545;`}
    ${props => props.transtate === "PENDING" && `background: #ffc107;`}
    ${props => props.transtate === "START" && `background: #0dcaf0;`}

    border-radius: 5px;
`

const TextStatus = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

`

const DivFlexLogout = styled.div`
    cursor: pointer;
    width: 86px;
    height: 24px;

    position: absolute;
    bottom: 10px;
    right: 10px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;
`

const TextLogout = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.011em;

    color: rgba(255, 255, 255, 0.8);
`