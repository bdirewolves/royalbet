import React, { Dispatch, ReactNode, SetStateAction, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from '@/pages/_app';
import moment from 'moment';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Information(props: IProps) {
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
                    <TfiAngleLeft style={{ cursor: "pointer" }} size={16} color="Grey" onClick={() => props.setModalPage({ name: "menu", element: null })} />
                    <TextHead>ข้อมูลส่วนตัว</TextHead>
                    <AiOutlineClose style={{ cursor: "pointer" }} size={14.67} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                </DivFlexHead>
                <DivFlexinfo>
                    <Boxinfo src="/assets/img/users/profile.png" />
                    <Textinfo>{ userData.name }</Textinfo>
                </DivFlexinfo>
                <Flexmenu>
                    <FlexFr>
                        <Textmenu>ชื่อ-สกุล : {userData.name}</Textmenu>
                    </FlexFr>
                    <FlexFr>
                        <Textmenu>เบอร์มือถือ : {userData.telnum.slice(0, 3)}-{userData.telnum.slice(3, 6)}-{userData.telnum.slice(6, 10)}</Textmenu>
                    </FlexFr>
                    <FlexFr>
                        <Textmenu>ธนาคาร : {userData.bankname}</Textmenu>
                    </FlexFr>
                    <FlexFr>
                        <Textmenu1>เลขบัญชี : {userData.banknum}</Textmenu1>
                    </FlexFr>
                    <FlexFr>
                        <Textmenu1>วันที่สมัคร : {moment(userData.createdAt).format("DD/MM/YYYY")}</Textmenu1>
                    </FlexFr>
                    <FlexFr>
                        <Textmenu1>รู้จักเราจาก : - </Textmenu1>
                    </FlexFr>
                </Flexmenu>
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
        height: 89vh;

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
    height: auto;

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