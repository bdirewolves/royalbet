import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Link from "next/link";
import { promotionFebruary } from "@/constants/promotion";
import Button from "@/components/_reduce/Button";
import { Container } from "@/components/_reduce/Reduce";

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
            <ContainerCarousel data-aos="fade-up" data-aos-duration="500">
                <Slider {...settings}>
                    {
                        promotionFebruary.squre.map((item, index) => (
                            <div key={index} >
                                <Link href="/m/promotion">
                                    <Box>
                                        <PicProMobile src={item.img} alt={item.alt}/>
                                    </Box>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </ContainerCarousel>

            <TextContent>
                    {/* Title */}
                <Title data-aos="fade-up" data-aos-duration="500">
                    บาคาร่าเว็บตรง<br />สมัครบาคาร่า ออนไลน์<br/>RoyalBet
                </Title>

                {/* Content */}
                <Content data-aos="fade-up" data-aos-duration="500">
                    “vincebet” คุณจะสามารถสมัครบาคาร่า และ สามารถเล่น บาคาร่าด้วยระบบออโต้ผ่านทางหน้าเว็บไซต์ได้จากทุกช่องทาง อยู่ที่ไหนก็สามารถเล่นได้ มีครบทุกค่ายดัง SA Game | Pretty Gaming Baccarat | Sexy Baccarat หรือ เซ็กซี่ บาคาร่า
                </Content>

                {/* Button */}
                <ContainerButton data-aos="fade-up" data-aos-duration="500">
                    <Button isBorder>
                        สมัครบาคาร่า
                    </Button>
                </ContainerButton>
            </TextContent>
        </Container>
    )
}

const ContainerCarousel = styled.div`
    width: 100%;
    height: auto;
`

const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 320/133.33;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    overflow: hidden;

    border-radius: 2.52632px;
    
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

    background-image: url(/assets/img/homepage/H1BG.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;

`

const Title = styled.h1`
    font-family: 'Prompt';
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;

    text-align: center;

    padding-top: 10px;
`

const Content = styled.p`
    font-family: 'Prompt';
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

