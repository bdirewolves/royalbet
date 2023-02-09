import styled from "styled-components";
import Head from "next/head";
import HowtoSection from "@/components/pages/mobile/home/howtoSection";
import HowtoSectionPage from "@/components/pages/mobile/howto/howtoSectionPage";
import CheckDevice from "@/services";

export default function HowtoPage(){
    CheckDevice()
    return (
        <>
            <Head>
                <title>Home | Vincebet</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content>
                <HowtoSection />
                <HowtoSectionPage/ >
            </Content>
        </>
    )
}


const Content = styled.main`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: auto;
    padding-bottom: 0px;

` 





