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
`

const DivTitle = styled.div`
    width: 95%;
    height: auto;
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
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(2, 2fr);
    }
`
const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    background-color: #100F14;

    &:hover {
        opacity: 0.5;
    }
`

const Box1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    display: none;

    background-color: #100F14;

    &:hover {
        opacity: 0.5;
    }

    @media (min-width: 744px) {
        display: block;
    }
`