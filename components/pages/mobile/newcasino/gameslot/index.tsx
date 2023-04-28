import styled from "styled-components";
import GameSlotProvider from "./gameslotprovider";
import { ReactNode, useState } from "react";

export default function GameSlotFull(){

    const [ provider , setProvider ] = useState<ReactNode>()

    return (
        <>
            <GameSlotProvider provider={provider} SetProvider={setProvider} />
            
            {provider}
        </>
    )
}