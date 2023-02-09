import styled from "styled-components";
import Head from "next/head";
import PromotionMainSectionPage from "@/components/pages/desktop/promotion/promotionmainSectionPage";
import PromotionPageSection from "@/components/pages/desktop/promotion/promotionSectionPage";
import CheckDevice from "@/services";

export default function PromotionPage(){
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
                <PromotionMainSectionPage />
                <PromotionPageSection />
            </Content>
        </>
    )
}


const Content = styled.main`
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  /* min-width: 1440px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin: auto;
` 