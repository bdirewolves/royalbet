import styled from "styled-components";
import TitleGame from "@/components/_reduce/TitileGame";
import HorizontalBox from "@/components/_reduce/HorizontalBox";
import { ContainerGameSection } from "@/components/_reduce/Reduce"
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

interface IProvider {
    id: number;
    name: string;
    wallet_code: string;
    type?: string;
    provider_id: string;
}

export default function GameCasino(){
    const [ providers, setProviders ] = useState<IProvider[]>([])
    const [ text, setText ] = useState<number>(0)

    const fetchProviderCard = async () => {
        try {
            const tmp = await axios.get(`https://backoffice.royalbet65.com/v1/api/partner/providers`).then((res) => res.data.data)
            const slots = tmp.filter((item: IProvider) => item.type == "live")
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
            <TitleGame header="เกมส์คาสิโน" subheader=""/>
            <GridBox>
                {
                    providers.map((item ,index) => (
                        <HorizontalBox key={index} bgblock namegame={item.name} provider={item.provider_id} imggame={`assets/img/icon/providers/casino/${item.provider_id}.png`}/>
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

    @media (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
