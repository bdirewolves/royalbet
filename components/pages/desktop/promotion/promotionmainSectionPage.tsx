import styled from "styled-components";

export default function PromotionMainSectionPage() {
    return(
        <Container>
            <DivFlex>
                <Box />
                <Box />
            </DivFlex>
        </Container>
    )
}

const Container = styled.div`
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

const DivFlex = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        flex-direction: row;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 650/222.74;

    background-color: grey;
`
