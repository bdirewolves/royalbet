import styled from "styled-components";

export default function SelectProSectionPage() {
    return(
        <Container>
            <DivGridType>
                <BoxType />
                <BoxType />
                <BoxType />
                <BoxType />
                <BoxType />
                <BoxType />
            </DivGridType>
            <DivGridPro>
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro />
                <BoxPro1 />
            </DivGridPro>
            <DivFlexGame>
                <DivTitle />
                <DivGrid>
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                    <BoxContainer />
                </DivGrid>
            </DivFlexGame>
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
`

const DivGridType = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

`

const BoxType = styled.div`
    width: 100%;
    aspect-ratio: 92/47;

    border-radius: 5px;

    margin: 0 auto;

    background-color: grey;

    @media (min-width: 744px) {
        aspect-ratio: 210/69;
    }
`

const DivGridPro = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(4, 2fr);
    }
`

const BoxPro = styled.div`
    width: 100%;
    aspect-ratio: 86/28;

    border-radius: 5px;

    margin: auto;

    background-color: grey;
`

const BoxPro1 = styled.div`
    width: 100%;
    aspect-ratio: 86/28;

    border-radius: 5px;

    margin: auto;

    background-color: grey;

    @media (min-width: 744px) {
        display: none;
    }
`

const DivFlexGame = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivTitle = styled.div`
    width: 100%;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: grey;
`

const DivGrid = styled.div`
    width: 100%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(2, 6fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 4fr);
    }
`

const BoxContainer = styled.div`
    width: 100%;
    aspect-ratio: 93/55.15;

    border-radius: 5px;

    margin: 0 auto;

    background-color: grey;
`