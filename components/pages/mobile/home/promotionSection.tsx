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
                        {
                            promotionFebruary.squre.reverse().slice(0, 2).map((item, index) => (
                            <Box key={index}>
                                <Link href="/m/promotion">
                                    <PicBox src={item.img} alt={item.alt}/>
                                </Link>
                            </Box>
                            ))
                        }
                </DivFlex>
            </FixWidth>
        </Container>
    )
}

const DivFlex = styled.div`
    width: 100%;
    height: fit-content;
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
    aspect-ratio: 300/122.8;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`