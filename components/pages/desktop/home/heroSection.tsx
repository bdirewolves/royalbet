import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/_reduce/Button";
import { Container } from "@/components/_reduce/Reduce";
import { promotionFebruary } from "@/constants/promotion";
import { useRouter } from "next/router";

export default function HeroSection () {
    const router = useRouter()
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
            <DivFlexRow>
                {/* Carousel */}
                <ContainerCarousel>
                    <Slider {...settings}>
                        {
                            promotionFebruary.top.map((item, index) => (
                                <div key={index} >
                                    <Link href="/promotion">
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
                        <GoldButton onClick={() => router.push("/casino")}>
                            เล่นเกมส์
                        </GoldButton>
                    </ContainerButton>
                </TextContent>
            </DivFlexRow>
        </Container>
    )
}

const GoldButton = styled.button`
    font-family: "Prompt";
    border: none;
    border-radius: 5px;
    width: 116px;
    height: 30px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    
    transition-duration: 300ms;
    cursor: pointer;
    color: #000;

    &:hover {
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 10px;
        transition-duration: 300ms;
    }
`

const DivFlexRow = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (min-width: 1280px) {
        flex-direction: row;
    }
`

const ContainerCarousel = styled.div`
    width: 100%;
    height: auto;

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
    margin: 0 auto;
    border-radius: 2.52632px;
    width: 100%;
    height: auto;
    aspect-ratio: 320/133.33;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1280px) {
        border-radius: 6px;
    }
`

const TextContent = styled.div`
    padding: 20px;
    border-radius: 6px;
    max-width: 650px;
    width: 95%;
    height: 315px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-image: url(/assets/img/homepage/H1BG.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;

    color: #EFE7A7;

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
    padding-top: 10px;

    font-family: 'Prompt';
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
`

const Content = styled.p`
    padding-top: 10px;

    font-family: 'Prompt';
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    text-align: center;    

    color: #fff;
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
    transform: scale(1.02);
`

