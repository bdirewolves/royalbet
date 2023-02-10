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