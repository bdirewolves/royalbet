import styled from "styled-components";


export const Container = styled.section`
    position: relative;
    z-index: 10;

    margin: auto;
    width: 100%;
    height: auto;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1280px;
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
    }
`

export const PicBox = styled.img`
    width: 100%;
    height: 100%;
`

export const FixWidth = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* gap: 10px; */
`

export const Pictitle = styled.img`
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transform: translateX(-50%);

    transition-duration: .3s;
`

export const ButtonNews = styled.button`
    color: #fff;
    padding-left: 20px;
    background: #00201E;
    border-radius: 3.31px;
    height: 28px;
    display: flex;
    justify-items: center;
    align-items: center;
    cursor: pointer;

    

    &:hover{
        background: rgba(97, 255, 189, 0.05), #00201E;
        color: #61FFBD;
        transition: ease-out;
        transition-duration: 300ms;

    }
`

export const Button = styled.button`

    width: auto;
    padding: 0 23px;

    background: transparent;
    border: 1.77389px solid #61FFBD;
    backdrop-filter: blur(16.7292px);
    color: #61FFBD;

    border-radius: 35.4777px;

    font-family: 'Prompt';
    font-size: 16;

    &:hover {
        background: #61FFBD;
        color: #000;
        

        transition: ease-out;
        transition-duration: 100ms;

    }

    @media (min-width: 430px) {
        padding: 0 31.5px;
        font-size: 21.5px;
    }

    @media (min-width: 744px) {
        padding: 0  35px;
        font-size: 24px;
    }

`

export const DotActive = styled.span`
    font-size: 5px;
    color: #61FFBD;
`

export const Dot = styled.span`
    font-size: 5px;
    color: #fff;
`

export const DivDot = styled.div`
    width: 40px;
    display: flex;
    justify-content: space-between;
`

export const ContainerGameSection = styled.section`
    width: calc(100vw - 90px);
    height: auto;
    min-height: calc(100vh - 20px);
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-left: 90px;
    gap: 10px;

    @media (min-width: 744px) {
        width: calc(100vw - 250px);

        margin-left: 250px;
    }
`

export const ContainerGameHitSection = styled.section`
    width: calc(100vw - 90px);
    height: auto;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin-left: 90px;
    gap: 10px;

    @media (min-width: 744px) {
        width: calc(100vw - 250px);

        margin-left: 250px;
    }
`
