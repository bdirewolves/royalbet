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
                <Gridfr2>
                    <ButtonGold>
                        <TextButton>Button</TextButton>
                    </ButtonGold>
                </Gridfr2>
                <Dothow src="/assets/img/howtouse/dothowto.png"/>
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

    @media (min-width: 1280px) {
        max-width: 1280px;
    }
    
    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 320/59.35;

    position: relative;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background: linear-gradient(90deg, #161616 -1.37%, #202020 100%);

    @media (min-width: 1280px) {
        width: 91%;
        aspect-ratio: 1164.44/124.44;
        max-width: 1164.44px;

        grid-template-columns: repeat(4, 1fr);

        border: 1px solid #000000;
        border-radius: 10px;

        background: linear-gradient(90deg, #161616 -1.37%, #202020 100%);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
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
    height: auto;
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

const TextButton = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 6.0215px;
    line-height: 21px;
    text-align: center;

    color: #000000;

    @media (min-width: 744px) {
        font-size: 14px;
    }
`

const Gridfr2 = styled.div`
    width: 100%;
    height: auto;

    display: none;

    z-index: 2;

    @media (min-width: 1280px) {
        display: block;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
`

const ButtonGold = styled.div`
    width: 33%;
    height: auto;
    aspect-ratio: 97/30;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    margin-right: 15%;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 5px;
    
`

const Dothow = styled.img`
    width: 25%;
    height: 100%;

    position: absolute;
    right: 0;

    display: none;

    z-index: 1;

    @media (min-width: 1280px) {
        display: block;
    }
`

