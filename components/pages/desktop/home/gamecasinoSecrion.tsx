import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    return(
        <Container>
            <DivTitle />
            <ContainerCarousel>
                <Slider {...settings}>
                    <div>
                        <DivGrid>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                            <GridFr1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/test.png" />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr1>
                        </DivGrid>
                    </div>
                </Slider>
            </ContainerCarousel>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const ContainerCarousel = styled.div`
    width: 100%;
    height: fit-content;
`

const DivTitle = styled.div`
    width: 95%;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: grey;

    @media (min-width: 1280px) {
        width: 91%;
        aspect-ratio: 1164.44/35.56;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const DivGrid = styled.div`
    width: 95%;
    height: fit-content;
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
    
    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 2fr);
    }
    
    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFr = styled.div`
    width: 100%;
    aspect-ratio: 145/130;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }
`

const GridFr1 = styled.div`
    width: 100%;
    aspect-ratio: 145/130;

    position: relative;

    display: none;

    border-radius: 5px;

    overflow: hidden;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }

    @media (min-width: 1280px) {
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
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`

const GoldPic = styled.div`
    width: 14%;
    aspect-ratio: 20.71/17.26;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;

    z-index: 3;
`
