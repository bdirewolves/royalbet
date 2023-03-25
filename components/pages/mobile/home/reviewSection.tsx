import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Titletype from "@/components/_reduce/Divtitle";
import { useState } from "react";
import { reviewContent } from "@/constants/review";
import { Container, FixWidth } from "@/components/_reduce/Reduce";

export default function ReviewSection() {
    const [ current, setCurrent ] = useState(0)
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: true,
        dotsClass: `slick-dots knowlegde-dots slick-slide`,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        beforeChange: (_current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 744,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return(
        <Container>
            <FixWidth>
                <Titletype header="REVIEW จากลูกค้า" subhead="ดูทั้งหมด" />
                {/* Carousel */}
                <ContainerCarousel>
                    <Slider {...settings}>
                            {
                                reviewContent.map((item, index) => (
                                <div key={index}>
                                    <DivFlex>
                                        <Box opacity={current === index}>
                                            <PicBox src={item.img} />
                                            {/* Img Carousel */}
                                        </Box>
                                        <DivText>
                                            {/* Carousel Title */}
                                            <SliderTitle>{item.title}</SliderTitle>
                                            {/* Carousel Content */}
                                            <SliderContent>
                                                <SliderContent1>{item.subtitle}</SliderContent1>
                                            </SliderContent>
                                        </DivText>
                                        <GoldPic />
                                    </DivFlex>
                                </div>
                                ))
                            }
                    </Slider>
                </ContainerCarousel>
            </FixWidth>
        </Container>
    )
}

const DivText = styled.div`
    width: 90%;
    height: auto;

    position: absolute;
    bottom: 10%;
`

const GoldPic = styled.div`
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;
`

const DivFlex = styled.div`
    margin: auto;
    width: 95%;
    max-width: 196px;
    height: auto;
    aspect-ratio: 196/261.54;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    border-radius: 10px;

    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), #666666;

    @media (min-width: 744px) {
        max-width: 210px;

    }
    
`

const SliderContent1 = styled.p`
    font-family: 'Sukhumvit Set';
    font-weight: 400;
    font-size: 12px;
    text-align: start;
    color: #fff;

`

const SliderContent = styled.div`
    width: 90%;
    height: auto;
`

const SliderTitle = styled.h3`
    width: 100%;
    height: auto;

    font-family: 'Sukhumvit Set';
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    text-align: start;
    color: white;
`

const Box = styled.div<{ opacity: boolean }>`
    width: 100%;
    min-width: 196px;
    max-width: 261.54px;
    height: auto;
    aspect-ratio: 196/261.54;

    position: absolute;

    ${props => props.opacity ?
        `opacity: 1;`
    :
        `opacity: 0.4;`
    }
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 87% 100%;
`

const ContainerCarousel = styled.div`

    width: 100%;
    height: auto;

    padding: 0% 0%;
`
