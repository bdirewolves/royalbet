import Navbar from "./navbar"
import Footer from "./footer"
import { ReactNode, useState } from "react"
import NavbarMobile from "./navbarMobile"
import Chat from "./chat"

interface IModalPage {
    name: string;
    element: any;
}

export default function Layouts({ children }: { children: ReactNode }) {
    const [ modalPage, setModalPage ] = useState<IModalPage>({ name: "", element: null })
    return(
        <>
            <Navbar modalPage={modalPage} setModalPage={setModalPage} />
            <NavbarMobile />
            <Chat />
                {children}
            <Footer />
        </>
    )
}