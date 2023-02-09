import styled from "styled-components";

export default function BlogSection() {
    return(
        <Container>
            <DivTitle />
            <DivFlexrow>
                <Box />
                <DivFlex>
                    <Title>บทความ</Title>
                    <DivFlexContent>
                        <DivTextContent />
                        <DivTextContent />
                        <DivTextContent />
                        <DivTextContent />
                        <DivTextContent />
                        <DivTextContent />
                    </DivFlexContent>
                    <GoldPic />
                </DivFlex>
            </DivFlexrow>
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

const DivFlexrow = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        width: 91%;
        max-width: 1164.44px;

        flex-direction: row;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Box = styled.div`
    width: 95%;
    aspect-ratio: 300/179;
    max-width: 650px;

    background-color: grey;
`

const DivFlex = styled.div`
    width: 95%;
    height: 302px;
    max-width: 650px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 10px;

    border-radius: 0px 0px 10px 0px;
    background: #100F14;

    @media (min-width: 744px) {
        height: 386px;
        padding: 30px 0 0 30px;
    }

    @media (min-width: 1280px) {
        height: 343.11px;
    }
    
    @media (min-width: 1440px) {
        height: 386px;
    }
    
`

const Title = styled.h2`
    font-size: 18px;    
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    line-height: 27px;

    color: #ECD559;

    padding-left: 10px;
`

const DivFlexContent = styled.div`
    width: 90%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin: 0 auto;

    gap: 10px;
`

const DivTextContent = styled.div`
    width: 100%;
    height: 30px;

    background-color: grey;
`

const GoldPic = styled.div`
    display: none;

    width: 120px;
    height: 30px;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 19px 0px 10px;

    @media (min-width: 744px) {
        display: block;
    }
`