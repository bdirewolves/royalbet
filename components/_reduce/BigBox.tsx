import styled from "styled-components";
import { ImgHTMLAttributes } from "react"; 

interface Bigbox {

    namegame?: string;
    imggame?: string;
    imggameblur?: string;
    bgblock?: boolean;
    fullimg?: boolean;
    onClick?: () => void;
}

export default function Bigbox({ namegame , imggame , imggameblur , fullimg , bgblock ,onClick }: Bigbox) {
    return(
        <DivBox onClick={onClick} >
            <DivImgBox>
                <ImgBoxBlur src={imggameblur}/>
                <ImgBoxBG src="/assets/img/icon/providers/bgprovider.png" bgblock={bgblock} />
                <BG/>
                <ImgBox src={imggame} fullimg={fullimg}/>
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
    width: 84%;
    aspect-ratio: 84.09/113.49;

    position: relative;

    border: 1px solid #959595;
    border-radius: 4.54687px;

    overflow: hidden;
`

const ImgBox = styled.img<{fullimg?: boolean}>`
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${props => props.fullimg ?
    `
        width: 100%;
    `
    :
    `
        width: 90%;
    `
    }

`

const ImgBoxBlur = styled.img`
    width: 100%;
    height: 100%;

    position: absolute;

    filter: blur(10px);

`

const ImgBoxBG = styled.img<{bgblock?: boolean}>`
    height: 100%;
    width: 100%;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);   

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