import type { ReactNode } from "react"
import styled from "styled-components"


export default function GoldenSpan ({ children }: { children: ReactNode }) {
    return (
        <Span>
            {children}
        </Span>
    )
}

const Span = styled.span`
    background: linear-gradient(90deg, #A68251 11.17%, #E9CB8F 31.04%, #FFE09F 49.75%, #E5C88F 68.46%, #AA8B5E 86%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`