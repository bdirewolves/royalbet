import styled from "styled-components"


export default function PromotionPageSection() {
    return(
        <Container>
            <DivTitle />
            <DivGrid>
                <Box />
                <Box />
                <Box />
                <Box1 />
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
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(2, 2fr);
    }

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    background-color: grey;
`

const Box1 = styled.div`
    width: 100%;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    display: none;

    background-color: grey;

    @media (min-width: 744px) {
        display: block;
    }
    
    @media (min-width: 1280px) {
        display: none;
    }
`