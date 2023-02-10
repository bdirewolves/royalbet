import styled from "styled-components"

export default function TypeCasinoSection () {
    return (
        <Container>
            <DivFlex>
                <Box>
                    <DivText>
                        <Text>CASINO ROYAL</Text>
                    </DivText>
                    <PicBox src="/assets/img/casino/royalr-m.png" />
                </Box>
                <Box>
                    <DivText>   
                        <Text>SLOT ROYAL</Text>
                    </DivText>
                    <PicBox src="/assets/img/casino/royalo-m.png" />
                </Box>
                <Box>
                    <DivText>
                        <Text>SPORT ROYAL</Text>
                    </DivText>
                    <PicBox src="/assets/img/casino/royaly-m.png" />
                </Box>
                <Box>
                    <DivText>
                        <Text>E-SPORT ROYAL</Text>
                    </DivText>
                    <PicBox src="/assets/img/casino/royala-m.png" />
                </Box>
                <Box>
                    <DivText>
                        <Text>GAME ROYAL</Text>
                    </DivText>
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

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    background: radial-gradient(50% 50% at 50% 50%, #3E3E3E 0%, #100F14 100%);
`

const DivText = styled.div`
    width: 100%;
    aspect-ratio: 132.51/19.89;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 9.77939px;
    line-height: 15px;

    margin: 0;

    color: white;
`

const PicBox = styled.img`
    width: 100%;
    aspect-ratio: 133/126.84;

    position: absolute;
    bottom: 0;

    &:hover {
        transition-duration: 300ms;
        transform: scale(1.1);
    }
`