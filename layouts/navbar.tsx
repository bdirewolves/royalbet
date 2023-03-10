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
import Main from "./modal/main"
import Information from "./modal/information"
import Setting from "./modal/setting"
import Affilate from "./modal/affilate"
import Promotion from "./modal/promotion"
import Statement from "./modal/statement"
import Deposit from "./modal/deposit"
import Login from "./modal/login"
import Register from "./modal/register"
import Forget from "./modal/forget"
import { IoIosSettings } from "react-icons/io"

export default function Navbar() {

    const router = useRouter()

    const [ showHiddenNav, setShowHiddenNav ] = useState<boolean>(false)
    const [ time, setTime ] = useState("")
    const [ showHamburger, setShowHamburger ] = useState(false)
    const [ access, setAccess ] = useState<any>(null)
    const [ modal, setModal ] = useState<boolean>(false)
    const [ modalPage, setModalPage ] = useState<ReactNode>(null)

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
            { modal && modalPage == null ?
                (
                    <Modal>
                        <BgGrey />
                        <DivFlexHead>
                            <TextHead>โปรไฟล์</TextHead>
                        </DivFlexHead>
                        <DivFlexinfo>
                            <Boxinfo />
                            <Textinfo>Username</Textinfo>
                        </DivFlexinfo>
                        <Gridmenu>
                            <GridFr onClick={() => setModalPage(<Forget />)}>
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <AiFillStar size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>ข้อมูลส่วนตัว</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                            <GridFr >{/* onClick={() => setModalPage(<Information />)} */}
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <AiFillStar size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>เปลี่ยนรหัส</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                            <GridFr onClick={() => setModalPage(<Statement modalPage={modalPage} setModalPage={setModalPage}/>)}> 
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <AiFillStar size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>ประวัติธุรกรรม</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                            <GridFr onClick={() => setModalPage(<Affilate modalPage={modalPage} setModalPage={setModalPage} />)}>
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <AiFillStar size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>แนะนำเพือน</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                            <GridFr onClick={() => setModalPage(<Promotion modalPage={modalPage} setModalPage={setModalPage}/>)}>
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <AiFillStar size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>โปรโมชั่น</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                            <GridFr onClick={() => setModalPage(<Setting modalPage={modalPage} setModalPage={setModalPage}/>)}>
                                <DivFlexMenu>
                                    <BoxMenu>
                                        <IoIosSettings size={32} color="#9DA3AD" />
                                    </BoxMenu>
                                    <TextMenu>ตั้งค่า</TextMenu>
                                </DivFlexMenu>
                                <GoldLine />
                            </GridFr>
                        </Gridmenu>
                        <DivFlexLogout>
                            <TextLogout>ออกจากระบบ</TextLogout>
                        </DivFlexLogout>
                    </Modal>
                )
                :
                modalPage
            }
            <Background>
                <Nav>
                    <DivLogo href="/">
                        <Logo src="/assets/img/logorow.png"/>
                    </DivLogo>
                    <NavTop>
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
                                        <Profile onClick={() => { setModal(!modal) }}>
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

                                <FlexRowRe>
                                    <GifList>
                                        <GifLive src="/assets/gif/live.gif" alt="" onClick={() => router.push("https://www.livescore.com/en/")}  />
                                        <GifSpin src="/assets/gif/spin.gif" alt="" />
                                    </GifList>
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
                                </FlexRowRe>
                            </Menubar>
                        </FlexBox>
                    </NavBottom>
                    <Hamburger isActive={showHamburger}>
                        <HamburgerContainer>
                            <HamburgerItem onClick={() => Goto("/")}>
                                หน้าแรก
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/")}>
                                เล่นเกมส์
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/")}>
                                ฝาก
                            </HamburgerItem>
                            <HamburgerItem onClick={() => Goto("/")}>
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
    z-index: 9999;
`

const BgGrey = styled.div`
    width: 320px;
    height: 84px;

    position: absolute;
    left: 0px;
    top: 0px;

    z-index: 1;

    background: #121116;
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
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    z-index: 2;
`

const Boxinfo = styled.div`
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

const Gridmenu = styled.div`
    width: 85%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    justify-content: center;
    align-items: center;
    
    gap: 10px;
`

const GridFr = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 14px;

    cursor: pointer;
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
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.8);
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

const BalanceCoin = styled.img`
    width: 18px;
    height: 18px;
    border-radius: 50%;
`

const BalanceText = styled.p`
    font-size: 12px;
    color: #fff;
`

const Balance = styled.div`
    width: auto;
    height: 32px;
    min-width: 114px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;

    background-color: #000;
    border-radius: 5px;
`

const ProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
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
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0px;

    @media (min-width: 744px) {
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

    gap: 0px;
`

const HamburgerItem = styled.button`
    width: 100%;
    height: 39px;

    border: none;
    background: none;
    
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #999999;     

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
    transition: height 300ms;
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
    `}
    background: #060606;
    border-radius: 0px 0px 40px 0px;
    z-index: 0;

    @media (min-width: 1280px) {
        width: auto;

        margin-left: 250px;
        margin-top: 0px;

        ${props => props.isActive ? 
    `
        height: auto;
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
    }
`

const MenuGroup = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 744px) {
        width: 100%;
        height: 100%;

        justify-content: center;

        padding: 0 32px 0 40px;

        overflow: scroll;

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

const GifPromotion = styled.img`
    width: 164px;
`

const GifSpin = styled.img`
    width: 150px;
    aspect-ratio: 150/40;
`

const GifLive = styled.img`
    width: 50px;
    aspect-ratio: 50/40;
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
    background-color: #121116;

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
    width: 100%;
    height: auto;

    display: flex;
    justify-content: flex-end;
    z-index: 10;

    background: #121116;
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
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #999999;
`

const DivButton = styled.div`
    width: auto;
    height: auto;
    padding-left: 16px;
    padding-right: 16px;

    /* background: linear-gradient(180deg, #DDDDDD 0%, #E3E3E3 24.48%, #E4E4E4 51.04%, #AFAFAF 98.96%); */

    display: flex;
    justify-content: center;
    align-items: center;
`

const ListMenu = styled(Link)`
    width: fit-content;
    min-width: 75px;
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
    
    position: relative;

    display: flex;
    flex-direction: column;
`

const DivLogo = styled(Link)<{ isdesktop?: string }>`
    width: 111.6px;
    aspect-ratio: 111.6/36;

    position: absolute;
    left: 10px;
    top: 7px;
    z-index: 999;

    @media (min-width: 744px) {
        width: 124px;

        left: 20px;
        top: 5px;
    }

    @media (min-width: 1280px) {
        width: 201.58px;
        
        top: 10px;
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
    width: auto;
    height: auto;

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
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

    background-color: #121116;
`

const FlexBox = styled.div`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    overflow: hidden;
    border-radius: 0 50px 0px 0px;
    
    background: #060606;
    transition-duration: 300ms;

    @media (min-width: 744px) {
        width: 100%;

        justify-content: flex-end;

        border-radius:50px 0px 0px 0px;
    }

    @media (min-width: 1280px) {
        margin-left: 250px;
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