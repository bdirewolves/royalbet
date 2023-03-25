import styled from "styled-components"
import Link from "next/link"
import Button from "@/components/_reduce/Button"
import { AiFillCaretDown, AiFillStar, AiFillQuestionCircle, AiOutlineUser } from "react-icons/ai"
import { FaBell } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import moment from "moment"
import { useRouter } from "next/router"
import Main from "./modal/main"
import Deposit from "./modal/deposit"
import Login from "./modal/login"
import Register from "./modal/register"
import { GiHamburgerMenu } from "react-icons/gi"
import { AuthContext } from "@/pages/_app"

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

export default function Navbar(props: IProps) {
    const router = useRouter()
    const [ showHiddenNav, setShowHiddenNav ] = useState<boolean>(false)
    const [ time, setTime ] = useState("")
    const { userAccess, userData } = useContext(AuthContext)

    const Goto = (path: string) => {
        props.setShowHamburger(false)
        router.push(path)
    }

    useEffect(() => {
        setInterval(() => setTime(moment(new Date()).format("hh.mm.ss")), 1000)
    }, [])
    
    return(
        <>  

            {
                props.modalPage.name == "menu" ?
                    <Main modalPage={props.modalPage} setModalPage={props.setModalPage} />
                :
                    props.modalPage?.element
            }

            <Background>
                <Nav>
                    <DivLogo href="/">
                        <Logo src="/assets/img/logorow.png"/>
                    </DivLogo>
                    <NavTop>
                        <FlexStatus>
                            {
                                userAccess == null ? 
                                    (
                                        <Statusbar>
                                            <Button color="#fff" onClick={() => props.modalPage.name == "login" ? props.setModalPage({ name: "", element: null }) : props.setModalPage({ name: "login", element: <Login modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                                เข้าสู่ระบบ
                                            </Button>
                                            <GoldButton onClick={() => props.modalPage.name == "register" ? props.setModalPage({ name: "", element: null }) : props.setModalPage({ name: "register", element: <Register modalPage={props.modalPage} setModalPage={props.setModalPage} />})}>
                                                <TextButton>สมัครสมาชิก</TextButton>
                                            </GoldButton>
                                        </Statusbar>
                                    )
                                :
                                    (
                                        <Statusbar>
                                            <Profile onClick={() => props.modalPage.name == "menu" ? props.setModalPage({ name: "", element: null }) : props.setModalPage({ name: "menu", element: null }) }>
                                                <Button color="#fff">
                                                    { userData?.telnum }
                                                </Button>
                                                <DivProfileImg>
                                                    <AiOutlineUser size={20} />
                                                </DivProfileImg>
                                            
                                            </Profile>
                                            <Balance onClick={() => props.modalPage.name == "menu" ? props.setModalPage({ name: "", element: null }) : props.setModalPage({ name: "menu", element: null }) }>
                                                <BalanceText>{ userData?.wallsum.toFixed(2) }</BalanceText>
                                                <BalanceCoin src="/assets/img/users/wallet.svg" alt="" />
                                            </Balance>
                                        </Statusbar>
                                    )
                            }
                            
                            <MobileGroup>
                                <ButtonBorderRight type="button">
                                    <FaBell size={20} />
                                </ButtonBorderRight>
                                <ButtonBorderRight type="button">
                                    <AiFillStar size={20} />
                                </ButtonBorderRight>
                                <ButtonBorderRight type="button" style={{ width: "60px" }}>
                                    <span>{time}</span>
                                </ButtonBorderRight>
                                <ButtonBorderRight type="button">
                                    <span>TH</span>
                                </ButtonBorderRight>
                                <ButtonNoBorder>
                                    <BsGearFill size={20} />
                                </ButtonNoBorder>
                            </MobileGroup>
                            <Collapse type="button" showHiddenNav={showHiddenNav} onClick={() => setShowHiddenNav(!showHiddenNav)}>
                                <AiFillCaretDown size={20} />
                            </Collapse>
                        </FlexStatus>
                    </NavTop>

                    <HiddenNav showHiddenNav={showHiddenNav}>
                        <FlexHiddenNav>
                            <ButtonNoBorder type="button">
                                <FaBell size={20} />
                            </ButtonNoBorder>
                            <LinerVertical />
                            <ButtonNoBorder type="button">
                                <AiFillStar size={20} />
                            </ButtonNoBorder>
                            <LinerVertical />
                            <ButtonNoBorder type="button">
                                <span>{time}</span>
                            </ButtonNoBorder>
                            <LinerVertical />
                            <ButtonNoBorder type="button">
                                <span>TH</span>
                            </ButtonNoBorder>
                            <LinerVertical />
                            <ButtonNoBorder>
                                <BsGearFill size={20} />
                            </ButtonNoBorder>
                        </FlexHiddenNav>
                    </HiddenNav>

                    <NavBottom>
                        <FlexBox>
                            <Menubar>
                                <MenuGroup>
                                    <ListMenu href="/casino">
                                        <MenuItem>Casino</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/casino">
                                        <MenuItem>Slot</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/casino">
                                        <MenuItem>Sport</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/casino">
                                        <MenuItem>E-Sport</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/casino">
                                        <MenuItem>Lottery</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/casino">
                                        <MenuItem>Games</MenuItem>
                                    </ListMenu>
                                </MenuGroup>

                                <FlexRowRe>
                                    <GifList>
                                        <GifLive src="https://placehold.jp/12/222222/ffffff/50x40.jpg?text=LIVE" alt="" onClick={() => router.push("https://www.livescore.com/en/")}  />
                                        <GifSpin src="https://placehold.jp/12/222222/ffffff/150x40.jpg?text=Spin Bonus" alt="" />
                                    </GifList>
                                    <DivButton>
                                        <Button onClick={() => props.setShowHamburger(!props.showHamburger)}>
                                            <GiHamburgerMenu color="#868686" size={25} />
                                        </Button>
                                    </DivButton>
                                </FlexRowRe>
                            </Menubar>
                        </FlexBox>
                    </NavBottom>
                    <Hamburger isActive={props.showHamburger}>
                        <HamburgerContainer>
                            <HamburgerItem onClick={() => Goto("/")}>
                                หน้าแรก
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/casino")}>
                                เล่นเกมส์
                            </HamburgerItem>
                            <HamburgerItem onClick={() => props.setModalPage({ name: "deposit", element: <Deposit modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                ฝาก
                            </HamburgerItem>
                            <HamburgerItem onClick={() => props.setModalPage({ name: "deposit", element: <Deposit modalPage={props.modalPage} setModalPage={props.setModalPage} /> })}>
                                ถอน
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/promotion")}>
                                โปรโมชั่น
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/howto")}>
                                คู่มือ
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/blog")}>
                                บทความ
                            </HamburgerItem>
                        </HamburgerContainer>
                    </Hamburger>
                </Nav>
            </Background>
        </>
        
    )
}

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



const DivProfileImg = styled.div`
    border-radius: 50%;
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #000;
    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const BalanceCoin = styled.img`
    width: 18px;
    height: 18px;
`

const BalanceText = styled.p`
    font-size: 12px;
    color: #fff;
`

const Balance = styled.div`
    min-width: 114px;
    width: auto;
    height: 32px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    background-color: #000;
    border-radius: 5px;

    cursor: pointer;
`


const Profile = styled.div`
    width: auto;
    height: 100%;

    display: none;

    @media (min-width: 744px) {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
`

const FlexRowRe = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0px;

    @media (min-width: 744px) {
        max-width: 220px;
        flex-direction: row-reverse;
    }
`

const GifList = styled.div`
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1px;
`

const HamburgerItem = styled.button`
    border: none;
    width: 100%;
    height: 39px;

    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    
    color: #999999;     
    
    background: none;

    cursor: pointer;
`

const HamburgerContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 10px;
`

const Hamburger = styled.div<{ isActive: boolean }>`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: -43px;
    transition-duration: 300ms;

    ${props => props.isActive ? 
        `
            height: 100vh;
            ${HamburgerContainer} {
                display: flex;
            }
        `
        :
        `
            height: 0;
            ${HamburgerContainer} {
                display: none;
            }
        `
    }

    background: #060606;
    border-radius: 0px 0px 40px 0px;
    z-index: 0;

    @media (min-width: 1280px) {
        width: auto;

        margin-left: 250px;
        margin-top: 0px;
        transition-duration: 300ms;
        ${props => props.isActive ? 
            `
                max-height: 50vh;
                ${HamburgerContainer} {
                    display: flex;
                }
            `
            :
            `
                max-height: 0;
                ${HamburgerContainer} {
                    display: none;
                }
            `
        }
    }
`

const LinerVertical = styled.div`
    width: 1px;
    height: 30px;
    background-color: #414042;
`

const MenuGroup = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 743px) {
        display: none;
    }

    @media (min-width: 744px) {
        padding: 0 32px 0 40px;
        width: 100%;
        height: 100%;
        overflow: scroll;

        justify-content: center;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const MobileGroup = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 743px) {
        display: none;
    }
`


const GifSpin = styled.img`
    width: 150px;
    aspect-ratio: 150/40;
`

const GifLive = styled.img`
    width: 50px;
    aspect-ratio: 50/40;
`

const ButtonNoBorder = styled.button`
    padding: 10px;
    border: none;
    
    display: flex;
    justify-content: center;
    align-content: center;
    
    color: #9DA3AD;
    background: none;
`

const ButtonBorderRight = styled.button`
    padding: 5px 10px;
    border: none;
    border-right: 1px solid #414042;
    
    display: flex;
    justify-content: center;
    align-content: center;
    
    color: #9DA3AD;
    background: none;
`

const FlexHiddenNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 743px) {
        width: 100%;
        justify-content: space-around;
    }
`

const HiddenNav = styled.div<{ showHiddenNav: boolean }>`
    width: 100%;
    height: 0px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    transition-duration: 300ms;
    background-color: #121116;

    ${FlexHiddenNav} {
        display: none;
    }

    ${props => props.showHiddenNav && 
        `
            height: 50px;
            ${FlexHiddenNav} {
                display: flex;
            }
        `
    }

    @media (min-width: 744px) {
        display: none;
    }
`


const NavBottom = styled.div`
    z-index: 10;

    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-end;

    background: #121116;
`




const FlexStatus = styled.div`
    display: flex;
    gap: 5px;
`

const MenuItem = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #999999;
`

const DivButton = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    width: auto;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ListMenu = styled(Link)`
    min-width: 75px;
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    cursor: pointer;

    @media (max-width: 743px) {
        display: none;
    }
`

const Nav = styled.div`
    position: relative;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
`

const DivLogo = styled(Link)<{ isdesktop?: string }>`
    position: absolute;
    left: 10px;
    top: 7px;
    z-index: 999;

    width: 111.6px;
    aspect-ratio: 111.6/36;

    @media (min-width: 744px) {
        left: 20px;
        top: 5px;

        width: 124px;
    }

    @media (min-width: 1280px) {
        top: 10px;
        width: 201.58px;
    }
`

const Logo = styled.img`
    width: 100%;
    height: 100%;
`

const Menubar = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 743px) {
        justify-content: space-between;
    }

    @media (min-width: 744px) {
        width: 100%;
        justify-content: space-between;
    }
`

const Collapse = styled.button<{ showHiddenNav: boolean }>`
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 300ms;

    color: #fff;
    background: none;

    cursor: pointer;

    ${props => props.showHiddenNav && 
        `
            transform: rotate(-180deg);
        `
    }

    @media (min-width: 744px) {
        display: none;
    }
`

const Statusbar = styled.div`
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
    gap: 9px;

    @media (max-width: 743px) {
        display: none;
    }
`

const NavTop = styled.div`
    z-index: 20;

    padding: 0 10px;
    width: 100%;
    height: 50px;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    background-color: #121116;
`

const FlexBox = styled.div`
    border-radius: 0 50px 0px 0px;
    width: 100%;
    height: 40px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: #060606;
    transition-duration: 300ms;

    @media (min-width: 744px) {
        border-radius:50px 0px 0px 0px;

        width: 100%;

        justify-content: flex-end;
    }

    @media (min-width: 1280px) {
        margin-left: 250px;
    }
`

const Background = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;

    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-between;
`