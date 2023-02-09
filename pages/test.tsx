import styled from "styled-components";
import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image"
import ButtonHover from "@/components/_reduce/ButtonHover";

export default function RestPage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      };
    return(
        <>
            <Head>
                <title>Test | Vincebet</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content>
                <ButtonHover>เข้าสู่ระบบ</ButtonHover>
            </Content>
        </>
    )
}

const Box = styled.div`
    width: 95%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;

    background-color: rgba(255, 0, 0, 0.5);
`

const Content = styled.main`
    width: 100vw;
    height: 100vh;
`