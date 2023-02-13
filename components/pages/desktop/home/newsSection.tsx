import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Link from "next/link";
import Iframe from "@/components/_reduce/iframe";
import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { newsContent } from "@/constants/news";
import { useState } from "react";

export default function NewsSection () {
    const [ current, setCurrent ] = useState(0)
    const settings = {
        centerMode: true,
        centerPadding: '55px',
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        beforeChange: (_current: any, next: any) => setCurrent(next),
        reponsive:[
            {
                breakpoint: 1280,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            }
        ]
    };
    return (
        <Container>
            <FixWidth>
                <Titletype header="NEWS" subhead="ดูทั้งหมด" />
                <ContainerCarousel>
                    <Slider {...settings}>
                        {
                            newsContent.map((item, index) => (
                                <div key={index}>
                                    <Link href="/">
                                        <Box opacity={current === index}>
                                            {/* Content Carousel */}
                                            <Iframe path={item.video_url} title={item.title} />
                                        </Box>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
                </ContainerCarousel>
            </FixWidth>
        </Container>
    )
}

const ContainerCarousel = styled.div`
    width: 100%;
    height: fit-content;
`

const Box = styled.div<{ opacity: boolean }>`
    width: 95%;
    height: auto;
    aspect-ratio: 300/168.69;
    max-width: 650px;

    margin: 0 auto;

    overflow: hidden;

    background: #100F14;
    border-radius: 9.86806px;

    ${props => props.opacity ?
        `opacity: 1;`
    :
        `opacity: 0.4;`
    }

    @media (min-width: 744px) {
        width: 97%;
    }

    @media (min-width: 1280px) {
        aspect-ratio: 578.67/325.33;
    }
`