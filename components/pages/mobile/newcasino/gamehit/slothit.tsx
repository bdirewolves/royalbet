import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Bigbox from "@/components/_reduce/BigBox";
import { ContainerGameHitSection } from "@/components/_reduce/Reduce"

export default function SlotHit(){
    return(
        <ContainerGameHitSection>
            <TitleGame header="เกมสล๊อตออนไลน์ ยอดนิยม" subheader=""/>
            <GridBox>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
                <Bigbox namegame="NAME"/>
            </GridBox>
        </ContainerGameHitSection>
    )
}

const GridBox = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);


    @media (min-width: 744px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
