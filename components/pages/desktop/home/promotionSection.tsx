import Titletype from "@/components/_reduce/Divtitle"
import { Container, FixWidth } from "@/components/_reduce/Reduce"
import { promotionFebruary } from "@/constants/promotion"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

export default function PromotionSection() {
    const router = useRouter()
    return(
        <Container>
            <FixWidth>
                <Titletype header="PROMOTION" subhead="โปรโมชั่นทั้งหมด" onClick={() => router.push("/promotion")} />
                <DivFlex>
                    <Box>
                        <Link href="/promotion">
                            <PicBox src="/assets/img/promotion/new/promotion_1.jpg" alt="" />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/promotion">
                            <PicBox src="/assets/img/promotion/new/promotion_2.jpg" alt="" />
                        </Link>
                    </Box>
                </DivFlex>
            </FixWidth>
        </Container>
    )
}

const DivFlex = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        flex-direction: row;
    }
    
    @media (min-width: 1440px) {
        max-width: 1310px;

        flex-direction: row;
    }
`

const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/102.8;
    overflow: hidden;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
    transform: scale(1.02);
`