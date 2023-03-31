import React, { Dispatch, SetStateAction, useContext } from 'react'
import styled from 'styled-components'
import { AiFillLock, AiOutlineClose, AiOutlineHistory, AiOutlineNotification, AiOutlineUser, AiOutlineUsergroupAdd,  } from "react-icons/ai"
import { IoIosSettings } from "react-icons/io";
import { AuthContext } from '@/pages/_app';
import { HiCash } from 'react-icons/hi';
import Affilate from './affilate';
import ChangePass from './changePass';
import Deposit from './deposit';
import Information from './information';
import Promotion from './promotion';
import Statement from './statement';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Main(props: IProps) {
    const { userData, setUserAccess } = useContext(AuthContext)

    const handleLogout = () => {
        setUserAccess(null)
        localStorage.removeItem("access")
        localStorage.removeItem("telnum")
        window.location.reload()
    }

    return (
        <>
            <Modal>
                <BgGrey />
                <DivFlexHead>
                    <TextHead>โปรไฟล์</TextHead>
                    <CloseBtn>
                        <AiOutlineClose style={{ cursor: "pointer" }} size={22} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                    </CloseBtn>
                </DivFlexHead>

                <DivFlexinfo>
                    <Boxinfo src="/assets/img/users/profile.png" />
                    <Textinfo>{ userData.name }</Textinfo>
                </DivFlexinfo>
                <Gridmenu>
                    <GridFr onClick={() => props.setModalPage({ name: "information", element: <Information modalPage={props.modalPage} setModalPage={props.setModalPage} />})}>
                        <DivFlexMenu>
                            <BoxMenu>
                                <AiOutlineUser size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>ข้อมูลส่วนตัว</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                    <GridFr onClick={() => props.setModalPage({ name: "changepass", element: <ChangePass modalPage={props.modalPage} setModalPage={props.setModalPage} />})}>
                        <DivFlexMenu>
                            <BoxMenu>
                                <AiFillLock size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>เปลี่ยนรหัส</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                    <GridFr onClick={() => props.setModalPage({ name: "deposit", element: <Deposit modalPage={props.modalPage} setModalPage={props.setModalPage}/>})}> 
                        <DivFlexMenu>
                            <BoxMenu>
                                <HiCash size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>ฝาก-ถอน</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                    <GridFr onClick={() => props.setModalPage({ name: "aff", element: <Affilate modalPage={props.modalPage} setModalPage={props.setModalPage} />})}>
                        <DivFlexMenu>
                            <BoxMenu>
                                <AiOutlineUsergroupAdd size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>แนะนำเพือน</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                    <GridFr onClick={() => props.setModalPage({ name: "promotion", element: <Promotion modalPage={props.modalPage} setModalPage={props.setModalPage}/>})}>
                        <DivFlexMenu>
                            <BoxMenu>
                                <AiOutlineNotification size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>โปรโมชั่น</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                    <GridFr onClick={() => props.setModalPage({ name: "statement", element: <Statement modalPage={props.modalPage} setModalPage={props.setModalPage}/>})}>
                        <DivFlexMenu>
                            <BoxMenu>
                                <AiOutlineHistory size={32} color="#9DA3AD" />
                            </BoxMenu>
                            <TextMenu>ประวัติธุรกรรม</TextMenu>
                        </DivFlexMenu>
                        <GoldLine />
                    </GridFr>
                </Gridmenu>
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

const CloseBtn = styled.button`
    position: absolute;
    top: 11px;
    right: 16px;

    border: none;
    background: none;
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
        height: 100vh;

        top: 50px;
        left: 0;
    }
`

const BgGrey = styled.div`
    width: 320px;
    height: 84px;

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
    width: 100%;
    height: 37px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
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

const DivFlexinfo = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    z-index: 2;
`

const Boxinfo = styled.img`
    width: 80px;
    height: 80px;

    border-radius: 90px;

    background-color: grey;
`

const Textinfo = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const Gridmenu = styled.div`
    width: 85%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    justify-content: center;
    align-items: center;
    
    gap: 10px;
`

const GridFr = styled.div`
    cursor: pointer;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 14px;
`

const DivFlexMenu = styled.div`
    width: 100%;
    height: 49px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2px;
`

const BoxMenu = styled.div`
    width: 32px;
    height: 32px;
`

const TextMenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.8);

    @media (max-width: 1023px) {
        font-size: 14px;
    }
`

const GoldLine = styled.div`
    width: 40px;
    height: 2px;
    
    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
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

    transform: translateY(-120px);

    @media (min-width: 744px) {
        transform: translateY(-60px);
    }

    @media (min-width: 1024px) {
        transform: unset;
    }
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