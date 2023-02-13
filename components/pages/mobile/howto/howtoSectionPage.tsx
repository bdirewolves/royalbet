import Titletype from "@/components/_reduce/Divtitle";

import { Container, FixWidth } from "@/components/_reduce/Reduce";
import styled from "styled-components";

export default function HowtoSectionPage(){
    return(
        <Container>
            <FixWidth>
                <Titletype header="Howto" subhead="เล่นเกม" />
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
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1px;
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