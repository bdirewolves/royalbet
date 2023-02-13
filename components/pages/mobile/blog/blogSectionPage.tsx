import Titletype from "@/components/_reduce/Divtitle";
import { Container, FixWidth, PicBox} from "@/components/_reduce/Reduce";
import { BlogContent } from "@/constants/blog";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import BlogupgateSection from "../home/blogupgateSection";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function BlogSectionPage() {

    const [ active, setActive ] = useState(false)
    return(
        <Container>
            <FixWidth>
                <DivFlexRe>
                    <Titletype header="BLOG" subhead="บทความทั้งหมด" />
                    <DivFlexRow>
                        <PlusIcon onClick={() => setActive(!active)}/>
                        <Box isActive={active} >
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
                        <DivBlogContent isActive={active} isDeactive={!active}>
                            <BlogupgateSection />
                        </DivBlogContent>
                    </DivFlexRow>
                </DivFlexRe>
            </FixWidth>
        </Container>
    )
}

const PlusIcon = styled(FaPlus)<{ isActive?: boolean }>`
    font-size: 40px;

    position: absolute;
    right: 0;
    top: 0;

    margin: 0;
    padding: 0;

    ${props => props.isActive && styled(FaMinus)`
        transition: ease-in-out 500ms;
    `}
    
`

const Box = styled.div<{ isActive?: boolean }>`
    width: 100%;
    height: auto;
    aspect-ratio: 300/179;
    max-width: 650px;
    margin: 0 auto;
    
    overflow: hidden;

    display: block;
    ${props => props.isActive && `
        width: 0%;
    `}
`

const DivBlogContent = styled.div<{ isActive?: boolean, isDeactive?: boolean }>`
    width: 0%;
    height: auto;

    overflow: hidden;
    ${props => props.isDeactive && `
        width: 0px;

    `}

    ${props => props.isActive && `
        width: 100%;
    `}
`

const DivFlexRow = styled.div`
    width: 100%;
    height: auto;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
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