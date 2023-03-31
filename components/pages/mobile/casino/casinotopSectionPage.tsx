import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";

export default function CasinoTopSectionPage() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <Container>
           <FixWidth>
               <DivGrid>
                <GridFrBanner src="/assets/img/banner/mockup-1.jpg" />
                    <GridFrJak>
                        <DivJack>
                            <JackHead>บาคาร่าเว็บตรง RoyalBet65</JackHead>
                            <JackContent>“royalbet” คุณจะสามารถสมัครบาคาร่า และ สามารถเล่น บาคาร่าด้วยระบบออโต้ผ่านทางหน้าเว็บไซต์ได้จากทุกช่องทาง อยู่ที่ไหนก็สามารถเล่นได้ มีครบทุกค่ายดัง SA Game | Pretty Gaming Baccarat | Sexy Baccarat หรือ เซ็กซี่ บาคาร่า</JackContent>
                            <GoldButton>
                                <span>แอดไลน์</span>
                            </GoldButton>
                        </DivJack>
                        <DivAds src="/assets/img/banner/add-line.jpg" />
                    </GridFrJak>
                    <GridFrPopu>
                        <TitletypePage header="POPULAR GAME" />
                        <DivFlex>
                            <DivGame isTablet="false">
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-8.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Lucky Piggy</p>
                                </BoxText>
                            </DivGame>
                            <DivGame isTablet="false">
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-6.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Sweet Bonanza</p>
                                </BoxText>
                            </DivGame>
                            <DivGame isTablet="true">
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-9.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Money Train 2</p>
                                </BoxText>
                            </DivGame>
                        </DivFlex>
                    </GridFrPopu>
               </DivGrid>
           </FixWidth>
        </Container>
    )
}

const GoldButton = styled.button`
    margin: 20px auto 0 auto;
    border: none;
    width: 129px;
    height: 28.07px;
    border-radius: 5px;

    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 13.8153px;
    line-height: 21px;
    text-align: center;
    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;

    color: #000000;

    background: linear-gradient(90deg, #F6E79A 0%, #D2BB6E 100%);
`

const JackContent = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const JackHead = styled.h2`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    text-align: center;

    color: #EFE7A7;
`

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    max-width: 744px;

    display: grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const GridFrBanner = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 320/104;

    background: #100F14;
`

const GridFrPopu = styled.div`
    width: 95%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/227.77;
        max-width: 650px;
    }
`

const DivFlex = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const ContainerCarousel = styled.div`
    width: 100%;
    height: auto;
`

const DivGame = styled.div<{ isTablet: string }>`
    width: 100%;
    height: auto;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border: 1.01266px solid #959595;

    transition: 300ms;

    visibility: visible;

    ${props => props.isTablet == "true" &&
        `
            @media (max-width: 743px) {
                display: none;
                visibility: hidden;
            }
        `
    }

    @media (min-width: 744px) {
        
    }
`

const DivGame1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    position: relative;

    display: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border: 1.01266px solid #959595;

    @media (min-width: 744px) {
        display: block;
    }
`
 
const GridFrJak = styled.div`
    width: 95%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/320;
        max-width: 650px;
    }
`

const DivJack = styled.div`
    padding: 50px 16px;
    width: 100%;
    height: auto;
    
    background: #100F14;  

    background: url(/assets/img/banner/bg-banner-casino.jpg);
    background-size: cover;
    background-position: center;
`

const DivAds = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    max-width: 425px;

    visibility: hidden;
    display: none;
    
    background: #100F14; 

    @media (min-width: 744px) {
        max-width: 320px;
        
        visibility: visible;
        display: inline-flex;
    }
`

const DivPicPro = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
`

const PicPro = styled.img`
    width: 100%;
    height: 100%;
`

const BoxText = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`