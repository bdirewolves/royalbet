import styled from "styled-components";

export default function HowtoSection(){
    return(
        <Container>
            <DivGrid >
                <Gridfr />
                <Gridfr />
                <Gridfr />
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
`

const DivGrid = styled.div`
    width: 100%;
    aspect-ratio: 320/59.35;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;

`

const Gridfr = styled.div`
    width: 100%;
    height: auto;

    background-color: grey;
`



