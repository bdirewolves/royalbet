import styled from "styled-components";

export default function HowtoSection(){
    return(
        <Container>
            <DivGrid >
                <Gridfr />
                <Gridfr />
                <Gridfr />
                <Gridfr1 />
            </DivGrid >
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

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const DivGrid = styled.div`
    width: 100%;
    aspect-ratio: 320/59.35;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;

    overflow: hidden;

    @media (min-width: 1280px) {
        width: 91%;
        aspect-ratio: 1164.44/124.44;
        max-width: 1164.44px;

        grid-template-columns: repeat(4, 1fr);

        border-radius: 10px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Gridfr = styled.div`
    width: 100%;
    height: auto;

    background-color: grey;
`

const Gridfr1 = styled.div`
    width: 100%;
    height: auto;

    display: none;

    background-color: grey;

    @media (min-width: 1280px) {
        display: block;
    }
`



