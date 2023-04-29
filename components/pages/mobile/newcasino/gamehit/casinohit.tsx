import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameHitSection } from "@/components/_reduce/Reduce"

export default function CasinoHit(){
    return(
        <ContainerGameHitSection>
            <TitleGame header="คนสิโนออนไลน์ ยอดนิยม" subheader=""/>
            <GridBox>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
                <HorizontalBox namegame="NAME"/>
            </GridBox>
        </ContainerGameHitSection>
    )
}

const GridBox = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
