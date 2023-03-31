import styled from "styled-components"
import Link from "next/link"


export default function Chat() {
    return(
        <Link href="https://line.me/">
            <DivChat>
                    <DivPicChat>
                        <PicChat src="/assets/img/navbarMobile/Chat.png"/>
                    </DivPicChat>
            </DivChat>
        </Link>
    )
}

const DivPicChat = styled.div`
    width: 59px;
    height: 60px;

    display: none;
    
    animation: anim 3s infinite;
    

    @keyframes anim {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0);
    }
    }

    @media (min-width: 1280px) {
        display: block;
    }
`

const PicChat = styled.img`
    width: 100%;
    height: 100%;
`

const DivChat = styled.div`
    width: auto;
    height: auto;

    position: fixed;
    bottom: 10%;
    right: 30px;
    z-index: 999;
    
    overflow: visible;
`