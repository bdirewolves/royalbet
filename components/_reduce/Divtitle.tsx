import type { ReactNode } from "react";
import styled from "styled-components"

interface Titletype {

    header?: string;
    subhead?: string;
    ISqure?: boolean;
    onClick?: () => void;
}

export default function Titletype ({  onClick, header, subhead }: Titletype) {
    return (
        <DivTitle onClick={onClick}>
            <Title>
                <TextTitle>{header}</TextTitle>
            </Title>
            <AllGame>
                <TextAllgame>{subhead}</TextAllgame>
                <LineTitle />
            </AllGame>
        </DivTitle>
    )
}
const DivTitle = styled.div<{ ISqure?: boolean , Nm?: any }>`
    cursor: pointer;
    padding: 20px 0;
    width: 95%;
    height: auto;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    ${props => props.ISqure ?
    `
        width: 95%;
    `
    :
    `
        width: 100%;
        
    `
    }

    @media (min-width: 1280px) {
        aspect-ratio: 1164.44/35.56;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Title = styled.div`
    width: auto;
    height: auto;

    padding: 0px 10px;

    background: #343434;

    z-index: 2;
`
const AllGame = styled.div`
    width: auto;
    height: auto;

    position: relative;
    padding: 1px 10px;

    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    
    z-index: 1;
`

const LineTitle = styled.div`
    width: 1440px;
    height: 1px;

    position: absolute;
    left: -22px;
    top: 50%;

    transform: translate( -100% , -50%);
    background: rgba(149, 149, 149, 0.5);

    z-index: 0;
`
const TextTitle = styled.h2<{ header?: string}>`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;

    color: #ECD559;

    ${props => props.header && `
        content: ${props.header} !important;
    `}
    
`
const TextAllgame = styled.h3<{ subhead?: string}>`

    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #959595;

    ${props => props.subhead && `
        content: ${props.subhead} !important;
    `}
`