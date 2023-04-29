import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Bigbox from "@/components/_reduce/BigBox";
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
    const [ games, setGames ] = useState<IGame[]>([])
    const fetchGameSlot = async () => {
        try {
            const gamelist = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${provider}`).then((res) => res.data.data.gameList)
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

    useEffect(() => {
        fetchGameSlot()
    }, [])

    return(
        <ContainerGameSection>
            <TitleGame search header={`${provider}`} subheader="" />
            <GridBox>
                {
                    games.map((item, index) => (
                        <Bigbox key={index} fullimg imggame={`/assets/img/icon/game/${provider}/${item.game_code}.png`} imggameblur={`/assets/img/icon/game/${provider}/${item.game_code}.png`} namegame={item.name}/>
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

    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 1fr);
    }
`
