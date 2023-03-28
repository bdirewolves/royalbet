import { AuthContext } from '@/pages/_app';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components'
import Swal from 'sweetalert2';
import Login from './login';

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
    phone: string;
    email: string;
    contact: string;
    address1: string;
    address2: string;
    createdAt: string;
    localtime: string;
    remark: string;
    status: string;
    editor: string;
}

export default function Register(props: IProps) {
    const [ steps, setSteps ] = useState(1)
    const [ banks, setBanks ] = useState<IBanks[]>([])
    const [ otpCode, setOtpCode ] = useState('');
    const { setUserAccess } = useContext(AuthContext)
    const [ telnum, setTelnum ] = useState("")
    const otpRefs = useRef<Array<HTMLInputElement> | null>([])

    const handleKeyUp = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        const input = otpRefs.current?.[index];
        if (input instanceof HTMLInputElement && event.key.match(/[0-9]/)) {
            if ((event.target as HTMLInputElement).value) {
                input.value = event.key;
                const nextInput = otpRefs.current?.[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
        setOtpCode(otpRefs.current?.map((input) => input?.value).join('') || '');
        formStep2.values.pin = otpCode
    };

    const fetchBanks = async () => {
        try {
            await axios.post(`${process.env.API_URL}/banks/findall`,
                {
                    searchval: ""
                }
            ).then((res) => {
                const { data } = res.data
                setBanks(data)
            })
        } catch (error) {

        }
    }

    const formStep1 = useFormik({
        initialValues: {
            telnum: ""
        },
        onSubmit: async (values) => {
            //? /auth/preRegister
            await axios.post(`${process.env.API_URL}/auth/preRegister`,
                {
                    telnum: values.telnum
                }
            ).then((response) => {
                const { data } = response
                if (data.status == "success") {
                    Swal.fire({
                        title: "success",
                        text: "OTP ถูกส่งเรียบร้อย",
                        icon: "success",
                        timer: 1000,
                        showConfirmButton: false
                    }).then(() => {
                        setSteps(steps + 1)
                        setTelnum(values.telnum)
                        formStep2.values.telnum = values.telnum
                    })
                } else {
                    Swal.fire({
                        title: "Error",
                        text: data.message,
                        icon: "error",
                        timer: 1000,
                        showConfirmButton: false
                    })
                }
            })

        }
    })

    const formStep2 = useFormik({
        initialValues: {
            telnum: telnum,
            pin: otpCode
        },
        onSubmit: async (values) => {
            try {
                await axios.post(`${process.env.API_URL}/auth/verifysms`,
                    {
                        telnum: telnum,
                        pin: otpCode
                    }
                ).then((response) => {
                    const { data } = response
                    if (data.status == "Success") {
                        Swal.fire({
                            title: "Success",
                            text: "ยืนยันสำเร็จ",
                            icon: "success",
                            timer: 1000,
                            showConfirmButton: false
                        }).then(() => {
                            setSteps(steps + 1)
                            formStep3.values.telnum = values.telnum
                        })
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: data.message,
                            icon: "error",
                            timer: 1000,
                            showConfirmButton: false
                        })
                    }
                })
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: "เกิดข้อผิดพลาด",
                    icon: "error",
                    timer: 1000,
                    showConfirmButton: false
                })
            }
        }
    })

    const formStep3 = useFormik({
        initialValues: {
            telnum: formStep1.values.telnum,
            password: "",
            confirm_password: "",
            banknum: "",
            bankname: "NONE",
            policy: "false"
        },
        onSubmit: async (values) => {
            setSteps(steps + 1)
            try {
                await axios.post(`${process.env.API_URL}/auth/register`,
                    {
                        telnum: values.telnum,
                        password: values.password,
                        banknum: values.banknum,
                        bankname: values.bankname,
                        agentscode: "494405312.95346844AG",
                        parentagent: "494405312.95346844AG"
                    }
                ).then((response) => {
                    const { data } = response
                    if (data.status == "Success") {
                        Swal.fire({
                            title: "Success",
                            icon: "success",
                            timer: 1000,
                            showConfirmButton: false
                        }).then(async () => {
                            await axios.post(`${process.env.API_URL}/gfservice/player-create`,
                                {
                                    player_name: Number(values.telnum),
                                }
                            )
                            await axios.post(`${process.env.API_URL}/auth/playerlogin`,
                                {
                                    telnum: values.telnum,
                                    password: values.password
                                }
                            ).then((data_login) => {
                                console.log(data_login)
                                localStorage.setItem("access", JSON.stringify(data_login.data))
                                localStorage.setItem("telnum", values.telnum)
                                setUserAccess(data_login.data)
                                setSteps(steps+1)
                            })
                        })
                    }
                })
            } catch (err) {
                Swal.fire({
                    title: "Error",
                    text: "เกิดข้อผิดพลาด",
                    icon: "error",
                    timer: 1000,
                    showConfirmButton: false
                })
            }
        }
    })

    useEffect(() => {
        fetchBanks()
    }, [])

    return (
        <>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
            <Modal>
                <IconX>
                    <AiOutlineClose size={20} onClick={() => props.setModalPage({ name: "", element: null })} />
                </IconX>

                {/* Step 1 */}
                {
                    steps === 1 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png' />
                            </DivLogo>
                            <FlexDetails>
                                <TextType>สมัครสมาชิก</TextType>
                                <BoxDetail type="text" autoFocus name="telnum" value={formStep1.values.telnum} onChange={formStep1.handleChange} placeholder='เบอร์มือถือ' />
                                <GoldButton onClick={formStep1.submitForm}>
                                    <TextButton>สมัครสมาชิก</TextButton>
                                </GoldButton>
                                <Line />
                                <ButtonCopy onClick={() => props.setModalPage({ name: "login", element: <Login modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                                </ButtonCopy>
                            </FlexDetails>
                        </FlexMains>
                    )
                }

                {/* Step 2 */}
                {
                    steps === 2 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png' />
                            </DivLogo>
                            <FlexDetails>
                                <TextType>สมัครสมาชิก</TextType>
                                <TextOTP>กรอกรหัส OTP</TextOTP>
                                <DivBoxOTP>
                                    <BoxOTP
                                        type="text"
                                        autoFocus
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(0, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[0] = el
                                        }}
                                    />
                                    <BoxOTP
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(1, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[1] = el
                                        }}
                                    />
                                    <BoxOTP
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(2, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[2] = el
                                        }}
                                    />
                                    <BoxOTP
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(3, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[3] = el
                                        }}
                                    />
                                    <BoxOTP
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(4, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[4] = el
                                        }}
                                    />
                                    <BoxOTP
                                        type="text"
                                        maxLength={1}
                                        onKeyUp={(event) => handleKeyUp(5, event)}
                                        ref={(el) => {
                                            //@ts-ignore
                                            otpRefs.current[5] = el
                                        }}
                                    />
                                </DivBoxOTP>
                                <GoldButton onClick={formStep2.submitForm}>
                                    <TextButton>ถัดไป</TextButton>
                                </GoldButton>
                                <Line />
                                <ButtonCopy onClick={() => props.setModalPage({ name: "login", element: <Login modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                                </ButtonCopy>
                            </FlexDetails>
                        </FlexMains>
                    )
                }


                {/* Step 3 */}
                {
                    steps === 3 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png' />
                            </DivLogo>
                            <FlexDetails>
                                <TextType>สมัครสมาชิก</TextType>
                                <BoxDetail type="text" name="telnum" value={formStep1.values.telnum} onChange={formStep1.handleChange} readOnly placeholder='เบอร์มือถือ : 0812345678' />
                                <BoxDetail type="text" name="password" value={formStep3.values.password} onChange={formStep3.handleChange} placeholder='รหัสผ่าน : Password123' />
                                <BoxDetail type="text" name="confirm_password" value={formStep3.values.confirm_password} onChange={formStep3.handleChange} placeholder='ยืนยันรหัสผ่าน' />

                                <SelectBox name="bankname" value={formStep3.values.bankname} onChange={formStep3.handleChange}>
                                    <option value="NONE" defaultChecked disabled>เลือกธนาคาร</option>
                                    {
                                        banks.map((item, index) => (
                                            <option key={index} value={item.code}>{item.name}</option>
                                        ))
                                    }
                                </SelectBox>

                                <BoxDetail type="text" name="banknum" value={formStep3.values.banknum} onChange={formStep3.handleChange} placeholder='เลขบัญชีธนาคาร' />

                                <DivAllow>
                                    <DivTextAllow>
                                        <input type="checkbox" name="policy" value={formStep3.values.policy} onChange={formStep3.handleChange} />
                                        <TextAllow htmlFor="policy">ข้าพเจ้าเห็นด้วย</TextAllow>
                                    </DivTextAllow>
                                    <TextAllow2>เงื่อนไขและข้อตกลง</TextAllow2>
                                </DivAllow>
                                <GoldButton onClick={formStep3.submitForm}>
                                    <TextButton>สมัครสมาชิก</TextButton>
                                </GoldButton>
                                <Line />
                                <ButtonCopy onClick={() => props.setModalPage({ name: "login", element: <Login modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                    <TextButtonCopy>มีบัญชีแล้ว / เข้าสู่ระบบ</TextButtonCopy>
                                </ButtonCopy>
                            </FlexDetails>
                        </FlexMains>
                    )
                }

                {/* Step 3 */}
                {
                    steps === 4 &&
                    (
                        <FlexMains>
                            <DivLogo>
                                <Logo src='/assets/img/logo.png' />
                            </DivLogo>
                            <FlexDetails>
                                <div className="loading">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
                                        <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" strokeWidth="6px"></circle>
                                        <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="#D2BB6E" strokeWidth="6px" strokeLinecap="round"></circle>
                                        <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="#D2BB6E" strokeWidth="6px" strokeLinecap="round"></polyline>
                                    </svg>
                                </div>
                                <TextDetailCom>สมัครสมาชิกสำเร็จ</TextDetailCom>
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

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;

    background: rgba(0,0,0,0.9);
`

const SelectBox = styled.select`
    font-family: "Prompt";
    border: none;
    padding: 5px;
    width: 100%;
    height: 36px;

    background: #060606;
    /* color: rgba(255, 255, 255, 0.5); */
    color: #fff;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`

const Modal = styled.div`
    width: 320px;
    height: 500px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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

    @media (max-width: 375px) {
        top: 90px;
        transform: translate(-50%, 0);
    }
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

const BoxDetail = styled.input`
    font-family: "Prompt";
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

const BoxOTP = styled.input`
    border: none;
    width: 37px;
    height: 36px;
    text-align: center;

    background: #060606;
    color: #fff;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
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

const BoxAllow = styled.input`
    width: 16px;
    height: 16px;

    border: 1px solid white;
`

const TextAllow = styled.label`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #ffffff;
`

const TextAllow2 = styled.button`
    cursor: pointer;
    background: none;
    border: none;
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