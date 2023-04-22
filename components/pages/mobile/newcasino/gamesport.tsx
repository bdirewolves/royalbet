import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Boxsquares from "@/components/_reduce/Boxsquares";
import { ContainerGameSection } from "@/components/_reduce/Reduce"

export default function GameSport(){
    return(
        <ContainerGameSection>
            <TitleGame header="กีฬา"/>
            <GridBox>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
                <Boxsquares namegame="NAME"/>
            </GridBox>
        </ContainerGameSection>
    )
}

const GridBox = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
