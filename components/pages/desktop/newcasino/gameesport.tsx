import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Boxsquares from "@/components/_reduce/Boxsquares";
import { ContainerGameSection } from "@/components/_reduce/Reduce"

export default function GameEsport(){
    return(
        <ContainerGameSection>
            <TitleGame header="ESPORT" subheader=""/>
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


    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`