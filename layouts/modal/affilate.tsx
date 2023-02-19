import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
    modalPage: ReactNode;
    setModalPage: Dispatch<SetStateAction<ReactNode>>;
}

export default function Affilate(props: IProps) {
    
  return (
    <Modal>
        <BgGrey />
        <DivFlexHead>
            <TfiAngleLeft size={16}  color="Grey" onClick={() => props.setModalPage(null)}/>
            <TextHead>แนะนำเพือน</TextHead>
            <AiOutlineClose size={14.67} color="Grey"/>
        </DivFlexHead>
        <Flexmenu>
            <DivTextmenu>
                <Textmenu>ยอดคืนจากเพื่อน</Textmenu>
            </DivTextmenu>
            <FlexFr>
                <FlexCol>
                    <TextSmall>แนะนำเพือน</TextSmall>
                    <TextBig>5 คน</TextBig>
                </FlexCol>
                <FlexCol>
                    <TextSmall>ยอดคืน</TextSmall>
                    <TextBig>10,000฿</TextBig>
                </FlexCol>
            </FlexFr>
            <GoldButton>
                <TextButton>โอนเข้ากระเป๋าหลัก</TextButton>
            </GoldButton>
            <DivTextRemem>
                <TextRemem>- ค่าคอมจะถูกคำนวณทุกวัน เวลา 14.00 น. -</TextRemem>
            </DivTextRemem>
            <DivLine>
                <Line />
            </DivLine>
            <DivTextmenu>
                <Textmenu>ลิ้งก์เชิญเพื่อน</Textmenu>
            </DivTextmenu>
            <DivTextRemem>
                <TextRemem1>(https://xxxxxxx.com/aff/VIN12345)</TextRemem1>
            </DivTextRemem>
            <ButtonCopy>
                <TextButtonCopy>คัดลอกลิ้งก์</TextButtonCopy>
            </ButtonCopy>
            <DivTextRemem>
                <TextRemem2>เงื่อนไขและรายละเอียด</TextRemem2>
            </DivTextRemem>
        </Flexmenu>
        <DivFlexLogout>
            <TextLogout>ออกจากระบบ</TextLogout>
        </DivFlexLogout>
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

const Flexmenu = styled.div`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    gap: 10px;
`

const DivLine = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #121116;
`

const DivTextmenu = styled.div`
    width: 100%;
    height: 21px;

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

const FlexFr = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const FlexCol = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextSmall = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.8);
`

const TextBig = styled.p`
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

const DivTextRemem = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TextRemem = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const TextRemem1 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.5;
`

const TextRemem2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #FFFFFF;

    opacity: 0.3;
`

const DivFlexLogout = styled.div`
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

