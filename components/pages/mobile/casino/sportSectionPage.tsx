import styled from "styled-components";

export default function SportSectionPage() {
    return (
        <Container>
            <DivTitle />
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
    height: auto;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: grey;
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

`

const BoxContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 93/55.15;

    position: relative;

    border-radius: 5px;

    margin: 0 auto;

    background-color: grey;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
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