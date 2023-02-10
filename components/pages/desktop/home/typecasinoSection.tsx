import styled from "styled-components"

export default function TypeCasinoSection () {
    return (
        <Container>
            <DivFlex>
                <Box>
                    <PicBox src="/assets/img/casino/royalr-m.png" />
                </Box>
                <Box>
                    <PicBox src="/assets/img/casino/royalo-m.png" />
                </Box>
                <Box>
                    <PicBox src="/assets/img/casino/royaly-m.png" />
                </Box>
                <Box>
                    <PicBox src="/assets/img/casino/royala-m.png" />
                </Box>
                <Box>
                    <PicBox src="/assets/img/casino/royall-m.png" />
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

const DivFlex = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1245px;
    }

    @media (min-width: 1440px) {
        max-width: 1400px;
    }
`

const Box = styled.div`
    width: 100%;
    aspect-ratio: 52/58.31;

    border-radius: 1.91176px;

    @media (min-width: 1280px) {
        border-radius: 5px;
    }
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`