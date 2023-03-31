import React, { useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'
import { TfiAngleLeft } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import moment from 'moment';
import { AuthContext } from '@/pages/_app';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

function ChangePass(props: IProps) {

    const { setUserAccess } = useContext(AuthContext)

    const handleLogout = () => {
        setUserAccess(null)
        localStorage.removeItem("access")
        localStorage.removeItem("telnum")
        window.location.reload()
    }

    return (
        <>
            <Modal>
                {/* <BgGrey /> */}

                <DivFlexHead>
                    <TfiAngleLeft style={{ cursor: "pointer" }} size={22} color="Grey" onClick={() => props.setModalPage({ name: "menu", element: null })} />
                    <TextHead>เปลี่ยนรหัสผ่าน</TextHead>
                    <AiOutlineClose style={{ cursor: "pointer" }} size={22} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                </DivFlexHead>
                
                <FlexMains>
                    <DivLogo>
                        <Logo src='/assets/img/logo.png' />
                    </DivLogo>
                    <FlexDetails>
                        <TextType>เปลี่ยนรหัสผ่าน</TextType>
                        <BoxDetail type="text" name="telnum"  placeholder='กรอกเบอร์มือถือที่ใช้สมัคร' />
                        <BoxDetail type="text" name="password"  placeholder='รหัสผ่านปัจจุบัน' />

                        <TextType>ตั้งรหัสผ่านใหม่</TextType>
                        <BoxDetail type="text" name="telnum"  placeholder='รหัสผ่านใหม่' />
                        <BoxDetail type="text" name="password"  placeholder='ยืนยันรหัสผ่านใหม่' />

                        <GoldButton >
                            <TextButton>เปลี่ยนรหัสผ่าน</TextButton>
                        </GoldButton>

                    </FlexDetails>
                </FlexMains>
                
                <DivFlexLogout onClick={handleLogout}>
                    <TextLogout>ออกจากระบบ</TextLogout>
                </DivFlexLogout>
            </Modal>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);
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

    transition-duration: 300ms;

    &:hover {
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 10px;
        transition-duration: 300ms;
    }
`

const BoxDetail = styled.input`
    font-family: 'Prompt';
    border: none;
    padding: 10px;
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background: #060606;
    color: #fff;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
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

const FlexDetails = styled.div`
    margin-bottom: 20px;
    width: 81%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivLogo = styled.div`
    width: 112.84px;
    height: 100px;
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const FlexMains = styled.div`
    margin-bottom: 35px;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 25px;
    margin-top: 25px;
    overflow-y: scroll;
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

    transform: translateY(-120px);

    @media (min-width: 744px) {
        transform: translateY(-60px);
    }

    @media (min-width: 1024px) {
        transform: unset;
    }
`








const TextHead = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9DA3AD;
`

const DivFlexHead = styled.div`
    padding: 10px;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    background: #121116;
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
    
    background: #121116;
    color: #000;
    z-index: 150;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 100vh;

        top: 50px;
        left: 0;
    }
`

export default ChangePass