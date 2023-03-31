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
                            <BoxContainer key={index} bg={item.img} />
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

`

const DivPicPro = styled.div`
    width: 57%;
    height: auto;
    aspect-ratio: 1/1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 2;
`

const PicPro = styled.img`
    width: 100%;
    height: 100%;
`

const BoxContainer = styled.div<{ bg?: string }>`
    width: 100%;
    height: auto;
    aspect-ratio: 93/55.15;

    position: relative;

    border-radius: 5px;

    margin: 0 auto;

    overflow: hidden;

    background-image: url(${props => props.bg && props.bg});
    background-size: 110% 110%;
    background-position: center;

    transition: 300ms ease-out;

    cursor: pointer;

    &:hover {
        background-size: 140% 140%;
    }
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
`
