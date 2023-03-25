import { AuthContext } from '@/pages/_app';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import styled from 'styled-components'
import Swal from 'sweetalert2';
import Forget from './forget';
import Register from './register';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Login(props: IProps) {

    const { userAccess, setUserAccess } = useContext(AuthContext)
    const [ steps, setSteps ] = useState<number>(1)

    const formLogin = useFormik({
        initialValues: {
            telnum: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                await axios.post(`${process.env.API_URL}/auth/playerlogin`,
                    {
                        telnum: values.telnum,
                        password: values.password
                    }
                ).then((res) => {
                    const { data } = res
                    if(data.accessToken!) {
                        localStorage.setItem("access", JSON.stringify(data))
                        localStorage.setItem("telnum", values.telnum)
                        setUserAccess(data)
                        setSteps(2)
                    }else{
                        Swal.fire({
                            title: "Error",
                            text: data,
                            icon: "error",
                            timer: 1000,
                            showConfirmButton: false
                        })
                    }
                    
                })
            } catch (error) {
                console.log(error)
            }
        }
    })

    useEffect(() => {
        console.log(props.modalPage.name)
    }, [props.modalPage.name])

    return (
        <>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
            <Modal>
                <IconX>
                    <AiOutlineClose size={20} onClick={() => props.setModalPage({ name: "", element: null })} />
                </IconX>

                {/* Form Login */}
                {
                    steps === 1 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png' />
                            </DivLogo>
                            <FlexDetails>

                                <TextType>เข้าสู่ระบบ</TextType>

                                <BoxDetail type="text" name="telnum" autoFocus value={formLogin.values.telnum} onChange={formLogin.handleChange} placeholder='เบอร์มือถือ' />
                                
                                <BoxDetail type="password" name="password" value={formLogin.values.password} onChange={formLogin.handleChange} placeholder='รหัสผ่าน' />

                                <GoldButton onClick={formLogin.submitForm}>
                                    <TextButton>เข้าสู่ระบบ</TextButton>
                                </GoldButton>

                                <DivTextRemark onClick={() => props.setModalPage({ name: "forget", element: <Forget modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                    <TextRemark>ลืมรหัสผ่าน ?</TextRemark>
                                </DivTextRemark>

                                <Line />
                                <ButtonCopy onClick={() => props.setModalPage({ name: "forget", element: <Register modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                    <TextButtonCopy>สมัครสมาชิก</TextButtonCopy>
                                </ButtonCopy>
                            </FlexDetails>
                        </FlexMains>
                    )
                }
                
                {/* Reponse Success */}
                {
                    steps === 2 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png'/>
                            </DivLogo>
                            <FlexDetails>
                                <div className="loading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
                                        <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" strokeWidth="6px"></circle>
                                        <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" strokeWidth="6px" strokeLinecap="round"></circle>
                                        <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="#D2BB6E" strokeWidth="6px" strokeLinecap="round"></polyline>
                                    </svg>
                                </div>
                                <TextDetailCom>เข้าสู่ระบบสำเร็จ</TextDetailCom>
                                <GoldButton onClick={() => props.setModalPage({ name: "", element: null })}>
                                    <TextButton>เข้าสู่เว็ปไซต์</TextButton>
                                </GoldButton>
                            </FlexDetails>
                        </FlexMains>
                    )
                }
                
                <Contactme>
                    <TextLine>LINE : Royalbet </TextLine>
                    <DivSo>
                        <FlexSo>
                            <Box src="/assets/img/icon/social/facebook.png" />
                            <Box src="/assets/img/icon/social/instagram.png" />
                            <Box src="/assets/img/icon/social/twitter.png" />
                            <Box src="/assets/img/icon/social/youtube.png" />
                            <Box src="/assets/img/icon/social/telegram.png" />
                        </FlexSo>
                    </DivSo>
                </Contactme>
            </Modal>
        </>
        
    )
}

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;

    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.2s linear;

    background: rgba(0,0,0,0.9);
`

const Modal = styled.div`
    width: 320px;
    height: 500px;

    position: relative;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 40;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 0px 0px 5px 5px;

    gap: 10px;
    
    border-radius: 10px;

    background: #121116;
    color: #000;
    z-index: 150;
`

const IconX = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

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

const DivTextRemark = styled.button`
    cursor: pointer;
    border: none;
    background: none;
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

const Box = styled.img`
    width: 30px;
    height: 30px;

    border-radius: 90px;
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