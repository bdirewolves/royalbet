import type { ReactNode } from "react"
import styled, { keyframes } from "styled-components"

interface IProps {

    Nm?: any;
    ISqure?: boolean;
    onClick?: () => void;

}

export default function Logo({ onClick , ISqure }: IProps) {
    return (
        <DivWolves ISqure={ISqure} type="button" onClick={onClick}>
            <Wolves src="/assets/logo/logo-wolves.svg" />
            <Wolvesimg src="/assets/logo/logo-text.svg" />
        </DivWolves>
    )
}

const slide = keyframes`
    to {
        background-position: 100% 50%;
    }
`

const Wolvesimg = styled.img`
    width: 100%;
    height: 100%;
`
const Wolves = styled.img`
    width: 100%;
    height: 100%;
`

const DivWolves = styled.button<{ ISqure?: boolean , Nm?: any }>`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;

    aspect-ratio: 36/111.6;

    ${props => props.ISqure ?
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5%;

        aspect-ratio: 36/111.6;
    `
    :
    `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5%;

        aspect-ratio: 135.41/120;
        
    `
    }
    

`