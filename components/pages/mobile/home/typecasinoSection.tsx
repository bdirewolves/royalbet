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

    overflow: hidden;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`