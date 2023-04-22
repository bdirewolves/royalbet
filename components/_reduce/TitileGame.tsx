import styled from "styled-components";

interface TitleGame {

    header?: string;

}

export default function TitleGame({ header }: TitleGame){
    return(
        <DivTitle>
            <DivTextTitle>
                <TextTitle>{header}</TextTitle>
            </DivTextTitle>
            <Line />
        </DivTitle>
    )
}

const DivTitle = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 8px;
    margin-bottom: 10px;
`

const DivTextTitle = styled.div`
    width: 100%;
    height: auto;
`

const TextTitle = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 36px;
    text-align: center;

    color: #ECD559;

    @media (min-width: 744px) {
        font-size: 24px;
    }
`

const Line = styled.div`
    width: 94.6%;
    height: 1.49px;

    background: linear-gradient(90deg, rgba(149, 149, 149, 0) 0.05%, #959595 51.56%, rgba(149, 149, 149, 0) 99.95%);
`