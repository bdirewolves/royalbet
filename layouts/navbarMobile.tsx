import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { RiUserLine } from "react-icons/ri";
import Information from "./modal/information";
import Statement from "./modal/statement";
import Deposit from "./modal/deposit";
import { AuthContext } from "@/pages/_app";
import Swal from "sweetalert2";
import Button from "@/components/_reduce/Button";
import Login from "./modal/login";
import Register from "./modal/register";

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
    showHamburger: boolean;
    setShowHamburger: Dispatch<SetStateAction<boolean>>;
}

export default function NavbarMobile ({ modalPage, setModalPage, showHamburger, setShowHamburger }: IProps) {
    const router = useRouter()
    const [ current, setCurrent ] = useState<number>(0)
    const { userAccess, userData } = useContext(AuthContext)
 
    const Goto = (index: number, path: string) => {
        setCurrent(index)
        router.push(path)
    }

    const checkAccess = async (name: string) => {
        if(!userData) {
            Swal.fire({
                title: "กรุณาเข้าสู่ระบบก่อนทำรายการ",
                timer: 1000,
                icon: "info",
                showConfirmButton: false
            })
        }else{
            switch(name) {
                case "information": setModalPage({ name: "information", element: <Information modalPage={modalPage} setModalPage={setModalPage} /> });
                    break;
                case "statement": setModalPage({ name: "statement", element: <Statement modalPage={modalPage} setModalPage={setModalPage} /> });
                    break;
                case "deposit": setModalPage({ name: "deposit", element: <Deposit modalPage={modalPage} setModalPage={setModalPage} /> })
                    break;
                case "game": router.push("/casino");
                    break;
                case "contact": router.push("https://line.me");
                    break;
                default: console.log("nothing")
                    break;
            }
        }
    }

    return(
        <Background>

            {
                userAccess ?
                (
                    <MenuList>
                        <MenuItem onClick={() => checkAccess("information")}>
                            <DivIcon>
                                <Icon size={16} src="/assets/img/icon/user.svg" />
                            </DivIcon>
                            <Span>
                                โปรไฟล์
                            </Span>
                        </MenuItem>
                        <MenuItem onClick={() => checkAccess("statement")}>
                            <DivIcon>
                                <Icon isActive={current == 2} size={16} src="/assets/img/icon/transactions.svg" />
                            </DivIcon>
                            <Span>
                                ประวัติธุรกรรม
                            </Span>
                        </MenuItem>
                        <MenuItem onClick={() => checkAccess("game")}>
                            <DivIcon>
                                <IconAnimation src="/assets/img/icon/games.png" />
                            </DivIcon>
                            <Span>
                                เล่นเกมส์
                            </Span>
                        </MenuItem>
                        <MenuItem onClick={() => checkAccess("deposit")}>
                            <DivIcon>
                                <Icon isActive={current == 3} src="/assets/img/icon/transfer.svg" />
                            </DivIcon>
                            <Span>
                                ฝาก-ถอน
                            </Span>
                        </MenuItem>
                        <MenuItem onClick={() => checkAccess("contact")}>
                            <DivIcon>
                                <Icon isActive={current == 4} src="/assets/img/icon/contact.svg" />
                            </DivIcon>
                            <Span>
                                ติดต่อแอดมิน
                            </Span>
                        </MenuItem>
                    </MenuList>
                )
                :
                (
                    <Statusbar>
                        <Btn color="#fff" onClick={() => modalPage.name == "login" ? setModalPage({ name: "", element: null }) : setModalPage({ name: "login", element: <Login modalPage={modalPage} setModalPage={setModalPage} /> })}>
                            เข้าสู่ระบบ
                        </Btn>
                        <GoldButton onClick={() => modalPage.name == "register" ? setModalPage({ name: "", element: null }) : setModalPage({ name: "register", element: <Register modalPage={modalPage} setModalPage={setModalPage} />})}>
                            <TextButton>สมัครสมาชิก</TextButton>
                        </GoldButton>
                    </Statusbar>
                )
            }

        </Background>
    )
}

const Btn = styled.button`
    border: none;
    width: 116px;
    height: 30px;
    font-family: "Sukhumvit Set";
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
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
    border: none;
    border-radius: 5px;
    width: 116px;
    height: 30px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    
    transition-duration: 300ms;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 10px;
        transition-duration: 300ms;
    }
`


const Statusbar = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
`

const Background = styled.div`
    padding-bottom: 10px;
    width: 100%;
    height: 60px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    visibility: visible;
    opacity: 1;
    transition: visibility 0.1s, opacity 0.1s linear;

    background: #121116;
    border-radius: 20px 20px 0px 0px;

    @media (min-width: 744px) {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.1s, opacity 0.1s linear;
    }

`

const MenuList = styled.div`
    width: auto;
    max-width: 505px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    
    transition: gap 300ms;

    @media (min-width: 430px) {
        gap: 30px;
    }
`

const MenuItem = styled.div`
    cursor: pointer;
    width: 61px;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivIcon = styled.div`
    width: 36px;
    height: 36px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 90%;
`

const Icon = styled.img<{ isActive?: boolean, size?: number }>`
    width: ${props => props.size && props.size};
    height: auto;
    mix-blend-mode: luminosity;
    object-fit: contain;

    ${props => props.isActive && `
        mix-blend-mode: normal;
    `}
`

const Span = styled.span`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const Gravity = keyframes`
    0%, 100% {
        transform: translateY(-20%);
    }
    50% {
        transform: translateY(-30%);
    }
`

const IconAnimation = styled.img`
    width: auto;
    height: 40px;
    
    //cubic-bezier(0.310, 0.440, 0.445, 1.650)
    animation: ${Gravity} 3s cubic-bezier(0.310, 0.440, 0.445, 1.650) infinite;

`