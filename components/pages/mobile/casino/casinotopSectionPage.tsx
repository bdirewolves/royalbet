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
                        <DivJack src="/assets/img/banner/mockup-square-1.jpg" />
                        <DivAds src="/assets/img/banner/mockup-square-2.jpg" />
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

    ${props => props.isTablet == "true" &&
        `
            @media (max-width: 743px) {
                display: none;
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

const DivJack = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    max-width: 320px;
    
    background: #100F14;  
`

const DivAds = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    max-width: 425px;

    display: none;
    visibility: hidden;
    
    background: #100F14; 

    @media (min-width: 425px) {
        max-width: 320px;
        
        display: block;
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