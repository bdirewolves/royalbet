import styled from "styled-components";
import { useState } from "react";
import { BlogContent } from "@/constants/blog";
import { Container, FixWidth } from "@/components/_reduce/Reduce";

export default function BlogupgateSection() {
    const [ active, setActive ] = useState(0)

    const handleActive = (index: number) => {
        if(active == index) {
            setActive(0)
        }else {
            setActive(index)
        }
    }

    return(
        <Container>
                <DivFlex>
                    <DivText>
                        <Title>บทความ</Title>
                    </DivText>
                    <DivFlexContent>
                        {
                            BlogContent.reverse().slice(0, 2).map((item, index) => (
                                <DivBlogContent key={index}  isActive={active == index} onClick={() => handleActive(index)}>
                                    <DivContentBlog>
                                        <DivTextContentBlog>
                                            <TextContentBlog isActive={active === index}>
                                                {item.title}
                                            </TextContentBlog>
                                        </DivTextContentBlog>
                                    </DivContentBlog>
                                    <DivTextContentDetailBlog>
                                        {
                                            BlogContent.slice(0, 4).map((_item, index) => (
                                                <DivTextContentBlog1 key={index}>
                                                    <TextContentBlog1>
                                                            {_item.title}
                                                    </TextContentBlog1>
                                                </DivTextContentBlog1>
                                            ))
                                        }
                                    </DivTextContentDetailBlog>
                                </DivBlogContent>
                            ))
                        }
                    </DivFlexContent>
                    <GoldPic />
                </DivFlex>
        </Container>
    )
}

const DivFlex = styled.div`
    width: 100%;
    height: 302px;
    max-width: 650px;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;


    gap: 0px;

    border-radius: 0px 0px 10px 0px;
    background: #100F14;
    
    @media (min-width: 744px) {
        height: 386px;

        justify-content: flex-start;

        padding-top: 30px;
    }
`

const DivText = styled.div`
    width: 100%;
    height: 34px;

`

const Title = styled.h2`

    width: 87.5%;
    height: 34px;

    border-bottom: 1px solid white;

    font-size: 18px;    
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    text-align: left;


    padding: 2.5px 0px 0px 0px !important ;
    margin: 0px 0px 0px 10px !important ;

    color: #ECD559;

`

const DivFlexContent = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    gap: 2px;
    
`


const GoldPic = styled.div`
    display: none;

    width: 120px;
    height: 30px;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 19px 0px 10px;

    @media (min-width: 744px) {
        display: block;
    }
`


const DivContentBlog = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    transition: all ease-in-out 500ms;
`
const DivTextContentBlog = styled.div`
    width: 90%;
    height: 40px;
    max-width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

`
const DivTextContentBlog1 = styled.div`
    width: 100%;
    height: 40px;


    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

`

const TextContentBlog = styled.h2<{isActive: boolean}>`
    width: 100%;
    height: auto;
    
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: left;

    padding-left: 30px;

    transition: ease-in-out 500ms;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: rgba(255, 255, 255, 0.5);
    
    ${props => props.isActive && `
        color: #FFFFFF;
    `}
`
const TextContentBlog1 = styled.h3`
    width: 100%;
    height: auto;
    
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: left;

    padding-left: 20px;

    transition: ease-in-out 500ms;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    color: rgba(255, 255, 255, 0.5);
`

const DivBlogContent = styled.div<{ isActive?: boolean }>`

    width: 100%;
    height: 40px;

    max-height: auto;
    padding-top: 7px;

    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    transition: ease-in-out 500ms;

    cursor: pointer;

    overflow: hidden;

    ${props => props.isActive && `
        height: 200px;
    `}

`

const DivTextContentDetailBlog = styled.div<{ isActive?: boolean }>`

    width: 100%;
    height: 100%;
    max-height: 200px;

    margin-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: hidden;

    transition: ease-in-out 500ms;

    margin-bottom: 10px;
    
    background-color: #050505;
`

