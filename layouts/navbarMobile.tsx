import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { RiUserLine } from "react-icons/ri";
import Information from "./modal/information";
import Statement from "./modal/statement";
import Deposit from "./modal/deposit";
import { AuthContext } from "@/pages/_app";
import Swal from "sweetalert2";

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

export default function NavbarMobile (props: IProps) {
    const router = useRouter()
    const [ current, setCurrent ] = useState<number>(0)
    const { userData } = useContext(AuthContext)
 
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
                case "information": props.setModalPage({ name: "information", element: <Information modalPage={props.modalPage} setModalPage={props.setModalPage} /> });
                    break;
                case "statement": props.setModalPage({ name: "statement", element: <Statement modalPage={props.modalPage} setModalPage={props.setModalPage} /> });
                    break;
                case "deposit": props.setModalPage({ name: "deposit", element: <Deposit modalPage={props.modalPage} setModalPage={props.setModalPage} /> })
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

    // useEffect(() => {
    //     switch(router.asPath) {
    //         case "/": setCurrent(0);
    //             break;
    //         case "/": setCurrent(1);
    //             break;
    //         case "/": setCurrent(2);
    //             break;
    //         case "/": setCurrent(3);
    //             break;
    //         case "/": setCurrent(4);
    //             break;
    //         case "/m": setCurrent(0);
    //             break;
    //         case "/m/": setCurrent(1);
    //             break;
    //         case "/m/": setCurrent(2);
    //             break;
    //         case "/m/": setCurrent(3);
    //             break;
    //         case "/m/": setCurrent(4);
    //             break;
    //         default: setCurrent(0);
    //             break;
    //     }
    // }, [router.isReady])

    return(
        <Background>
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
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #121116;
    border-radius: 20px 20px 0px 0px;

    @media (min-width: 1024px) {
        display: none;
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
        gap: 45px;
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