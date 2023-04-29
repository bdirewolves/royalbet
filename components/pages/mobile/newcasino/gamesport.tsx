import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import Boxsquares from "@/components/_reduce/Boxsquares";
import { ContainerGameSection } from "@/components/_reduce/Reduce"
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface IProvider {
    id: number;
    name: string;
    wallet_code: string;
    type?: string;
}

export default function GameSport(){
    const [ providers, setProviders ] = useState<IProvider[]>([])
    const [ text, setText ] = useState<number>(0)

    const fetchProviderCard = async () => {
        try {
            const tmp = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
            const slots = tmp.filter((item: IProvider) => item.type == "sport")
            setProviders(slots)
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error as string,
                icon: "error",
                timer: 1500
            })
        }
    }

    useEffect(() => {
        console.log(text)
    }, [text])

    useEffect(() => {
        fetchProviderCard()
    }, [])
    return(
        <ContainerGameSection>
            <TitleGame header="กีฬา" subheader=""/>
            <GridBox>
                {
                    providers.map((item, index) => (
                        <Boxsquares key={index} bgblock namegame={item.name} imggame={`/assets/img/icon/providers/sport/${item.name}.png`}/>
                    ))
                }
            </GridBox>
        </ContainerGameSection>
    )
}

const GridBox = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
