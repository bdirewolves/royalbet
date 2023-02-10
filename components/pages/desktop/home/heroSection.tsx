import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Link from "next/link";

export default function HeroSection () {
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

            {/* Carousel */}
            <ContainerCarousel>
                <Slider {...settings}>
                    <div>
                        <Link href="/promotion">
                            <Box>
                                <PicProMobile src="/assets/img/promotion/promotionbanner1-m.png" />
                                {/* Content Carousel */}
                            </Box>
                        </Link>
                    </div>
                    <div>
                        <Link href="/promotion">
                            <Box>
                                <PicProMobile src="/assets/img/promotion/promotionbanner2-m.png" />
                                {/* Content Carousel */}
                            </Box>
                        </Link>
                    </div>
                    <div>
                        <Link href="/promotion">
                            <Box>
                                <PicProMobile src="/assets/img/promotion/promotionbanner3-m.png" />
                                {/* Content Carousel */}
                            </Box>
                        </Link>
                    </div>
                    <div>
                        <Link href="/promotion">
                            <Box>
                                <PicProMobile src="/assets/img/promotion/promotionbanner4-m.png" />
                                {/* Content Carousel */}
                            </Box>
                        </Link>
                    </div>
                </Slider>
            </ContainerCarousel>

            <TextContent>
                {/* Title */}
                {/* <Title>
                
                </Title> */}
                {/* Content */}
                {/* <Content>
                
                </Content> */}
                {/* Button */}
                {/* <ContainerButton>
                    <Button isBorder>
                
                    </Button>
                </ContainerButton> */}
            </TextContent>
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

        flex-direction: row;
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const ContainerCarousel = styled.div`
    width: 100%;
    height: fit-content;

    @media (min-width: 1280px) {
        width: 675.56px;
        height: 281.78px;
    }
    
    @media (min-width: 1440px) {
        width: 760px;
        height: 317px;
    }
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 320/133.33;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    overflow: hidden;

    border-radius: 2.52632px;

    @media (min-width: 1280px) {
        border-radius: 6px;
    }
    
`

const TextContent = styled.div`
    width: 95%;
    height: 315px;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    border-radius: 6px;

    background-color: #100F14;

    @media (min-width: 1280px) {
        width: 480px;
        height: 279.71px;

    }
    
    @media (min-width: 1440px) {
        width: 540px;
        height: 314.67px;
    }
`

const Title = styled.h1`
    font-family: 'Sukhumvit Set';
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;

    text-align: center;

    padding-top: 10px;
`

const Content = styled.p`
    font-family: 'Sukhumvit Set';
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    
    text-align: center;    
    color: #fff;

    padding-top: 10px;
`

const ContainerButton = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 10px 0;
`

const PicProMobile = styled.img`
    width: 100%;
    height: 100%;

`

