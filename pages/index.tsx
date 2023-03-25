import Head from "next/head";
import styled from "styled-components";
import HeroSection from "@/components/pages/desktop/home/heroSection";
import CasinoSection from "@/components/pages/desktop/home/casinoSection";
import TypeCasinoSection from "@/components/pages/desktop/home/typecasinoSection";
import HowtoSection from "@/components/pages/desktop/home/howtoSection";
import GameCasinoSection from "@/components/pages/desktop/home/gamecasinoSecrion";
import GameSlotSection from "@/components/pages/desktop/home/gameslotSection";
import PromotionSection from "@/components/pages/desktop/home/promotionSection";
import BlogSection from "@/components/pages/desktop/home/blogSection";
import NewsSection from "@/components/pages/desktop/home/newsSection";
import ReviewSection from "@/components/pages/desktop/home/reviewSection";
import CheckDevice from "@/services";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProviders {
  id: number;
  name: string;
  type: string;
  wallet_code: string;
  createdAt: string;
}

interface IGame {
  id: number;
  name: string;
  game_code: string;
  provider_id: string;
}

export default function Home() {
  const [ providers, setProviders ] = useState<IProviders[] | null>([])
  const [ games, setGames ] =  useState<IGame[]>([])
  
  //TODO Fetch Provider
  const fetchProvider = async () => {
    try {
      const provider = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
      setProviders(provider)
    } catch (error) {
      console.log(error)
    }
  };

  //TODO Fetch game list
  const fetchGameList = async () => {

  };

  CheckDevice();

  // useEffect(() => {
  //   console.log(providers)
  // }, [providers])

  useEffect(() => {
    fetchProvider()
  }, [])

  return (
    <>
      <Head>
        <title>Home | Royalbet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>

        <HeroSection />

        <CasinoSection />

        <TypeCasinoSection />
        
        <HowtoSection />

        <GameCasinoSection />

        <GameSlotSection />

        <PromotionSection />

        <BlogSection />

      </Content>
      
      <NewsSection />

      <Content>

        <ReviewSection />

      </Content>
      
    </>
  );
}

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin: auto;
`;
