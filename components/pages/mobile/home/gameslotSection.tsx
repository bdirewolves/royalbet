import styled from "styled-components"
import Image from "next/legacy/image"
import Link from "next/link"


export default function GameSlotSection () {
    return(
        <Container>
            <DivTitle />
            <DivGrid>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
                <GridFr>
                    <DivPicPro>
                        <PicPro src="/assets/img/test.png" />
                    </DivPicPro>
                    <BoxText />
                    <GoldPic />
                </GridFr>
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

const DivGrid = styled.div`
    width: 95%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(2, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 2fr);
    }
`

const GridFr = styled.div`
    width: 100%;
    aspect-ratio: 145/130;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

    background-color: grey;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }
`

const DivPicPro = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
`

const PicPro = styled.img`
    width: 100%;
    height: 100%;
`

const BoxText = styled.div`
    width: 100%;
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`

const GoldPic = styled.div`
    width: 14%;
    aspect-ratio: 20.71/17.26;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;

    z-index: 3;
`