import type { ReactNode } from "react";
import styled from "styled-components"

interface IButton {
    children: ReactNode;
    isBorder?: boolean;
    color?: string;
    onClick?: () => void;
}

export default function ButtonHover({ children, onClick }: IButton) {
    return(
        <Button onClick={onClick}>
            <span />
            <span />
            <span />
            <span />
            {children}
        </Button>
    )
}

const SpanBtn = styled.span`
    
`

const Button = styled.button`
    position: relative;
    padding: 4px 13px;
    outline: none;
    border: 1px solid #414042;
    background: #414042;
    color: #fff;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 20px;
    cursor: pointer;
    font-family: "Prompt";
    font-size: 14px;
    font-weight: 600;

    &:hover {
        box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
        transition-delay: 0.6s;

        span:nth-child(1) {
            left: 100%;
            transition: 0.7s;
        }

        span:nth-child(2) {
            top: 100%;
            transition: 0.7s;
            transition-delay: 0.17s;
        }

        span:nth-child(3) {
            right: 100%;
            transition: 0.7s;
            transition-delay: 0.35s;
        }

        span:nth-child(4) {
            bottom: 100%;
            transition: 0.7s;
            transition-delay: 0.52s;
        }
    }

    span {
        position: absolute;
    }

    span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ae00ff);
    }

    span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #ae00ff);
    }

    span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #001eff);
    }

    span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #001eff);
    }

    &:active {
        background: #ae00af;
        background: linear-gradient(to top right, #ae00af, #001eff);
        color: #bfbfbf;
        box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
        transition: 0.1s;

        span:nth-child(1), span:nth-child(2), span:nth-child(3), span:nth-child(4) {
            transition: none;
            transition-delay: none;
        }
    }
`