import styled from "styled-components";

export default function PromotionMainSectionPage() {
    return(
        <Container>
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
    height: auto;
    aspect-ratio: 300/102.8;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`
