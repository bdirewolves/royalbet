import Navbar from "./navbar"
import Footer from "./footer"
import type { ReactNode } from "react"
import NavbarMobile from "./navbarMobile"
import Chat from "./chat"

export default function Layouts({ children }: { children: ReactNode }) {
    return(
        <>
            <Navbar />
            <NavbarMobile />
            <Chat />
                {children}
            <Footer />
        </>
    )
}