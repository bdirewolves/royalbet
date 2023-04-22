import styled from "styled-components";
import Head from "next/head";
import CheckDevice from "@/services";
import Bar from "@/components/pages/desktop/newcasino/bar";
import LottoHit from "@/components/pages/desktop/newcasino/lottohit";
import CasinoHit from "@/components/pages/desktop/newcasino/casinohit";
import SlotHit from "@/components/pages/desktop/newcasino/slothit";
import CardHit from "@/components/pages/desktop/newcasino/cardhit";
import FishHit from "@/components/pages/desktop/newcasino/fishhit";
import CasinoGame from "@/components/pages/desktop/newcasino/gamecasino";
import SlotProviderGame from "@/components/pages/desktop/newcasino/gameslotprovider";
import GameSlot from "@/components/pages/desktop/newcasino/gameslot";
import GameCard from "@/components/pages/desktop/newcasino/gamecard";
import GameFish from "@/components/pages/desktop/newcasino/gamefish";
import GameLotto from "@/components/pages/desktop/newcasino/gamelotto";
import GameTrade from "@/components/pages/desktop/newcasino/gametrade";
import GameSport from "@/components/pages/desktop/newcasino/gamesport";
import GameKeno from "@/components/pages/desktop/newcasino/gamekeno";

export default function NewCasino(){
    
    CheckDevice()

    return(
        <>
            <Head>
                <title>Home | Vincebet</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background src="/assets/img/BGnewcasino.jpg" />
            <Content>
                <Bar />

                {/* //Gamehit// */}
                <>
                    <LottoHit />
                    <CasinoHit />
                    <SlotHit />
                    <CardHit />
                    <FishHit />
                </>

                {/* //casinogame// */}
                {/* <>
                    <CasinoGame />
                </> */}

                {/* //slotgame// */}
                {/* <>
                    <SlotProviderGame />
                    <GameSlot />
                </> */}

                {/* //cardgame// */}
                {/* <>
                    <GameCard />
                </> */}

                {/* //fishgame// */}
                {/* <>
                    <GameFish />
                </> */}

                {/* //lottogame// */}
                {/* <>
                    <GameLotto />
                </> */}

                {/* //tradegame// */}
                {/* <>
                    <GameTrade />
                </> */}

                {/* //sportgame// */}
                {/* <>
                    <GameSport />
                </> */}

                {/* //kenogame// */}
                {/* <>
                    <GameKeno />
                </> */}
            </Content>
        </>
    )
}

const Background = styled.img`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  right: 0;
  
  z-index: -1;

  object-fit: cover;
  object-position: right;
`

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
    padding-bottom: 65px;

    @media (min-width: 744px) {
        gap: 16px;
    }
`