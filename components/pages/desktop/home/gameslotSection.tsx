import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { casinoContent } from "@/constants/casino";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { slotHomepage } from "@/constants/casino";

interface IProviders {
    id: number;
    name: string;
    wallet_code: string;
    type: string | any;
    createdAt: string;
}

export default function GameSlotSection () {
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

    const [ providers, setProviders ] = useState<IProviders[]>([])
    const router = useRouter()

    const fetchProvider = async () => {
        try {
            const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
            const filters = tmp_providers.filter((item) => item.type === "slot")
            setProviders(filters)
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnError = (event: any, name: string) => {
        event.target.src =  `https://placehold.co/210x150/black/white/jpg/?text=${name}`;
    }

    useEffect(() => {
        fetchProvider()
    }, [])

    return(
        <Container>
            <FixWidth>
                <Titletype header="SLOT" subhead="เกมทั้งหมด" onClick={() => router.push("/casino")} />
                <ContainerCarousel>
                    <Slider {...settings}>
                        <div>
                            <DivGrid>
                                {
                                    slotHomepage.map((item, index) => (
                                        <GridFr key={index}>
                                            <DivPicPro>
                                                <PicPro
                                                    src={item.img}
                                                    onError={ (e) => handleOnError(e, item.name)}
                                                />
                                            </DivPicPro>
                                            <BoxText>
                                                {item.name}
                                            </BoxText>
                                            <GoldPic />
                                        </GridFr>
                                    ))
                                }
                            </DivGrid>
                        </div>
                        {/* <div>
                            <DivGrid>
                                {evenCasinos.slice(0, 12).map((item, index) => (
                                    <GridFr key={index}>
                                        <DivPicPro>
                                            <PicPro src={item.img} />
                                        </DivPicPro>
                                        <BoxText />
                                        <GoldPic />
                                    </GridFr>
                                ))}
                            </DivGrid>
                        </div> */}
                    </Slider>
                </ContainerCarousel>
            </FixWidth>
        </Container>
    )
}

const ContainerCarousel = styled.div`
    width: 100%;
    height: auto;
`

const DivGrid = styled.div`
    padding: 20px 0;
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
    
    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 2fr);
    }
    
    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFr = styled.div`
    cursor: pointer;
    width: 100%;
    height: auto;
    aspect-ratio: 145/130;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    transition-duration: 300ms;


    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }

    &:hover {
        transition-duration: 300ms;
        box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
    }
`

const GridFr1 = styled.div`
    width: 100%;
    height: auto;
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
`
