import type { ReactNode } from "react";
import styled from "styled-components"

interface IButton {
    children: ReactNode;
    isBorder?: boolean;
    color?: string;
    onClick?: () => void;
}

export default function Button ({ children, onClick, isBorder, color }: IButton) {
    return (
        <Btn onClick={onClick} isBorder={isBorder} color={color}>
            { children }
        </Btn>
    )
}

const Btn = styled.button<{ isBorder?: boolean, color?: string }>`
    border: none;
    width: fit-content;
    height: fit-content;
    font-family: "Sukhumvit Set";
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
    
    ${props => props.isBorder ? 
    `
        padding: 4px 13px;
        border-radius: 30px;
        border: 1px solid #FACE63;
        background: none;
        color: #fff;
        transition-duration: 300ms;

        &:hover {
            background: linear-gradient(90deg,#A68251 11.17%,#E9CB8F 31.04%,#FFE09F 49.75%,#E5C88F 68.46%,#AA8B5E 86%);
            transition-duration: 300ms;
            color: #000;
        }
    `
    :
    `
        background: transparent;
        color: #000;
    `
    }

    ${props => props.color && `
        color: ${props.color} !important;
    `}
`