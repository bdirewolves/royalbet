import styled from "styled-components"
import Image from "next/legacy/image"
import Link from "next/link"


export default function GameCasinoSection () {
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

