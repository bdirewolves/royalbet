import styled from "styled-components";
import { ImgHTMLAttributes } from "react"; 

interface Boxsquares {

    namegame?: string;
    imggame?: ImgHTMLAttributes<HTMLImageElement>;
    onClick?: () => void;
}

export default function Boxsquares({ namegame , imggame}: Boxsquares) {
    return(
        <DivBox>
            <DivImgBox>
                <ImgBox {...imggame}/>
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
    width: 89.3%;
    aspect-ratio: 1/1;

    border: 1px solid #959595;
    border-radius: 4.54687px;
`

const ImgBox = styled.img`
    width: 100%;
    height: 100%;

    background-color: #100F14;
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