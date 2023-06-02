import styled from "styled-components";
import { ImgHTMLAttributes, useEffect, useState } from "react"; 
import AWS from "aws-sdk"

AWS.config.update({
    signatureVersion: 'v4',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

interface BoxAutoHeight {

    namegame?: string;
    imggame?: string;
    imggameblur?: string;
    bgblock?: boolean;
    fullimg?: boolean;
    onClick?: () => void;
    game_code: string;
    provider: string;
}

export default function BoxAutoHeight({ namegame , imggame , imggameblur , fullimg , bgblock ,onClick, game_code, provider }: BoxAutoHeight) {
    const [ picture, setPicture ] = useState("")

    const handleImageError = () => {
        setPicture(`https://placehold.co/210x150/black/white?text=${provider}`);
    };

    const fetch = async () => {
        try {
            const params = {
                Bucket: "company.x",
                Key: `${provider}/${game_code}.png`,
                Expires: 60,
            }
            await s3.getSignedUrlPromise('getObject', params)
            .then((res) => {
                console.log(res)
                setPicture(res)
            })
            .catch(() => {
                setPicture(`https://placehold.co/210x150/black/white?text=${provider}`)
            })
            
        } catch (error) {
            setPicture(`https://placehold.co/210x150/black/white?text=${provider}`)
        }
    }

    useEffect(() => {
        fetch()
    }, [])
    return(
        <DivBox onClick={onClick}>
            <DivImgBox>
                {/* <ImgBoxBlur src={imggameblur}/>
                <ImgBoxBG src="/assets/img/icon/providers/bgprovider.png" bgblock={bgblock} />
                <BG /> */}
                <ImgBox src={picture} fullimg={fullimg} onError={handleImageError} />
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
    height: auto;

    position: relative;

    /* border: 1px solid #959595;
    border-radius: 4.54687px; */

    overflow: hidden;
`

const ImgBox = styled.img<{fullimg?: boolean}>`
    width: 100%;
    height: 100%;

    border: 1px solid #959595;
    border-radius: 4.54687px;

    ${props => props.fullimg ?
    `
        width: 100%;
    `
    :
    `
        width: 100%;
        
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