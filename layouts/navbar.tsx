import styled from "styled-components"
import Link from "next/link"
import Image from "next/legacy/image"
import Button from "@/components/_reduce/Button"
import { AiFillCaretDown, AiFillStar, AiFillQuestionCircle } from "react-icons/ai"
import { FaBell } from "react-icons/fa"
import { BsGearFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import ButtonGradient from "@/components/_reduce/ButtonGradient"
import moment from "moment"
import { useRouter } from "next/router"
import Logo from "@/components/_reduce/Logo"
import Main from "./modal/main"

export default function Navbar() {

    const router = useRouter()

    const [ showHiddenNav, setShowHiddenNav ] = useState<boolean>(false)
    const [ time, setTime ] = useState("")
    const [ showHamburger, setShowHamburger ] = useState(false)
    const [ access, setAccess ] = useState<any>(null)
    const [ modal, setModal ] = useState<boolean>(false)
    const [ modalPage, setModalPage ] = useState<ReactNode>(<Main />)

    const Goto = (path: string) => {
        setShowHamburger(false)
        router.push(path)
    }

    useEffect(() => {
        setInterval(() => setTime(moment(new Date()).format("hh:mm:ss")), 1000)
    }, [])

    useEffect(() => {
        setAccess(localStorage.getItem("access"))
    }, [])

    return(
        <>  
            { modal && modalPage }
            <Background>
                <Nav>
                    <NavTop>
                        <DivLogo href="/">
                            <Logo />
                        </DivLogo>
                        <FlexStatus>
                            {
                                access ? 
                                (
                                    <Statusbar>
                                        <Button color="#fff">
                                            เข้าสู่ระบบ
                                        </Button>
                                        <Link href="https://liff.line.me/1645278921-kWRPP32q/?accountId=974vykgc">
                                            <ButtonGradient>
                                                สมัครสมาชิก
                                            </ButtonGradient>
                                        </Link>
                                    </Statusbar>
                                )
                                :
                                (
                                    <Statusbar>
                                        <Profile onClick={() => setModal(!modal)}>
                                            <Button color="#fff">
                                                Username
                                            </Button>
                                            <ProfileImg src={`https://via.placeholder.com/30x30?text=B`} alt="" />
                                        </Profile>
                                        <Balance>
                                            <BalanceText>10,000.00</BalanceText>
                                            <BalanceCoin src={`https://via.placeholder.com/20x20?text=C`} alt="" />
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
                                <ButtonBorderRight type="button">
                                    <AiFillQuestionCircle size={20} />
                                </ButtonBorderRight>
                                <ButtonBorderRight type="button">
                                    <TimeSpan>{time}</TimeSpan>
                                </ButtonBorderRight>
                                <ButtonBorderRight type="button">
                                    <LanguageSpan>TH</LanguageSpan>
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
                            <ButtonBorderRight type="button">
                                <FaBell size={20} />
                            </ButtonBorderRight>
                            <ButtonBorderRight type="button">
                                <AiFillStar size={20} />
                            </ButtonBorderRight>
                            <ButtonBorderRight type="button">
                                <AiFillQuestionCircle size={20} />
                            </ButtonBorderRight>
                            <ButtonBorderRight type="button">
                                <TimeSpan>{time}</TimeSpan>
                            </ButtonBorderRight>
                            <ButtonBorderRight type="button">
                                <LanguageSpan>TH</LanguageSpan>
                            </ButtonBorderRight>
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
                                        <MenuItem>Live Casino</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/">
                                        <MenuItem>Slot</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/">
                                        <MenuItem>Sport</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/">
                                        <MenuItem>E-Sport</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/">
                                        <MenuItem>Cards</MenuItem>
                                    </ListMenu>
                                    <ListMenu href="/">
                                        <MenuItem>Lottery</MenuItem>
                                    </ListMenu>
                                </MenuGroup>

                                <GifList>
                                    <GifLive src="/assets/gif/live.gif" alt="" onClick={() => router.push("https://www.livescore.com/en/")}  />
                                    <GifSpin src="/assets/gif/spin.gif" alt="" />
                                    <GifPromotion src="/assets/gif/promotion.gif" alt="" onClick={() => router.push("/promotion")} />
                                </GifList>


                            </Menubar>
                            <DivButton>
                                <Button onClick={() => setShowHamburger(!showHamburger)}>
                                    {/* <GiHamburgerMenu size={25} /> */}
                                    <div className="container">
                                        <div className="item item-1"></div>
                                        <div className="item item-2"></div>
                                        <div className="item item-3"></div>
                                        <div className="item item-4"></div>
                                    </div>
                                    
                                </Button>
                            </DivButton>
                        </FlexBox>
                    </NavBottom>
                    <Hamburger isActive={showHamburger}>
                        <HamburgerContainer>
                            <HamburgerItem onClick={() => Goto("/")}>
                                หน้าแรก
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/casino")}>
                                คาสิโน
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/promotion")}>
                                โปรโมชั่น
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/blog")}>
                                บทความ
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/howto")}>
                                คู่มือ
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/review")}>
                                รีวิว
                            </HamburgerItem>
                        </HamburgerContainer>
                    </Hamburger>
                </Nav>
            </Background>
        </>
        
    )
}

const BalanceCoin = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`

const BalanceText = styled.p`
    font-size: 12px;
    color: #fff;
`

const Balance = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    background-color: #000;
    border-radius: 5px;
    gap: 10px;
    border-right: 1px solid #414042;
    padding-right: 10px;
`

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

const GifList = styled.div`
    display: flex;
`

const HamburgerItem = styled.button`
    border: none;
    background: none;
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 46px;

    text-align: center;
    color: #fff;

    cursor: pointer;
`

const HamburgerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Hamburger = styled.div<{ isActive: boolean }>`
    margin-top: -43px;
    width: 100%;
    transition: height 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.isActive ? 
    `
        height: 90vh;
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
    `}
    background: linear-gradient(180deg, #262626 0%, #707070 100%);
    border-radius: 0px 0px 20px 20px;
    z-index: 0;

    @media (min-width: 744px) {
        width: 250px;
        align-self: flex-end;
    }
`

const MenuGroup = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 744px) {
        width: 100%;
        padding-left: 200px;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        width: 35vw;
        overflow: scroll;
        margin-right: 110px;
    }
`

const MobileGroup = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 743px) {
        display: none;
    }
`

const GifPromotion = styled.img`
    width: 164px;
`

const GifSpin = styled.img`
    width: 50px;
`

const GifLive = styled.img`
    width: 50px;
`

const LanguageSpan = styled.span`
    
`

const TimeSpan = styled.span`
    
`

const ButtonNoBorder = styled.button`
    padding: 10px;
    border: none;
    background: none;
    color: #9DA3AD;
    display: flex;
    justify-content: center;
    align-content: center;
`

const ButtonBorderRight = styled.button`
    padding: 5px 10px;
    border: none;
    border-right: 1px solid #414042;
    background: none;
    color: #9DA3AD;
    display: flex;
    justify-content: center;
    align-content: center;
`

const FlexHiddenNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HiddenNav = styled.div<{ showHiddenNav: boolean }>`
    width: 100%;
    height: 0px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    transition-duration: 300ms;
    background-color: #000;

    ${FlexHiddenNav} {
        display: none;
    }

    ${props => props.showHiddenNav && `
        height: 50px;
        ${FlexHiddenNav} {
            display: flex;
        }
    `}

    @media (min-width: 744px) {
        display: none;
    }
`

const FlexBottom = styled.div`
    display: flex;

    @media (max-width: 743px) {
        display: none;
    }
`

const NavBottom = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`

const Box3 = styled.div`
    width: 150px;
    height: 40px;
`

const Box2 = styled.div`
    width: 50px;
    height: 40px;
`

const Box1 = styled.div`
    width: 50px;
    height: 40px;
`

const FlexStatus = styled.div`
    display: flex;

`

const MenuItem = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #fff;
`

const DivButton = styled.div`
    width: auto;
    height: auto;
    padding-left: 16px;
    padding-right: 16px;

    background: linear-gradient(180deg, #DDDDDD 0%, #E3E3E3 24.48%, #E4E4E4 51.04%, #AFAFAF 98.96%);

    display: flex;
    justify-content: center;
    align-items: center;
`

const ListMenu = styled(Link)`
    min-width: 75px;
    width: 75px;
    height: fit-content;

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
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 744px) {

    }
`

const DivLogo = styled(Link)<{ isdesktop?: string }>`
    width: 76px;
    aspect-ratio: 120/80;
    padding: 10px;
    transition-duration: 300ms;

    @media (min-width: 450px) {
        width: 100px;
        padding: 0;
        margin-top: 35px;
    }

    @media (min-width: 744px) {
        width: 120px;
        padding: 0px;
        margin-top: 35px;
    }

`

const Menubar = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    /* overflow: scroll; */

    @media (min-width: 744px) {
        width: 100%;
        justify-content: space-between;
    }
`

const Collapse = styled.button<{ showHiddenNav: boolean }>`
    border: none;
    background: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 300ms;
    cursor: pointer;

    ${props => props.showHiddenNav && `
        transform: rotate(-180deg);
    `}

    @media (min-width: 744px) {
        display: none;
    }
`

const Statusbar = styled.div`
    min-width: 180px;
    width: auto;
    display: flex;
    align-items: center;
    gap: 9px;
`

const NavTop = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    z-index: 20;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    background-color: #000;

    /* @media (min-width: 744px) {
        justify-content: flex-end;
    } */
`

const FlexBox = styled.div`
    width: auto;
    height: 40px;
    background: linear-gradient(180deg, #262626 0%, #707070 100%);
    border-radius: 0 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 300ms;

    @media (min-width: 744px) {
        width: 100%;
        justify-content: flex-end;
    }
`

const Background = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    z-index: 999;
`