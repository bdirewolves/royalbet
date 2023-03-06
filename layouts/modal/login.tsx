import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'

export default function Login() {
    
  return (
    <Modal>
        <IconX />
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>เข้าสู่ระบบ</TextType>
                <BoxDetail>
                    <TextDetail>เบอร์มือถือ</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>รหัสผ่าน</TextDetail>
                </BoxDetail>
                <GoldButton>
                    <TextButton>เข้าสู่ระบบ</TextButton>
                </GoldButton>
                <DivTextRemark>
                    <TextRemark>ลืมรหัสผ่าน ?</TextRemark>
                </DivTextRemark>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>สมัครสมาชิก</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <div className="loading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
                        <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" stroke-width="6px"></circle>
                        <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" stroke-width="6px" stroke-linecap="round"></circle>
                        <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="#D2BB6E" stroke-width="6px" stroke-linecap="round"></polyline>
                    </svg>
                </div>
                <TextDetailCom>เข้าสู่ระบบสำเร็จ</TextDetailCom>
                <GoldButton>
                    <TextButton>เข้าสู่เว็ปไซต์</TextButton>
                </GoldButton>
            </FlexDetails>
        </FlexMains>
        <Contactme>
            <TextLine>LINE : Royalbet </TextLine>
            <DivSo>
                <FlexSo>
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </FlexSo>
            </DivSo>
        </Contactme>
    </Modal>
  )
}

const Modal = styled.div`
    width: 320px;
    height: 500px;

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
    
    border-radius: 10px;

    background: #121116;
    color: #000;
    z-index: 9999;
`

const IconX = styled.div`
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    top: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 0px 10px;
`

const FlexMains = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 25px;
    margin-top: 25px;
`

const DivLogo = styled.div`
    width: 112.84px;
    height: 100px;
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const FlexDetails = styled.div`
    width: 81%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const TextType = styled.p`
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

const BoxDetail = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background: #060606;
    border-radius: 5px;
`

const TextDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.5;

    padding-left: 15px;
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
    height: 10px;

    border-top: 1px solid #414042;
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

const Contactme = styled.div`
    width: 100%;
    height: 73px;

    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5px;
`

const TextLine = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #999999;
`

const DivSo = styled.div`
    width: 94%;
    height: 43px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #000000;
    border-radius: 10px 10px 0px 0px;
`

const FlexSo = styled.div`
    width: 76%;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 20px;
    margin: 0 35px;
`

const Box = styled.div`
    width: 30px;
    height: 30px;

    border-radius: 90px;
    background-color: grey;
`

const TextDetailCom = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`