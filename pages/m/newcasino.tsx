import styled from "styled-components";
import Head from "next/head";
import CheckDevice from "@/services";
import Bar from "@/components/pages/mobile/newcasino/bar";
import LottoHit from "@/components/pages/mobile/newcasino/lottohit";
import CasinoHit from "@/components/pages/mobile/newcasino/casinohit";
import SlotHit from "@/components/pages/mobile/newcasino/slothit";
import CardHit from "@/components/pages/mobile/newcasino/cardhit";
import FishHit from "@/components/pages/mobile/newcasino/fishhit";
import CasinoGame from "@/components/pages/mobile/newcasino/gamecasino";
import SlotProviderGame from "@/components/pages/mobile/newcasino/gameslotprovider";
import GameSlot from "@/components/pages/mobile/newcasino/gameslot";
import GameCard from "@/components/pages/mobile/newcasino/gamecard";
import GameFish from "@/components/pages/mobile/newcasino/gamefish";
import GameLotto from "@/components/pages/mobile/newcasino/gamelotto";
import GameTrade from "@/components/pages/mobile/newcasino/gametrade";
import GameSport from "@/components/pages/mobile/newcasino/gamesport";
import GameKeno from "@/components/pages/mobile/newcasino/gamekeno";

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
