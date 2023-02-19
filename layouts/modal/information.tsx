import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
    modalPage: ReactNode;
    setModalPage: Dispatch<SetStateAction<ReactNode>>;
}

export default function Information(props: IProps) {
    
  return (
    <Modal>
        <BgGrey />
        <DivFlexHead>
            <TfiAngleLeft size={16}  color="Grey" onClick={() => props.setModalPage(null)}/>
            <TextHead>ข้อมูลส่วนตัว</TextHead>
            <AiOutlineClose size={14.67} color="Grey"/>
        </DivFlexHead>
        <DivFlexinfo>
            <Boxinfo />
            <Textinfo>Username</Textinfo>
        </DivFlexinfo>
        <Flexmenu>
            <FlexFr>
                <Textmenu>ชื่อ-สกุล : นาย สมจริง สนุกขาว</Textmenu>
            </FlexFr>
            <FlexFr>
                <Textmenu>เบอร์มือถือ : 081-234-5678</Textmenu>
            </FlexFr>
            <FlexFr>
                <Textmenu>ธนาคาร : กสิกรไทย</Textmenu>
            </FlexFr>
            <FlexFr>
                <Textmenu1>เลขบัญชี : 1234567890</Textmenu1>
            </FlexFr>
            <FlexFr>
                <Textmenu1>วันที่สมัคร : 01/01/01</Textmenu1>
            </FlexFr>
            <FlexFr>
                <Textmenu1>รู้จักเราจาก : เพื่อนแนะนำ</Textmenu1>
            </FlexFr>
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
    height: 84px;

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

const DivFlexinfo = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    z-index: 2;
`

const Boxinfo = styled.div`
    width: 80px;
    height: 80px;

    border-radius: 90px;

    background-color: grey;
`

const Textinfo = styled.p`
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const Flexmenu = styled.div`
    width: 80%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 5px;
`

const FlexFr = styled.div`
    width: 100%;
    height: 36px;
`

const Textmenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    padding-left: 15px;
    color: #FFFFFF;

    opacity: 0.5;
`

const Textmenu1 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    padding-left: 15px;
    color: #515151;
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