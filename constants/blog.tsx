import type { ReactNode } from "react";
import styled from "styled-components";

interface IContent {
    title: string;
    content: string;
    img: string;
}
export interface IBlogContent {
    title: string;
    subtitle: string;
    img: string;
    img_alt: string;
    img_desc: string;
    slug: string;
    content: IContent[]
}

export const blogContent: IBlogContent[] = [
    {
        title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน 1",
        subtitle: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        img: "/assets/img/knowhow/knowhow1-d.png",
        img_alt: "",
        img_desc: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!1",
        slug: "สวัสดี",
        content: [
            {
                title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at dicta numquam accusamus ratione consequatur dolore enim fuga a ex.",
                img: "/assets/img/blog/blog1.jpg"
            },
            {
                title: "บาคาร่า ทำเงินจริงหรอ ? เล่นยังไงให้เหมือน เทพจัดสรร",
                content: "",
                img: "/assets/img/blog/blog2.jpg"
            },
            {
                title: "จะแดงหรือน้ำเงิน อ่านยังไง ให้เจ้าขอถอย จากเซียนบาระดับโลก",
                content: "",
                img: "/assets/img/blog/blog3.jpg"
            },
            {
                title: "เกมบาคาร่า สายฟ้า ออนไลน์ เขาเหล่านั้นมองเห็น วิธีการทำเงินจริงหรอ?",
                content: "",
                img: "/assets/img/blog/blog4.jpg"
            },
        ]
    },
    {
        title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน 2",
        subtitle: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        img: "/assets/img/knowhow/knowhow2-d.png",
        img_alt: "",
        img_desc: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        slug: "สวัสดีปี",
        content: [
            {
                title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at dicta numquam accusamus ratione consequatur dolore enim fuga a ex.",
                img: "/assets/img/blog/blog1.jpg"
            },
            {
                title: "บาคาร่า ทำเงินจริงหรอ ? เล่นยังไงให้เหมือน เทพจัดสรร",
                content: "",
                img: "/assets/img/blog/blog2.jpg"
            },
            {
                title: "จะแดงหรือน้ำเงิน อ่านยังไง ให้เจ้าขอถอย จากเซียนบาระดับโลก",
                content: "",
                img: "/assets/img/blog/blog3.jpg"
            },
            {
                title: "เกมบาคาร่า สายฟ้า ออนไลน์ เขาเหล่านั้นมองเห็น วิธีการทำเงินจริงหรอ?",
                content: "",
                img: "/assets/img/blog/blog4.jpg"
            },
        ]
    },
    {
        title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน 3",
        subtitle: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        img: "/assets/img/knowhow/knowhow3-d.png",
        img_alt: "",
        img_desc: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        slug: "สวัสดีปีใหม่",
        content: [
            {
                title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at dicta numquam accusamus ratione consequatur dolore enim fuga a ex.",
                img: "/assets/img/blog/blog1.jpg"
            },
            {
                title: "บาคาร่า ทำเงินจริงหรอ ? เล่นยังไงให้เหมือน เทพจัดสรร",
                content: "",
                img: "/assets/img/blog/blog2.jpg"
            },
            {
                title: "จะแดงหรือน้ำเงิน อ่านยังไง ให้เจ้าขอถอย จากเซียนบาระดับโลก",
                content: "",
                img: "/assets/img/blog/blog3.jpg"
            },
            {
                title: "เกมบาคาร่า สายฟ้า ออนไลน์ เขาเหล่านั้นมองเห็น วิธีการทำเงินจริงหรอ?",
                content: "",
                img: "/assets/img/blog/blog4.jpg"
            },
        ]
    },
    {
        title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน 4",
        subtitle: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        img: "/assets/img/knowhow/knowhow4-d.png",
        img_alt: "",
        img_desc: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        slug: "สวัสดีปีใหม่",
        content: [
            {
                title: "เทคนิคการเล่นบาคาร่า เล่นยังไงให้เก่งเหมือนเซียน",
                content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at dicta numquam accusamus ratione consequatur dolore enim fuga a ex.",
                img: "/assets/img/blog/blog1.jpg"
            },
            {
                title: "บาคาร่า ทำเงินจริงหรอ ? เล่นยังไงให้เหมือน เทพจัดสรร",
                content: "",
                img: "/assets/img/blog/blog2.jpg"
            },
            {
                title: "จะแดงหรือน้ำเงิน อ่านยังไง ให้เจ้าขอถอย จากเซียนบาระดับโลก",
                content: "",
                img: "/assets/img/blog/blog3.jpg"
            },
            {
                title: "เกมบาคาร่า สายฟ้า ออนไลน์ เขาเหล่านั้นมองเห็น วิธีการทำเงินจริงหรอ?",
                content: "",
                img: "/assets/img/blog/blog4.jpg"
            },
        ]
    },
]