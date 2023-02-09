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

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
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

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
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

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(8, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
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

    @media (min-width: 1280px) {
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
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

    @media (min-width: 1280px) {
        width: 100%;
        aspect-ratio: 1164.44/35.56;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
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

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 4fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const BoxContainer = styled.div`
    width: 100%;
    aspect-ratio: 93/55.15;

    border-radius: 5px;

    margin: 0 auto;

    background-color: grey;
`