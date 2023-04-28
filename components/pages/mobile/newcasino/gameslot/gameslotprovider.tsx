import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameSection } from "@/components/_reduce/Reduce"
import { Dispatch, ReactNode, SetStateAction } from "react";
import GameSlot from "./gameslot";

interface IProvider {
    provider: ReactNode;
    SetProvider: Dispatch<SetStateAction<ReactNode>>;
}

export default function GameSlotProvider({ provider , SetProvider }: IProvider){
    return(
        <ContainerGameSection>
            <TitleGame header="เกมส์สล๊อต"/>
            <GridBox>
                <HorizontalBox namegame="NAME" onClick={()=> SetProvider(<GameSlot/>)}/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
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
`
