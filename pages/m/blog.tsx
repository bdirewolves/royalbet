import styled from "styled-components";
import Head from "next/head";
import BlogSectionPage from "@/components/pages/mobile/blog/blogSectionPage";
import BlogMainSectionPage from "@/components/pages/mobile/blog/blogmainSectionPage";
import NewsSection from "@/components/pages/mobile/home/newsSection";
import CheckDevice from "@/services";

export default function BlogPage() {
    CheckDevice()
    return(
        <>
            <Head>
                <title>Home | Vincebet</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Background src="/assets/img/BG.jpg" />
            <Content>
                <BlogSectionPage />
                <BlogMainSectionPage />
                <NewsSection />
            </Content>
        </>
    )
}

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

const Content = styled.main`
    width: 100%;
    height: auto;
    max-width: 744px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
    margin: auto;
    padding-bottom: 0px;
` 