import Titletype from "@/components/_reduce/Divtitle"
import { Container, FixWidth } from "@/components/_reduce/Reduce"
import { promotionFebruary } from "@/constants/promotion"
import Link from "next/link"
import styled from "styled-components"

export default function PromotionSection() {
    return(
        <Container>
            <FixWidth>
                <Titletype header="PROMOTION" subhead="โปรโมชั่นทั้งหมด" />
                <DivFlex>
                    <Box>
                        <Link href="/m/promotion">
                            <PicBox src="/assets/img/promotion/new/promotion_1.jpg" alt="" />
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/m/promotion">
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
`

const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 650/222;
    overflow: hidden;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;

    transform: scale(1.02);
`