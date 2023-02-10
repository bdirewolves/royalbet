import styled from "styled-components"

export default function PromotionSection() {
    return(
        <Container>
            <DivTitle />
            <DivFlex>
                <Box>
                    <PicBox src="/assets/img/promotion/promotionbanner1-m.png"/>
                </Box>
                <Box>
                    <PicBox src="/assets/img/promotion/promotionbanner2-m.png"/>
                </Box>
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

        flex-direction: row;
    }
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 300/102.8;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`