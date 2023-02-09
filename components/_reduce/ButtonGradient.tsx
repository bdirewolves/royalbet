import type { ReactNode } from "react"
import styled, { keyframes } from "styled-components"

interface IProps {
    children: ReactNode;
    onClick?: () => void;

}

export default function ButtonGradient({ children, onClick }: IProps) {
    return (
        <Button type="button" onClick={onClick}>
            {children}
        </Button>
    )
}

const slide = keyframes`
    to {
        background-position: 100% 50%;
    }
`

const Button = styled.button`
    padding: 4px 13px;
    border: 0.5px solid #fff;
    border-radius: 38px;
    font-family: 'Sukhumvit Set';
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    background: linear-gradient(90deg, #A68251 11.17%, #E9CB8F 31.04%, #FFE09F 49.75%, #E5C88F 68.46%, #AA8B5E 86%);
    background-position: 0% 50%;
    background-size: 300% 500%;
    transition: 500ms;
    cursor: pointer;
    &:hover {
        background-position: right center;
    }
`