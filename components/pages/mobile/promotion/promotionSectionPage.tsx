import TitletypePage from "@/components/_reduce/DivtitlePage"
import { Container, FixWidth, PicBox } from "@/components/_reduce/Reduce"
import { promotionFebruary } from "@/constants/promotion"
import Link from "next/link"
import styled from "styled-components"


export default function PromotionPageSection() {
    return(
        <Container>
            <FixWidth>
                <TitletypePage header="PROMOTION" />
                <DivGrid>
                    {
                        promotionFebruary.squre.reverse().slice(0, 3).map((item, index) => (
                        <Box key={index}>
                            <Link href="/m/promotion">
                                <PicBox src={item.img} alt={item.alt}/>
                            </Link>
                        </Box>
                        ))
                    }
                </DivGrid>
            </FixWidth>
        </Container>
    )
}

const DivGrid = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(1, 3fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(2, 2fr);
    }
`
const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    background-color: #100F14;

    &:hover {
        opacity: 0.5;
    }
`

const Box1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/177.78;
    max-width: 650px;

    display: none;

    background-color: #100F14;

    &:hover {
        opacity: 0.5;
    }

    @media (min-width: 744px) {
        display: block;
    }
`