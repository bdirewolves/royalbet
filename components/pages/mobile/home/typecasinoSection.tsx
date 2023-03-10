import { Container, FixWidth } from "@/components/_reduce/Reduce"
import styled from "styled-components"

export default function TypeCasinoSection () {
    return (
        <Container>
            <FixWidth>
                <DivFlex>
                    <Box>
                        <DivText>
                            <TextF>CASINO<TextB>ROYAL</TextB></TextF>
                        </DivText>
                        <PicBox src="/assets/img/casino/royalr-m.png" />
                        <LineGolden />
                    </Box>
                    <Box>
                        <DivText>
                            <TextF>SLOT<TextB>ROYAL</TextB></TextF>
                        </DivText>
                        <PicBox src="/assets/img/casino/royalo-m.png" />
                        <LineGolden />
                    </Box>
                    <Box>
                        <DivText>
                            <TextF>SPORT<TextB>ROYAL</TextB></TextF>
                        </DivText>
                        <PicBox src="/assets/img/casino/royaly-m.png" />
                        <LineGolden />
                    </Box>
                    <Box>
                        <DivText>
                            <TextF>E-SPORT<TextB>ROYAL</TextB></TextF>
                        </DivText>
                        <PicBox src="/assets/img/casino/royala-m.png" />
                        <LineGolden />
                    </Box>
                    <Box>
                        <DivText>
                            <TextF>GAME<TextB>ROYAL</TextB></TextF>
                        </DivText>
                        <PicBox src="/assets/img/casino/royall-m.png" />
                        <LineGolden />
                    </Box>
                </DivFlex>
            </FixWidth>
        </Container>
    )
}

const DivFlex = styled.div`
    width: 100%;
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
    height: auto;
    aspect-ratio: 52/58.31;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    background: radial-gradient(50% 50% at 50% 50%, #3E3E3E 0%, #100F14 100%);
`

const DivText = styled.div`
    width: 100%;
    height: auto;

    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
`

const TextF = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 6.77939px;
    line-height: 15px;

    margin: 0;

    color: white;
`
const TextB = styled.em`
    display: none;

    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 6.77939px;
    line-height: 15px;

    margin: 0;

    color: white;
`

const LineGolden = styled.div`

    width: 33.3%;
    height: auto;
    aspect-ratio: 90/3;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);

    position: absolute;
    left: 50%;
    bottom: 0%;

    transform: translateX(-50%);

    /* Gold solf */


   
`

const PicBox = styled.img`
    width: 90%;
    height: auto;
    aspect-ratio: 133/126.84;

    position: absolute;
    left: 50%;
    bottom: 0%;

    transform: translateX(-50%);

   

    ${Box}:hover & {
        transition-duration: 300ms;
        transform: scale(1.2) translateX(-40%);
    }
`