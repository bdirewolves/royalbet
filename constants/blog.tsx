
export interface IContent {
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

export const BlogContent: IBlogContent[] = [
    {
        title: "หัวข้อบทความ 1",
        subtitle: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!",
        img: "/assets/img/blog/blogbanner-m.png",
        img_alt: "",
        img_desc: "สูตรเดินไม้ แบบเซียนมาเก๊า เดินยังไงให้เจ้าเจ๊ง!!1",
        slug: "สวัสดี",
        content: [
            {
                title: "หัวข้อบทความ 1",
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