import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { reviewContent } from "@/constants/review";
import { useState } from "react";
import { useRouter } from "next/router";


export default function ReviewSection() {
    const router = useRouter()
    const [ current, setCurrent ] = useState(0)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dotsClass: `slick-dots`,
        arrows: false,
        beforeChange: (_current: any, next: any) => setCurrent(next),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
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
                <Titletype header="REVIEW จากลูกค้า" subhead="ดูทั้งหมด" onClick={() => router.push("/review")} />
                {/* Carousel */}
                <ContainerCarousel>
                    <Slider {...settings}>
                        {
                            reviewContent.map((item, index) => (
                            <div key={index}>
                                <DivFlex>
                                    <Box opacity={current == index ? "true" : "false"}>
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
    position: absolute;
    bottom: 10%;

    width: 90%;
    height: auto;

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
    width: 95%;
    height: auto;
    aspect-ratio: 239.81/320;
    max-width: 210px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border-radius: 10px;
    
    gap: 0px;
    margin: auto;

    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), #666666;
`

const SliderContent1 = styled.p`
    font-family: 'Prompt';
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

    font-family: 'Prompt';
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    text-align: start;
    color: white;
`

const Box = styled.div<{ opacity: string }>`
    width: 100%;
    min-width: 196px;
    max-width: 261.54px;
    height: auto;
    aspect-ratio: 196/261.54;

    position: absolute;

    ${props => props.opacity == "true" ?
        `opacity: 1;`
    :
        `opacity: 0.4;`
    }
    
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 88% 100%;
`

const ContainerCarousel = styled.div`
    width: 95%;
    height: auto;

    @media (min-width: 1280px) {
        width: 100%;
        
        max-width: 1164.44px;
    }
    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`
