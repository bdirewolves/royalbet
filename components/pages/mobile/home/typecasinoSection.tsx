import styled from "styled-components"

export default function TypeCasinoSection () {
    return (
        <Container>
            <DivFlex>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </DivFlex>
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

const DivFlex = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 52/58.31;

    border-radius: 1.91176px;

    background-color: grey;
`