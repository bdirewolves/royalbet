import styled from "styled-components";

export default function Bar(){
    return(
        <Container>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>HOT GAME</TextEng>
                    <TextThai>ยอดนิยม</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>CASINO</TextEng>
                    <TextThai>คาสิโนสด</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>SLOT</TextEng>
                    <TextThai>สล๊อตเกม</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>CARDS</TextEng>
                    <TextThai>เกมไพ่</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>FISHING</TextEng>
                    <TextThai>เกมส์ตกปลา</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>LOTTO</TextEng>
                    <TextThai>หวย</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>TRADING</TextEng>
                    <TextThai>เทรดดิ้ง</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>SPORT</TextEng>
                    <TextThai>กีฬา</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>E-SPORT</TextEng>
                    <TextThai>E-SPORT</TextThai>
                </DivText>
            </Box>
            <Box>
                <DivImgBox>
                    <ImgBox />
                </DivImgBox>
                <DivText>
                    <TextEng>KENO</TextEng>
                    <TextThai>คีโน</TextThai>
                </DivText>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    width: 90px;
    height: calc(100vh - 90px);

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    left: 0;
    top: 90px;

    gap: 10px;
    padding-top: 10px;
    padding-bottom: 70px;

    overflow: scroll;

    background-color: black;

    @media (min-width: 744px) {
        width: 250px;
    }
`

const Box = styled.div`
    width: 74px;
    height: 92px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 11.0946px;
    gap: 8px;

    background: linear-gradient(180deg, #202020 0%, #100F14 100%);
    border: 1px solid #202020;
    border-radius: 5px;

    &:hover {
        border: 1px solid #F6E79A;
    }

    @media (min-width: 744px) {
        width: 218px;
        height: 88px;

        flex-direction: row;
    }
`

const DivImgBox = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ImgBox = styled.img`
    width: 46px;
    height: 46px;
`

const DivText = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 744px) {
        align-items: flex-start;
    }
`

const TextThai = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 18px;
    text-align: center;

    color: #FFFFFF;

    @media (min-width: 744px) {
        font-size: 12px;
    }
`

const TextEng = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;

    color: #F6E79A;

    display: none;

    @media (min-width: 744px) {
        display: block;
    }
`

