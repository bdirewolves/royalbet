import styled from "styled-components";
import { ImgHTMLAttributes } from "react"; 

interface Boxsquares {

    namegame?: string;
    imggame?: string;
    bgblock?: boolean;
    onClick?: () => void;
}

export default function Boxsquares({ namegame , imggame , bgblock ,onClick}: Boxsquares) {
    return(
        <DivBox onClick={onClick}>
            <DivImgBox>
                <ImgBox src={imggame}/>
                <ImgBoxBG src="/assets/img/icon/providers/bgprovider.png" bgblock={bgblock} />
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

    gap: 10px;
    padding-bottom: 10px;
`

const DivImgBox = styled.div`
    width: 89.3%;
    aspect-ratio: 1/1;

    position: relative;

    border: 1px solid #959595;
    border-radius: 4.54687px;
`

const ImgBox = styled.img`
    width: 70%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);  
`

const ImgBoxBG = styled.img<{bgblock?: boolean}>`
    height: 100%;
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);  
    
    z-index: -1;

    ${props => props.bgblock ?
    `
        display: block;
    `
    :
    `
        display: none;
        
    `
    }
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