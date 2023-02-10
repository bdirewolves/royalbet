import styled from "styled-components";

export default function HowtoSectionPage(){
    return(
        <Container>
            <DivTitle />
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