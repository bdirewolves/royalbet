import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameSection } from "@/components/_reduce/Reduce"

export default function GameTrade(){
    return(
        <ContainerGameSection>
            <TitleGame header="เทรดดิ้ง" subheader=""/>
            <GridBox>
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
`
