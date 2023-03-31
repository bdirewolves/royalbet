import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import styled from "styled-components";

export default function CasinoTopSectionPage() {
    return (
        <Container>
           <FixWidth>
               <DivGrid>
                    <GridFrBanner src="/assets/img/banner/mockup-1.jpg" />
                    <GridFrPopu>
                        <TitletypePage header="POPULAR GAME" />
                        <DivFlex>
                            <DivGame>
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-8.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Lucky Piggy</p>
                                </BoxText>
                            </DivGame>
                            <DivGame>
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-6.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Sweet Bonanza</p>
                                </BoxText>
                            </DivGame>
                            <DivGame1>
                                <DivPicPro>
                                    <PicPro src="/assets/img/homepage/slot/slot-9.jpg" />
                                </DivPicPro>
                                <BoxText>
                                    <p>Money Train 2</p>
                                </BoxText>
                            </DivGame1>
                        </DivFlex>
                    </GridFrPopu>
                    <GridFrJak>
                        <DivJack>
                            <JackHead>บาคาร่าเว็บตรง RoyalBet65</JackHead>
                            <JackContent>“royalbet” คุณจะสามารถสมัครบาคาร่า และ สามารถเล่น บาคาร่าด้วยระบบออโต้ผ่านทางหน้าเว็บไซต์ได้จากทุกช่องทาง อยู่ที่ไหนก็สามารถเล่นได้ มีครบทุกค่ายดัง SA Game | Pretty Gaming Baccarat | Sexy Baccarat หรือ เซ็กซี่ บาคาร่า</JackContent>
                        </DivJack>
                        <DivAds src="/assets/img/banner/add-line.jpg" />
                    </GridFrJak>
               </DivGrid>
           </FixWidth>
        </Container>
    )
}

const JackContent = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const JackHead = styled.h2`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
    text-align: center;

    color: #EFE7A7;
`

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    max-width: 744px;

    display: grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(4, 2fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFrBanner = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
    aspect-ratio: 320/104;

    background: #100F14;

    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

    @media (min-width: 1280px) {
        grid-area: 1 / 1 / 2 / 4;
    }
`

const GridFrPopu = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/227.77;
        max-width: 650px;
    }

    @media (min-width: 1280px) {
        aspect-ratio: 871.11/284.77;
        max-width: 1164.64px;

        grid-area: 2 / 1 / 3 / 4; 
    }
    
    @media (min-width: 1280px) {
        max-width: 1310px;
    }
`

const DivFlex = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivGame = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border: 1.01266px solid #959595;

    @media (min-width: 1280px) {
        max-width: 320px;
        aspect-ratio: 284.444/239.44;
    }
`

const DivGame1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 145/122.06;
    max-width: 210px;

    position: relative;

    display: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    border: 1.01266px solid #959595;

    @media (min-width: 744px) {
        display: block;
    }

    @media (min-width: 1280px) {
        max-width: 320px;
        aspect-ratio: 284.444/239.44;
    }
`
 
const GridFrJak = styled.div`
    width: 95%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: 0 auto;

    @media (min-width: 744px) {
        aspect-ratio: 650/320;
        max-width: 650px;
    }

    @media (min-width: 1280px) {
        width: 100%;

        flex-direction: column;
        grid-area: 1 / 4 / 3 / 5;
    }
`

const DivJack = styled.div`
    padding: 50px 16px;
    border-radius: 5px;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    max-width: 320px;
    
    background: #100F14;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

    background: url(/assets/img/banner/bg-banner-casino.jpg);
    background-size: cover;
    background-position: center;
`

const DivAds = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    max-width: 425px;

    display: none;
    
    background: #100F14; 
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

    @media (min-width: 425px) {
        max-width: 320px;
        
        display: block;
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
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;

    padding-left: 10px;
    width: 100%;
    height: auto;
    aspect-ratio: 145/17.26;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 18px;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`