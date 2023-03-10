import { Container, FixWidth } from "@/components/_reduce/Reduce"
import { casinoContent } from "@/constants/casino"
import styled from "styled-components"

export default function CasinoSection() {

    return(
        <Container>
            <FixWidth>
                <DivGrid>
                    {
                        casinoContent.show.map((item, index) => (
                            <BoxContainer key={index}>
                                <PicBox src={item.bgimg} />
                                <DivPicPro>
                                    <PicPro src={item.img} />
                                </DivPicPro>
                            </BoxContainer>
                        ))
                    }
                </DivGrid>
            </FixWidth>
        </Container>
    )
}

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const DivPicPro = styled.div`
    width: 57%!important;
    aspect-ratio: 1/1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 2!important;
`

const PicPro = styled.img`
    width: 100%;
    height: 100%;
`

const BoxContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 93/55.15;

    position: relative;

    border-radius: 5px;

    margin: 0 auto;

    overflow: hidden;

    &:hover ${PicPro} {
        filter: brightness(1);
        transition-duration: 300ms;
        transform: scale(1.15);
    }
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
`