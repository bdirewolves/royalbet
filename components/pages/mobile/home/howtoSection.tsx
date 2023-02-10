import styled from "styled-components";

export default function HowtoSection(){
    return(
        <Container>
            <DivGrid >
                <Gridfr>
                    <DivIcon>
                        <Icon src="/assets/img/howtouse/register.svg" />
                    </DivIcon>
                    <Text>
                        กดปุ่มสมัครสมาชิก
                    </Text>
                </Gridfr>
                <Gridfr>
                    <DivIcon>
                        <Icon src="/assets/img/howtouse/info.svg" />
                    </DivIcon>
                    <Text>
                        กรอกข้อมูลส่วนตัว
                    </Text>
                </Gridfr>
                <Gridfr1>
                    <DivIcon>
                        <Icon src="/assets/img/howtouse/varify.svg" />
                    </DivIcon>
                    <Text>
                        กดยืนยันการสมัคร
                    </Text>
                </Gridfr1>
            </DivGrid >
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
`

const DivGrid = styled.div`
    width: 100%;
    aspect-ratio: 320/59.35;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #161616 -1.37%, #202020 100%);
`

const Gridfr = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;

    border-right: 1px solid white;
`

const Gridfr1 = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;
`

const DivIcon = styled.div`
    width: 20%;
    aspect-ratio: 1/1;
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
`

const Text = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 6.0215px;
    line-height: 21px;

    color: #FFFFFF;

    @media (min-width: 744px) {
        font-size: 14px;
    }
`
