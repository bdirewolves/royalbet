import styled from "styled-components";
import LottoHit from "./lottohit";
import CasinoHit from "./casinohit";
import SlotHit from "./slothit";
import CardHit from "./cardhit";
import FishHit from "./fishhit";


export default function GameHit(){
    return(
        <>
            <LottoHit />
            <CasinoHit />
            <SlotHit />
            <CardHit />
            <FishHit />
        </>
    )
}