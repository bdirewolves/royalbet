import type { ReactNode } from "react";
import styled from "styled-components"

interface TitletypePage {

    header?: string;
    subhead?: string;
    ISqure?: boolean;
    onClick?: () => void;
}

export default function TitletypePage ({  onClick, header, subhead }: TitletypePage) {
    return (

        <DivTitle onClick={onClick}>
            <Title>
                <TextTitle>{header}</TextTitle>
            </Title>
            <AllGame>
                <LineTitle />
            </AllGame>
        </DivTitle>
    )
}

const DivTitle = styled.div<{ ISqure?: boolean , Nm?: any }>`
    width: 95%;
    height: auto;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    ${props => props.ISqure ?
    `
        width: 100%;
    `
    :
    `
        width: 95%;
        
    `
    }

    @media (min-width: 1280px) {
        width: 100%;
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