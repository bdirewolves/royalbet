import Link from "next/link"
import styled from "styled-components"
import moment from "moment"
import Image from "next/legacy/image"
import { partner } from "@/constants/partner"

export default function Footer() {
    return(
        <Background>
            
            <FlexGroup1>
                <DivLogo>
                    <LogoM src="/assets/img/logo.png"/>
                    <Logo src="/assets/img/logorow.png"/>
                </DivLogo>

                <FlexUnderLogo>
                    <FooterMenu>
                        <FooterMenuTitle>
                            หน้าทั้งหมด
                        </FooterMenuTitle>
                        <Menu>
                            <MenuItem href="/">หน้าแรก</MenuItem>
                            <MenuItem href="/">เกี่ยวกับเรา</MenuItem>
                            <MenuItem href="/promotion">โปรโมชั่น</MenuItem>
                            <MenuItem href="/">เกมส์</MenuItem>
                            <MenuItem href="/">คู่มือ</MenuItem>
                            <MenuItem href="/">บทความ</MenuItem>
                            <MenuItem href="/">รีวิว</MenuItem>
                        </Menu>
                    </FooterMenu>
                    <FooterPartner>
                        <FooterProviderTitle>
                            ช่องทางการชำระเงิน
                        </FooterProviderTitle>
                        <FooterProviderContent>
                            <FooterProviderContentItem src='/assets/img/payment-1.png' />
                            <FooterProviderContentItem src='/assets/img/payment-2.png' />
                            <FooterProviderContentItem src='/assets/img/payment-3.png' />
                        </FooterProviderContent>
                    </FooterPartner>
                </FlexUnderLogo>

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
                            <Image src="/assets/img/icon/social/facebook.png" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/icon/social/instagram.png" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/icon/social/telegram.png" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/icon/social/twitter.png" alt="" layout="fill" />
                        </Circle>
                        <Circle>
                            <Image src="/assets/img/icon/social/youtube.png" alt="" layout="fill" />
                        </Circle>
                    </FlexCircle>
                </FlexGroupContent>
                <FlexPartner>
                    <PartnerItem src="/assets/img/partner/ga.png" alt="" />
                    <PartnerItem src="/assets/img/partner/bmm.png" alt="" />
                    <PartnerItem src="/assets/img/partner/gc.png" alt="" />
                    <PartnerItem src="/assets/img/partner/mga.png" alt="" />
                </FlexPartner>
                <BigPart>
                    <PartnerItem style={{ minWidth: '200px', minHeight: "46px" }} src="/assets/img/partner/beg.png" alt="" />
                </BigPart>
            </FlexGroup>

            <FooterText>
                © Copyright 2015 WAS International N.V. Address: 1 ROLAYBET de Veerstraat, Willemstad - Curaçao P.O. Box 777 - All Rights Reserved.
            </FooterText>
            <FooterText>
                Elitebet, N.V. awarded to ROYALBET Egaming. WAS International N.V. with registration number GLH-OCCHKTW0777092017 registered in the Chamber of Commerce and Industry Trade Registry ROYALBET with license number #777/JAZ. It is operated by and is authorized and regulated by its Government.
            </FooterText>
        </Background>
    )
}

const FlexUnderLogo = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        flex-direction: row;
    }
`

const BigPart = styled.div`
    max-width: 250px;
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

const FlexGroup1 = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 744px) {
        padding-bottom: 20px;
    }

    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    @media (min-width: 1440px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    } */
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
    min-width: 83px;
    min-height: 26px;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const FooterPartner = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    grid-area: 3 / 1 / 4 / 2;

    @media (min-width: 744px) {
        gap: 20px;
    }

    @media (min-width: 1440px) {
        transform: translateY(-40%);
        justify-content: flex-end;
        align-items: flex-end;

        grid-area: 1 / 2 / 3 / 3;
    }
`

const DivLogo = styled.div`
    width: 135px;
    height: auto;

    grid-area: 1 / 1 / 2 / 2;

    margin: auto;

    @media (min-width: 744px) {
        width: 186px;
        height: auto;
    }

    @media (min-width: 1440px) {
        width: 248px;
        height: auto;

        margin: 40px 0 0 50px;
    }
`

const LogoM = styled.img`
    width: 100%;
    height: 100%;

    @media (min-width: 744px) {
        display: none;
    }
`

const Logo = styled.img`
    width: 100%;
    height: 100%;

    @media (max-width: 743px) {
        display: none;
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
    /* mix-blend-mode: luminosity; */
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
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    
    @media (min-width: 744px) {
        max-width: 500px;

        display: flex;
        justify-content: space-around;
    }

    @media (min-width: 1440px) {
        width: auto;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
`

const FooterMenuTitle = styled.h2`
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
`

const FooterMenu = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    grid-area: 2 / 1 / 3 / 2; 

    gap: 5px;

    @media (min-width: 744px) {
        flex-direction: row;
        justify-content: center;
        gap: 30px;
        padding: 20px 0;
    }

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: flex-start;
        
        margin: 0px 0 0 50px;

        gap: 20px;
    }
`

const Background = styled.footer`
    padding: 30px 10px 0 10px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    transition-duration: 300ms;

    background: linear-gradient(0deg, #1C1C1C 2.79%, #060606 95.77%);

    @media (max-width: 1023px) {
        padding: 30px 10px 65px 10px;
        transition-duration: 300ms;
    }
`