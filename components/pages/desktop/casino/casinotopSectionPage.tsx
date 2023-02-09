import styled from "styled-components";

export default function CasinoTopSectionPage() {
    return (
        <Container>
           <DivGrid>
                <GridFrBanner />
                <GridFrPopu>
                    <DivTitle />
                    <DivFlex>
                        <DivGame />
                        <DivGame />
                        <DivGame1 />
                    </DivFlex>
                </GridFrPopu>
                <GridFrJak>
                    <DivJack />
                    <DivAds />
                </GridFrJak>
           </DivGrid>
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

const DivGrid = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(4, 2fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFrBanner = styled.div`
    width: 100%;
    aspect-ratio: 320/104;

    background-color: grey;

    @media (min-width: 1280px) {
        grid-area: 1 / 1 / 2 / 4;
    }
`

const GridFrPopu = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/227.77;
        max-width: 650px;
    }

    @media (min-width: 1280px) {
        aspect-ratio: 871.11/284.77;
        max-width: 1164.64px;

        grid-area: 2 / 1 / 3 / 4; 
    }
    
    @media (min-width: 1280px) {
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

const DivFlex = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivGame = styled.div`
    width: 100%;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background-color: grey;

    @media (min-width: 1280px) {
        max-width: 320px;
        aspect-ratio: 284.444/239.44;
    }
`

const DivGame1 = styled.div`
    width: 100%;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    display: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background-color: grey;

    @media (min-width: 744px) {
        display: block;
    }

    @media (min-width: 1280px) {
        max-width: 320px;
        aspect-ratio: 284.444/239.44;
    }
`
 
const GridFrJak = styled.div`
    width: 95%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/320;
        max-width: 650px;
    }

    @media (min-width: 1280px) {
        width: 100%;

        flex-direction: column;
        grid-area: 1 / 4 / 3 / 5;
    }
`

const DivJack = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    max-width: 320px;
    
    background-color: grey;  
`

const DivAds = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    max-width: 425px;

    display: none;
    
    background-color: grey;  

    @media (min-width: 425px) {
        max-width: 320px;
        
        display: block;
    }
`