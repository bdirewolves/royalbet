import Titletype from "@/components/_reduce/Divtitle";
import { BlogContent } from "@/constants/blog";
import Link from "next/link";
import styled from "styled-components";
import BlogupgateSection from "../../mobile/home/blogupgateSection";
import { Container } from "@/components/_reduce/Reduce";

export default function BlogSection() {
    return(
        <Container>
            <Titletype header="BLOG" subhead="บทความทั้งหมด" />
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
        </Container>
    )
}

// const Container = styled.section`
//     width: 100%;
//     height: fit-content;
//     max-width: 744px;

//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     gap: 10px;

//     @media (min-width: 1280px) {
//         max-width: 1280px;
//     }

//     @media (min-width: 1440px) {
//         max-width: 1440px;
//     }
// `



const Box = styled.div`
    width: 95%;
    height: auto;
    aspect-ratio: 300/179;
    max-width: 650px;
`

const PicBox = styled.img`
    width: 100%;
    height: 100%;
`






