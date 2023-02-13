import Link from "next/link"
import styled from "styled-components"
import moment from "moment"
import Image from "next/legacy/image"
import { partner } from "@/constants/partner"
import Logo from "@/components/_reduce/Logo"

export default function Footer() {
    return(
        <Background>
            
            <FlexGroup1>
                <FooterFlexContent>
                    <DivLogo>
                        <Logo />
                    </DivLogo>
                    <FooterContent>
                        <FooterContentTitle>
                            เกี่ยวกับเรา vincebet
                        </FooterContentTitle>
                        <FooterContentDesc>
                            vincebet ให้บริการบาคาร่าออนไลน์ และ บาคาร่าระบบอัตโนมัติ มีครบทุกเกม ทุกค่าย มีครบทุกค่ายดัง SA Game | Pretty Gaming Baccarat | Sexy Baccarat หรือ เซ็กซี่ บาคาร่า สะดวกปลอดภัยมั่นคงทางด้านการเงิน พร้อมคอยให้คำแนะนำปรึกษาได้ตลอด 24 ชั่วโมง
                        </FooterContentDesc>
                    </FooterContent>
                </FooterFlexContent>
                <FooterMenu>
                    <FooterMenuTitle>
                        หน้าทั้งหมด
                    </FooterMenuTitle>
                    <Menu>
                        <MenuItem href="/">หน้าแรก</MenuItem>
                        <MenuItem href="/">เกี่ยวกับเรา</MenuItem>
                        <MenuItem href="/">โปรโมชั่น</MenuItem>
                        <MenuItem href="/">เกมส์</MenuItem>
                        <MenuItem href="/">คู่มือ</MenuItem>
                        <MenuItem href="/">บทความ</MenuItem>
                        <MenuItem href="/">รีวิว</MenuItem>
                    </Menu>
                </FooterMenu>
            </FlexGroup1>

            
            <FooterProvider>
                <FooterProviderTitle>
                    ค่ายเกม
                </FooterProviderTitle>
                <FooterProviderContent>
                    {
                        partner.map((item, index) => (
                            <FooterProviderContentItem key={index} src={item.src} alt="" />
                        ))
                    }
                </FooterProviderContent>
            </FooterProvider>
            <Hr />

            <FlexGroup>
                <FlexGroupContent>
                    <FooterList>
                        <FooterListContent>
                            <FooterListContentItem>Slot</FooterListContentItem>
                            <FooterListContentItem>Sport</FooterListContentItem>
                            <FooterListContentItem>Casino</FooterListContentItem>
                            <FooterListContentItem>Lotto</FooterListContentItem>
                            <FooterListContentItem>E-Sport</FooterListContentItem>
                        </FooterListContent>
                    </FooterList>
                    <FlexCircle>
                        <Circle>
                            <Image src="/assets/img/social/facebook.svg" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/social/instagram.svg" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/social/telegram.svg" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/social/twitter.svg" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/social/youtube.svg" alt="" layout="fill" />
                        </Circle>
                    </FlexCircle>
                </FlexGroupContent>
                <FlexPartner>
                    <PartnerItem src="/assets/img/provider/provider-1.png" alt="" />
                    <PartnerItem src="/assets/img/provider/provider-2.png" alt="" />
                    <PartnerItem src="/assets/img/provider/provider-3.png" alt="" />
                    <PartnerItem src="/assets/img/provider/provider-4.png" alt="" />
                </FlexPartner>
            </FlexGroup>

            <FooterText>
            © Copyright 2015 - {moment().format("YYYY")} WAS International N.V. Address: 9 VinceBet de Veerstraat, Willemstad - Curaçao P.O. Box 999 - All Rights Reserved.
            </FooterText>
            <FooterText>
                Royalbet, N.V. awarded to VinceBet Egaming. WAS International N.V. with registration number GLH-OCCHKTW079992015 registered in the Chamber of Commerce and Industry Trade Registry VinceBet with license number #999/JAZ. It is operated by and is authorized and regulated by its Government.
            </FooterText>
        </Background>
    )
}

const FlexGroup1 = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        flex-direction: row;
    }
`

const FlexGroupContent = styled.div`
    display: flex;
    flex-direction: column;
`

const FlexGroup = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 744px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`

const PartnerItem = styled.img`
    width: auto;
    height: 24px;
`

const FlexPartner = styled.div`
    padding: 20px;
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`

const FooterProviderContentItem = styled.img`
    position: relative;
    width: auto;
    height: 15px;
`

const FooterProviderContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    align-items: center;
    transition-duration: 300ms;
`

const FooterProviderTitle = styled.h2`
    padding: 10px 0;
    font-family: "Sukhumvit Set";
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
`

const FooterProvider = styled.div`
    
`





const DivLogo = styled.div`
    position: relative;
    min-width: 120px;
    min-height: 80px;
`

const FooterFlexContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 744px) {
        flex-direction: row;
        gap: 60px;
    }
`

const Hr = styled.div`
    margin: 20px 0;
    border-top: 0.5px solid #464646;
`

const Circle = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
`

const FlexCircle = styled.div`
    padding: 15px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    mix-blend-mode: luminosity;
`

const FooterText = styled.div`
    padding: 10px 0;
    font-family: "Sukhumvit Set";
    font-size: 14px;
    font-weight: 500;
    color: #989898;
    text-align: center;
`

const FooterListContentItem = styled.div`
    width: 56px;
    height: 20px;
    border-radius: 5px;
    background-color: #414042;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`

const FooterListContent = styled.div`
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`


const FooterList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const MenuItem = styled(Link)`
    font-family: "Sukhumvit Set";
    font-size: 12px;
    font-weight: 400;
    color: #868686;

`

const Menu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    @media (min-width: 744px) {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    @media (min-width: 1440px) {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const FooterMenuTitle = styled.h2`
    font-family: "Sukhumvit Set";
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-align: center;
`

const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (min-width: 744px) {
        flex-direction: row;
        justify-content: center;
        gap: 30px;
        padding: 20px 0;
    }

    @media (min-width: 1440px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
    }
`

const FooterContentDesc = styled.p`
    font-family: "Sukhumvit Set";
    font-size: 13px;
    font-weight: 300;
    color: #fff;
    text-align: center;
    line-height: 21px;

    @media (min-width: 744px) {
        text-align: left;
    }
`

const FooterContentTitle = styled.h3`
    font-family: "Sukhumvit Set";
    font-size: 20px;
    color: #fff;
    text-align: center;

    @media (min-width: 744px) {
        text-align: left;
    }
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
`

const Background = styled.footer`
    padding: 30px 10px 0 10px;
    width: 100%;
    background: linear-gradient(0deg, #1C1C1C 2.79%, #060606 95.77%);
`