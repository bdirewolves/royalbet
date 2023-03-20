import Navbar from "./navbar"
import Footer from "./footer"
import { ReactNode, useContext, useEffect, useState } from "react"
import NavbarMobile from "./navbarMobile"
import Chat from "./chat"
import { AuthContext } from "@/pages/_app"
import Swal from "sweetalert2"

interface IModalPage {
    name: string;
    element: any;
}

export default function Layouts({ children }: { children: ReactNode }) {
    const { userAccess, userData } = useContext(AuthContext)
    const [ modalPage, setModalPage ] = useState<IModalPage>({ name: "", element: null })
    const [ showHamburger, setShowHamburger ] = useState<boolean>(false)
    const access = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("access") as string) : null;

    return(
        <>
            <Navbar modalPage={modalPage} setModalPage={setModalPage} showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
            <NavbarMobile modalPage={modalPage} setModalPage={setModalPage} showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
            <Chat />
                {children}
            <Footer />
        </>
    )
}