import styled from "styled-components"

export default function CasinoSection() {
    return(
        <Container>
            <DivGrid>
            <BoxContainer>
                    <PicBox src="/assets/img/card/provider/iconsbobet-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picsbobet-m.png" />
                    </DivPicPro>
                </BoxContainer>
                <BoxContainer>
                    <PicBox src="/assets/img/card/provider/icondigmaan-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picdigmaan-m.png" />
                    </DivPicPro>
                </BoxContainer>
                <BoxContainer>
                    <PicBox src="/assets/img/card/provider/iconibc-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picibc-m.png" />
                    </DivPicPro>
                </BoxContainer>
                <BoxContainer>
                    <PicBox src="/assets/img/card/provider/iconaksport-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picaksport-m.png" />
                    </DivPicPro>
                </BoxContainer>
                <BoxContainer>
                    <PicBox src="/assets/img/card/provider/iconsbo-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picsbo-m.png" />
                    </DivPicPro>
                </BoxContainer>
                <BoxContainer>
                    <PicBox src="/assets/img/card/provider/iconts911-m.png" />
                    <DivPicPro>
                        <PicPro src="/assets/img/card/provider/picts911-m.png" />
                    </DivPicPro>
                </BoxContainer>
            </DivGrid>
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
    width: 95%;
    height: fit-content;
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
    width: 57%;
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

const BoxContainer = styled.div`
    width: 100%;
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