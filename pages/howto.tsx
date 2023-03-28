import styled from "styled-components";
import Head from "next/head";
import HowtoSection from "@/components/pages/desktop/home/howtoSection";
import HowtoSectionPage from "@/components/pages/desktop/howto/howtoSectionPage";
import CheckDevice from "@/services";

export default function HowtoPage(){
    CheckDevice()
    return (
        <>
            <Head>
                <title>Home | Royalbet</title>
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

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`

const Content = styled.main`
  width: 100%;
  height: auto;
  max-width: 1440px;
  /* min-width: 1440px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin: auto;
`  
