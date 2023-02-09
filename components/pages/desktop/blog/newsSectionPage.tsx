import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Button from "@/components/_reduce/Button";
import Link from "next/link";

export default function NewsSectionPage () {
    const settings = {
        dots: true,
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
            <DivTitle />
            <ContainerCarousel>
                <Slider {...settings}>
                    <div>
                        <Link href="/">
                            <Box />
                        </Link>
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
`

const ContainerCarousel = styled.div`
    width: 100%;
    height: fit-content;
`

const Box = styled.div`
    width: 95%;
    aspect-ratio: 300/168.69;
    max-width: 650px;

    margin: 0 auto;

    background-color: grey;
`