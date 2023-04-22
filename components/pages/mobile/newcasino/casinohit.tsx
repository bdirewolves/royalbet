import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameSection } from "@/components/_reduce/Reduce"

export default function CasinoHit(){
    return(
        <ContainerGameSection>
            <TitleGame header="คนสิโนออนไลน์ ยอดนิยม"/>
            <GridBox>
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

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
