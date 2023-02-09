import styled from "styled-components"

export default function CasinoSection() {
    return(
        <Container>
            <DivGrid>
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
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

`

const DivGrid = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

`

const BoxContainer = styled.div`
    width: 100%;
    aspect-ratio: 93/55.15;

    border-radius: 5px;

    margin: 0 auto;

    background-color: grey;
`