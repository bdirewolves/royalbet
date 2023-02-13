import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth, PicBox} from "@/components/_reduce/Reduce";
import { BlogContent } from "@/constants/blog";
import Link from "next/link";
import styled from "styled-components";
import BlogupgateSection from "../home/blogupgateSection";

export default function BlogSectionPage() {
    return(
        <Container>
            <FixWidth>
                <DivFlexRe>
                    <Titletype header="BLOG" subhead="บทความทั้งหมด" />
                    <DivFlexRow>
                        <Box>
                                {
                                    BlogContent.reverse().slice(0, 1).map((item, index) => (
                                        <div key={index} >
                                            <Link href="/m/blog">
                                                <Box>
                                                    <PicBox src={item.img} />
                                                </Box>
                                            </Link>
                                        </div>
                                    ))
                                }
                        </Box>
                        <BlogupgateSection />
                    </DivFlexRow>
                </DivFlexRe>
            </FixWidth>
        </Container>
    )
}

const Box = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 300/179;
    max-width: 650px;
    
`

const DivFlexRow = styled.div`
    width: 100%;
    height: fit-content;

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

const DivFlexRe = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        flex-direction: column-reverse;
    }
`