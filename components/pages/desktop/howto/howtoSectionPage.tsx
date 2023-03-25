import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import styled from "styled-components";

export default function HowtoSectionPage(){
    return(
        <Container>
            <FixWidth>
                <TitletypePage header="Howto" />
                <DivFlex>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                    <Box>
                        <Text>ขั้นตอนสมัครสมาชิก</Text>
                    </Box>
                </DivFlex>
            </FixWidth>
        </Container>
    )
}

const DivFlex = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1px;

    @media (min-width: 1280px) {
        width: 91%;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Box = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    background-color: #100F14;
`

const Text = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    margin: 0;

    color: #FFFFFF;
`