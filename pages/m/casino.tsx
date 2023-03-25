import styled from "styled-components";
import Head from "next/head";
import CasinoTopSectionPage from "@/components/pages/mobile/casino/casinotopSectionPage";
import SportSectionPage from "@/components/pages/mobile/casino/sportSectionPage";
import GameCasinoSection from "@/components/pages/mobile/home/gamecasinoSecrion";
import GameSlotSection from "@/components/pages/mobile/home/gameslotSection";
import SelectProSectionPage from "@/components/pages/mobile/casino/selectproSectionPage";
import CheckDevice from "@/services";

export default function CasinoPage() {
    CheckDevice()
    return(
        <>
            <Head>
                <title>Home | Vincebet</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Content>
                <CasinoTopSectionPage />
                <DivFlexRe>
                    <DivFlex>
                        <SportSectionPage />
                        <GameCasinoSection />
                        <GameSlotSection />
                    </DivFlex>
                    <SelectProSectionPage />
                </DivFlexRe>
            </Content>
        </>
    )
}

const Content = styled.main`
    width: 100%;
    height: auto;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: auto;
    padding-bottom: 0px;
` 

const DivFlex = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivFlexRe = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        flex-direction: column-reverse;
    }
`