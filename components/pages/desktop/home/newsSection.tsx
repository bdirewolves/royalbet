import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Link from "next/link";
import Iframe from "@/components/_reduce/iframe";
import Titletype from "@/components/_reduce/Divtitle";
import { FixWidth, PicBox } from "@/components/_reduce/Reduce";
import { newsContent } from "@/constants/news";
import { useState } from "react";

export default function NewsSection () {
    const [ current, setCurrent ] = useState(0)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: (_current: any, next: any) => setCurrent(next)
    };
    return (
        <Container>
            <FixWidth>
                <Titletype header="NEWS" subhead="ดูทั้งหมด" />
                <ContainerCarousel>
                    <Slider {...settings}>
                            {/* {
                                newsContent.map((item, index) => (
                                    <div key={index}>
                                        <Link href="/">
                                            <Box opacity={current === index}>
                                                <Iframe path={item.video_url} title={item.title} />
                                            </Box>
                                        </Link>
                                    </div>
                                ))
                            } */}
                            {
                                newsContent.map((item, index) => (
                                    <div key={index}>
                                        <Box opacity={current === index}>
                                            <Iframe path={item.video_url} title={item.title} />
                                        </Box>
                                    </div>
                                ))
                            }
                    </Slider>
                </ContainerCarousel>
            </FixWidth>
        </Container>
    )
}

const Container = styled.section`
    margin: auto;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const ContainerCarousel = styled.div`
    margin: auto;
    width: 100%;
`

const Box = styled.div<{ opacity: boolean }>`
    max-width: 651px;
    max-height: 366px;
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

`