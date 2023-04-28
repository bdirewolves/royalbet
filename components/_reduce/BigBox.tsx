import styled from "styled-components";
import { ImgHTMLAttributes } from "react"; 

interface Bigbox {

    namegame?: string;
    imggame?: string;
    imggameblur?: string;
    onClick?: () => void;
}

export default function Bigbox({ namegame , imggame , imggameblur}: Bigbox) {
    return(
        <DivBox>
            <DivImgBox>
                <ImgBoxBlur src={imggameblur}/>
                <BG/>
                <ImgBox src={imggame}/>
            </DivImgBox>
            <DivTextBox>
                <TextBox>{namegame}</TextBox>
            </DivTextBox>
        </DivBox>
    )
}

const DivBox = styled.div`    
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 8px;
`

const DivImgBox = styled.div`
    width: 84%;
    aspect-ratio: 84.09/113.49;

    position: relative;

    border: 1px solid #959595;
    border-radius: 4.54687px;

    overflow: hidden;
`

const ImgBox = styled.img`
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: #100F14;
`

const ImgBoxBlur = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;

    filter: blur(10px);

    background-color: #100F14;
`

const BG = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    opacity: 0.5;

    background-color: black;
`

const DivTextBox = styled.div`
    width: 100%;
    height: 14.8%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const TextBox = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    text-align: center;

    margin: 0;

    color: #FFFFFF;

    @media (min-width: 744px) {
        font-size: 16px;
    }
`