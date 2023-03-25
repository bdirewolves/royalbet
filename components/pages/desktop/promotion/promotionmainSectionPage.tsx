import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { promotionFebruary } from "@/constants/promotion";
import Link from "next/link";
import styled from "styled-components";

export default function PromotionMainSectionPage() {
    return(
        <Container>
            <FixWidth>
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
    }
`

const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/102.8;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`
