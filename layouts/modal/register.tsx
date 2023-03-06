import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'

export default function Register() {
    
  return (
    <Modal>
        <IconX />
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>สมัครสมาชิก</TextType>
                <BoxDetail>
                    <TextDetail>เบอร์มือถือ</TextDetail>
                </BoxDetail>
                <GoldButton>
                    <TextButton>สมัครสมาชิก</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>สมัครสมาชิก</TextType>
                <TextOTP>กรอกรหัส OTP</TextOTP>
                <DivBoxOTP>
                    <BoxOTP />
                    <BoxOTP />
                    <BoxOTP />
                    <BoxOTP />
                    <BoxOTP />
                    <BoxOTP />
                </DivBoxOTP>
                <GoldButton>
                    <TextButton>ถัดไป</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>สมัครสมาชิก</TextType>
                <BoxDetail>
                    <TextDetail>เบอร์มือถือ : 0812345678</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>รหัสผ่าน : Password123</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>ยืนยันรหัสผ่าน</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>กรุณาเลือกธนาคาร</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>เลขบัญชีธนาคาร</TextDetail>
                </BoxDetail>
                <DivAllow>
                    <DivTextAllow>
                        <BoxAllow />
                        <TextAllow>ข้าพเจ้าเห็นด้วย</TextAllow>
                    </DivTextAllow>
                    <TextAllow2>เงื่อนไขและข้อตกลง</TextAllow2>
                </DivAllow>
                <GoldButton>
                    <TextButton>สมัครสมาชิก</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>รู้จักเราจากที่ไหน?</TextType>
                <BoxDetail>
                    <TextDetail>เลือกช่องทางที่ทำให้รู้จักเรา</TextDetail>
                </BoxDetail>
                <GoldButton>
                    <TextButton>สำเร็จ</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        {/* <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>รู้จักเราจากที่ไหน?</TextType>
                <BoxDetail>
                    <TextDetail>จากเพื่อน</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>รหัสแนะนำ</TextDetail>
                </BoxDetail>
                <GoldButton>
                    <TextButton>สำเร็จ</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
            </FlexDetails>
        </FlexMains> */}
        <FlexMains>
            <DivLogo>
                <Logo src='/assets/img/logo.png'/>
            </DivLogo>
            <FlexDetails>
                <TextType>รู้จักเราจากที่ไหน?</TextType>
                <BoxDetail>
                    <TextDetail>อื่นๆ</TextDetail>
                </BoxDetail>
                <BoxDetail>
                    <TextDetail>ความคิดเห็นเพิ่มเติม</TextDetail>
                </BoxDetail>
                <GoldButton>
                    <TextButton>สำเร็จ</TextButton>
                </GoldButton>
                <Line />
                <ButtonCopy>
                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                </ButtonCopy>
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
    height: 278px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: scroll;

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

const TextOTP = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const DivBoxOTP = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    gap: 7px;
`

const BoxOTP = styled.div`
    width: 37px;
    height: 36px;

    position: relative;

    background: #060606;
    border-radius: 5px;
`

const DivAllow = styled.div`
    width: 85%;
    height: 48px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const DivTextAllow = styled.div`
    width: 106px;
    height: 28px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 5px;
`

const BoxAllow = styled.div`
    width: 16px;
    height: 16px;

    border: 1px solid white;
`

const TextAllow = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #ffffff;
`

const TextAllow2 = styled.p`
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