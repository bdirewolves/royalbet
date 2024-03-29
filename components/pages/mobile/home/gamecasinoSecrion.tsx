import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { casinoContent, casinoHomePage } from "@/constants/casino";
import React from "react";
import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { BsFillPlayFill } from "react-icons/bs"

export default function GameCasinoSection () {
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

    const oddCasinos = casinoContent.casino.filter((_, index) => index % 2 !== 0);
    const evenCasinos = casinoContent.casino.filter((_, index) => index % 2 === 0);

    return (
        <Container>
            <FixWidth>
                <Titletype header="CASINO" subhead="เกมทั้งหมด" />
                <ContainerCarousel>
                    <Slider {...settings}>
                        <div>
                            <DivGrid>
                                {casinoHomePage.slice(0, 6).map((item, index) => (
                                    <GridFr key={index}>
                                        <DivPicPro>
                                            <PicPro src={item.img} />
                                        </DivPicPro>
                                        <BoxText>
                                            {item.name}
                                        </BoxText>
                                        <GoldPic>
                                            <BsFillPlayFill color="#000" size={20} />
                                        </GoldPic>
                                    </GridFr>
                                ))}
                            </DivGrid>
                        </div>
                        <div>
                            <DivGrid>
                                {casinoHomePage.slice(6, 12).map((item, index) => (
                                    <GridFr key={index}>
                                        <DivPicPro>
                                            <PicPro src={item.img} />
                                        </DivPicPro>
                                        <BoxText>
                                            {item.name}
                                        </BoxText>
                                        <GoldPic>
                                            <BsFillPlayFill color="#000" size={20} />
                                        </GoldPic>
                                    </GridFr>
                                ))}
                            </DivGrid>
                        </div>
                    </Slider>
                </ContainerCarousel>
            </FixWidth>
        </Container>
    );


}

const ContainerCarousel = styled.div`
    padding: 0 10px;
    width: 100%;
    height: auto;
`

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(2, 3fr);
    justify-content: center;
    align-items: center;

    margin: auto;
    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 2fr);
    }
`

const GridFr = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/103;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
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
    object-fit: contain;
`

const BoxText = styled.div`
    padding-left: 10px;
    width: 100%;
    height: auto;
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
    color: #fff;
`

const GoldPic = styled.div`
    width: 14%;
    height: auto;
    aspect-ratio: 20.71/17.26;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;

    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;
`