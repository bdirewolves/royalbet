import styled from "styled-components"
import Image from "next/legacy/image"
import Link from "next/link"


export default function GameSlotSection () {
    return(
        <Container>
            <DivTitle />
            <DivGrid>
                <GridFr />
                <GridFr />
                <GridFr />
                <GridFr />
                <GridFr />
                <GridFr />
                <GridFr1 />
                <GridFr1 />
                <GridFr1 />
                <GridFr1 />
                <GridFr1 />
                <GridFr1 />
            </DivGrid>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const DivTitle = styled.div`
    width: 95%;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: grey;

    @media (min-width: 1280px) {
        width: 91%;
        aspect-ratio: 1164.44/35.56;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const DivGrid = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(2, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 2fr);
    }
    
    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 2fr);
    }
    
    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFr = styled.div`
    width: 100%;
    aspect-ratio: 145/130;

    border-radius: 5px;

    background-color: grey;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }
`

const GridFr1 = styled.div`
    width: 100%;
    aspect-ratio: 145/130;

    display: none;

    border-radius: 5px;

    background-color: grey;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }

    @media (min-width: 1280px) {
        display: block;
    }
`