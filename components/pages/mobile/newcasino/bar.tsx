import styled from "styled-components";
import { Dispatch, ReactNode, SetStateAction } from "react";
import GameHit from "./gamehit";
import GameCasino from "./gamecasino";
import GameCard from "./gamecard";
import GameFish from "./gamefish";
import GameLotto from "./gamelotto";
import GameTrade from "./gametrade";
import GameSport from "./gamesport";
import GameKeno from "./gamekeno";
import GameEsport from "./gameesport";
import GameSlotProvider from "./gameslotprovider";

interface IBar {
    typegame: ReactNode;
    setTypegame: Dispatch<SetStateAction<ReactNode>>;
}

export default function Bar({ typegame , setTypegame }: IBar){
    return(
        <Container>
            <Box  onClick={()=> setTypegame(<GameHit/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame10.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>HOT GAME</TextEng>
                    <TextThai>ยอดนิยม</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameCasino/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame9.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>CASINO</TextEng>
                    <TextThai>คาสิโนสด</TextThai>
                </DivText>
            </Box>
<<<<<<< HEAD
            <Box onClick={()=> setTypegame(<GameSlotProvider typegame={typegame} setTypegame={setTypegame} />)}>
=======
            <Box onClick={()=> setTypegame(<GameSlot />)}>
>>>>>>> 85208d41cf1a71a6ff32aa980247e9aea34a6ac1
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame8.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>SLOT</TextEng>
                    <TextThai>สล๊อตเกม</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameCard/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame7.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>CARDS</TextEng>
                    <TextThai>เกมไพ่</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameFish/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame6.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>FISHING</TextEng>
                    <TextThai>เกมส์ตกปลา</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameLotto/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame5.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>LOTTO</TextEng>
                    <TextThai>หวย</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameTrade/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame4.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>TRADING</TextEng>
                    <TextThai>เทรดดิ้ง</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameSport/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame3.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>SPORT</TextEng>
                    <TextThai>กีฬา</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameEsport/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame2.webp" />
                </DivImgBox>
                <DivText>
                    <TextEng>E-SPORT</TextEng>
                    <TextThai>E-SPORT</TextThai>
                </DivText>
            </Box>
            <Box onClick={()=> setTypegame(<GameKeno/>)}>
                <DivImgBox>
                    <ImgBox src="/assets/img/barnewgame/barnewgame1.webp" />
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

    z-index: 11;

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
    padding: 10px;
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

