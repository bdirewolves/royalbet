import Titletype from "@/components/_reduce/Divtitle"
import { promotionFebruary } from "@/constants/promotion"
import Link from "next/link"
import styled from "styled-components"

export default function PromotionSection() {
    return(
        <Container>
            <Titletype header="PROMOTION" subhead="โปรโมชั่นทั้งหมด" />
            <DivFlex>
                    {
                        promotionFebruary.squre.reverse().slice(0, 2).map((item, index) => (
                            <div key={index} >
                                <Link href="/m/promotion">
                                    <Box>
                                        <PicBox src={item.img} alt={item.alt}/>
                                    </Box>
                                </Link>
                            </div>
                        ))
                    }
            </DivFlex>
        </Container>
    )
}

const Container = styled.section`
    width: 100%;
    height: fit-content;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const DivTitle = styled.div`
    width: 95%;
    height: auto;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: grey;
`

const DivFlex = styled.div`
    width: 95%;
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