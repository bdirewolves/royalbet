import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameSection } from "@/components/_reduce/Reduce"
import { useEffect, useState } from "react";
import type { ReactNode } from "react"
import Swal from "sweetalert2";
import axios from "axios";
import GameSlot from "./gameslot";

interface IProvider {
    id: number;
    name: string;
    wallet_code: string;
    type?: string;
}

interface IProps {
    typegame: ReactNode;
    setTypegame: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

export default function GameSlotProvider({ typegame, setTypegame }: IProps){
    const [ providers, setProviders ] = useState<IProvider[]>([])
    const [ text, setText ] = useState<number>(0)

    const fetchProviderSlot = async () => {
        try {
            const tmp = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
            const slots = tmp.filter((item: IProvider) => item.type == "slot")
            setProviders(slots)
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
        console.log(text)
    }, [text])

    useEffect(() => {
        fetchProviderSlot()
    }, [])

    return(
        <ContainerGameSection>
            <TitleGame header="เกมส์สล๊อต" subheader=""/>
            <GridBox>
                {
                    providers.map((item, index) => (
                        <HorizontalBox key={index} bgblock onClick={() => setTypegame(<GameSlot provider={item.name} />)} imggame={`/assets/img/icon/providers/slot/${item.name}.png`} namegame={item.name}/>
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
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1440px) {
        grid-template-columns: repeat(6, 1fr);
    }
`
