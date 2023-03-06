import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
    modalPage: ReactNode;
    setModalPage: Dispatch<SetStateAction<ReactNode>>;
}

export default function Deposit(props: IProps) {
    
    return (
        <Modal>
            <BgGrey />
            <DivFlexHead>
                <TfiAngleLeft size={16}  color="Grey" onClick={() => props.setModalPage(null)}/>
                <TextHead>ฝากเงิน</TextHead>
                <AiOutlineClose size={14.67} color="Grey"/>
            </DivFlexHead>
            <FlexButton>
                <GoldLine />
                <ButtonType>
                    <TextButtonType>ถอนเงิน</TextButtonType>
                </ButtonType>
                <ButtonType>
                    <TextButtonType>ฝากเงิน</TextButtonType>
                </ButtonType>
            </FlexButton>
            {/* <FlexMenu>
                <DivTextMenu>
                    <Textmenu>บัญชีผู้ฝากที่ใช้สมัคร</Textmenu>
                </DivTextMenu>
                <FlexDeatil>
                    <DivTextDetail>
                        <TextDetail>ชื่อบัญชี : นายสมจริง สนุกขาว</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>บัญชีธนาคาร : กสิกรไทย</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>เลขบัญชี : 1234567890</TextDetail>
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
                        <TextDetail>ชื่อบัญชี : นายยิ่งใหญ่ สนุกทอง</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>บัญชีธนาคาร : กสิกรไทย</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>เลขบัญชี : 1234567890</TextDetail>
                    </DivTextDetail>
                </FlexDeatil>
                <ButtonCopy>
                    <TextButtonCopy>คัดลอกเลขบัญชี</TextButtonCopy>
                </ButtonCopy>
                <GoldButton>
                    <TextButton>รับเครดิต</TextButton>
                </GoldButton>
                <TextTransfer>ประวัติธุรกรรม</TextTransfer>
                <TextRemark2>- ยอดจะปรับอัตโนมัติภายใน 30 วินาที - <br/>งดโอนช่วงเวลา 00.00 - 01.00 ยอดอาจเข้าช้าเกิน 2 ชั่วโมง *</TextRemark2>
            </FlexMenu> */}
            <FlexMenu>
                <FlexDetailMoney>
                    <TextDetailMoney>จำนวนเครดิตทั้งหมด</TextDetailMoney>
                    <TextDetailMoney2>10,000฿</TextDetailMoney2>
                </FlexDetailMoney>
                <GoldButton>
                    <TextButton>ถอนเงินทั้งหมด</TextButton>
                </GoldButton>
                <ButtonCopy>
                    <TextButtonCopy>ถอนระบุจำนวนเงิน</TextButtonCopy>
                </ButtonCopy>
                <TextTransfer>ประวัติธุรกรรม</TextTransfer>
                <DivTextRemark>
                    <TextRemark>ยอดเงินจะเข้าตามบัญชีที่ใช้สมัครด้านล่าง</TextRemark>
                </DivTextRemark>
                <Line />
                <DivTextMenu>
                    <Textmenu>บัญชีที่ใช้สมัคร</Textmenu>
                </DivTextMenu>
                <FlexDeatil>
                    <DivTextDetail>
                        <TextDetail>ชื่อบัญชี : นายสมจริง สนุกขาว</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>บัญชีธนาคาร : กสิกรไทย</TextDetail>
                    </DivTextDetail>
                    <DivTextDetail>
                        <TextDetail>เลขบัญชี : 1234567890</TextDetail>
                    </DivTextDetail>
                </FlexDeatil>
                <TextRemark2>ถ้าคุณรับโปรโมชั่นอยู่ ยอดเครดิตจะถูกตัดออกทั้งหมด</TextRemark2>
            </FlexMenu>
        </Modal>
    )
}
    
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
    z-index: 9999;
`

const BgGrey = styled.div`
    width: 320px;
    height: 40px;

    position: absolute;
    left: 0px;
    top: 0px;

    z-index: 1;

    background: #121116;
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

const GoldLine = styled.div`
    width: 50%;
    height: 3px;

    position: absolute;
    left: 0px;
    bottom: 0px;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const ButtonType = styled.div`
    width: 50%;
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

const TextTransfer = styled.p`
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