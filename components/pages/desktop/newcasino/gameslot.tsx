import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Bigbox from "@/components/_reduce/BigBox";
import BoxAutoHeight from "@/components/_reduce/Boxautoheight";
import { ContainerGameSection } from "@/components/_reduce/Reduce"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

interface IGame {
    id: number;
    name: string;
    provider_id: string;
    game_code: string;
    pic_url: string;
    createdAt: string;
}

export default function GameSlot({ provider }: { provider: string }){
    const [ gameLists, setGameLists ] = useState<IGame[]>([])
    const [ games, setGames ] = useState<IGame[]>([])
    const fetchGameSlot = async () => {
        try {
            const gamelist = await axios.get(`https://backoffice.royalbet65.com/v1/api/partner/providers/${provider}/games`).then((res) => res.data.data)
            // console.log(gamelist)
            setGames(gamelist)
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error as string,
                icon: "error",
                timer: 1500
            })
        }
    }

    const launchGame = async (game_code: string) => {
        try {
            Swal.fire({
                title: 'Loading',
                text: 'Please wait...',
                allowOutsideClick: false,
                showConfirmButton: false,
                didOpen: () => {
                  Swal.showLoading();
                }
            })
            await axios.post(`${process.env.API_URL}/partner/players/launch`,
                {
                    game_code: game_code,
                    signature: process.env.test_signature
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("auth_access")}`
                    }
                }
            ).then((res) => {
                const { url, message } = res.data.data
                if(url) {
                    window.location.href = url
                }else {
                    Swal.fire({
                        title: "Error",
                        text: message,
                        icon: "error",
                        timer: 1500,
                        showConfirmButton: false
                    })
                }
            })
            
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error as string,
                icon: "error",
                timer: 1500,
                showConfirmButton: false
            })
        }
    }

    useEffect(() => {
        fetchGameSlot()
    }, [])

    return(
        <ContainerGameSection>
            <TitleGame search header={`${provider}`} subheader="" />
                <GridBox>
                    {
                        games.map((item, index) => (
                            <BoxAutoHeight key={index} onClick={() => launchGame(item.game_code)} fullimg provider={provider} game_code={item.game_code} imggame={`/assets/img/icon/game/${provider}/${item.game_code}.png`} imggameblur={`/assets/img/icon/game/${provider}/${item.game_code}.png`} namegame={item.name}/>
                        ))    
                    }
                </GridBox>
        </ContainerGameSection>
    )
}

const GridBox = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media  (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, 1fr);
    }
`
