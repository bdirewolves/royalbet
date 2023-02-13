import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { casinoContent } from "@/constants/casino";
import styled from "styled-components";

export default function SelectProSectionPage() {
    return(
        <Container>
            <FixWidth>
                <DivGridType>
                    <BoxType />
                    <BoxType />
                    <BoxType />
                    <BoxType />
                    <BoxType />
                    <BoxType />
                </DivGridType>
                <DivGridPro>
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro />
                    <BoxPro1 />
                </DivGridPro>
                <DivFlexGame>
                    <TitletypePage header="PROVIDER GAME SLOT" />
                    <DivGrid>
                        {
                            casinoContent.providergs.slice(0, 12).map((item, index) => (
                            <GridFr key={index}>
                                <DivPicPro>
                                    <PicPro src={item.img} />
                                </DivPicPro>
                                <BoxText />
                                <GoldPic />
                            </GridFr>
                        ))}
                    </DivGrid>
                </DivFlexGame>
            </FixWidth>
        </Container>
    )
}


const DivGridType = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

`

const BoxType = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 92/47;

    border-radius: 5px;

    margin: 0 auto;

    background: #100F14;

    &:hover{
        border: 1px solid #ECD559;
    }
    

    @media (min-width: 744px) {
        aspect-ratio: 210/69;
    }
`

const DivGridPro = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(4, 2fr);
    }
`

const BoxPro = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 86/28;

    border-radius: 5px;

    margin: auto;

    background: #100F14;

    &:hover{
        border: 1px solid #ECD559;
    }
`

const BoxPro1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 86/28;

    border-radius: 5px;

    margin: auto;

    background-color: grey;

    @media (min-width: 744px) {
        display: none;
    }
`

const DivFlexGame = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivGrid = styled.div`
    width: 100%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(2, 6fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 4fr);
    }
`

const GridFr = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/130;

    position: relative;

    border-radius: 5px;

    overflow: hidden;

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
    height: auto;
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`

const GoldPic = styled.div`
    width: 14%;
    height: auto;
    aspect-ratio: 20.71/17.26;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 10px 0px;

    z-index: 3;
`