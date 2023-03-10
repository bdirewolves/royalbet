import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { RiUserLine } from "react-icons/ri";


export default function NavbarMobile () {
    const router = useRouter()
    const [ current, setCurrent ] = useState<number>(0)

    const Goto = (index: number, path: string) => {
        setCurrent(index)
        router.push(path)
    }

    useEffect(() => {
        switch(router.asPath) {
            case "/": setCurrent(0);
                break;
            case "/": setCurrent(1);
                break;
            case "/": setCurrent(2);
                break;
            case "/": setCurrent(3);
                break;
            case "/": setCurrent(4);
                break;
            case "/m": setCurrent(0);
                break;
            case "/m/": setCurrent(1);
                break;
            case "/m/": setCurrent(2);
                break;
            case "/m/": setCurrent(3);
                break;
            case "/m/": setCurrent(4);
                break;
            default: setCurrent(0);
                break;
        }
    }, [router.isReady])

    return(
        <Background>
            <MenuList>
                <MenuItem onClick={() => Goto(0, "/")}>
                    <DivIcon>
                        <RiUserLine size={30}/>
                    </DivIcon>
                    <Span>
                        โปรไฟล์
                    </Span>
                </MenuItem>
                <MenuItem onClick={() => Goto(1, "/")}>
                    <DivIcon>
                        <Icon isActive={current == 1} src="/" />
                    </DivIcon>
                    <Span>
                        ประวัติธุรกรรม
                    </Span>
                </MenuItem>
                <MenuItem onClick={() => Goto(2, "/")}>
                    <DivIcon>
                        <IconAnimation src="/" />
                    </DivIcon>
                    <Span>
                        เล่นเกมส์
                    </Span>
                </MenuItem>
                <MenuItem onClick={() => Goto(3, "/")}>
                    <DivIcon>
                        <Icon isActive={current == 3} src="/" />
                    </DivIcon>
                    <Span>
                        ฝาก-ถอน
                    </Span>
                </MenuItem>
                <MenuItem onClick={() => Goto(4, "/")}>
                    <DivIcon>
                        <Icon isActive={current == 4} src="/" />
                    </DivIcon>
                    <Span>
                        ติดต่อแอดมิน
                    </Span>
                </MenuItem>
            </MenuList>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 50px;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #121116;
    border-radius: 20px 20px 0px 0px;

    @media (min-width: 1024px) {
        display: none;
    }

`

const MenuList = styled.div`
    width: auto;
    max-width: 505px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    
    transition: gap 300ms;

    @media (min-width: 430px) {
        gap: 45px;
    }
`

const MenuItem = styled.div`
    width: 61px;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivIcon = styled.div`
    width: 36px;
    height: 36px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    border-radius: 90%;
`

const Icon = styled.img<{ isActive: boolean }>`
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;

    ${props => props.isActive && `
        mix-blend-mode: normal;
    `}
`

const Span = styled.span`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const Gravity = keyframes`
    0%, 100% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(-20%);
    }
`

const IconAnimation = styled.img`
    width: auto;
    height: 25px;
    
    //cubic-bezier(0.310, 0.440, 0.445, 1.650)
    animation: ${Gravity} 3s cubic-bezier(0.310, 0.440, 0.445, 1.650) infinite;

`