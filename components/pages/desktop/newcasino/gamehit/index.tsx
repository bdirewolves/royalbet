import styled from "styled-components";
import CardHit from "./cardhit";
import CasinoHit from "./casinohit";
import FishHit from "./fishhit";
import LottoHit from "./lottohit";
import SlotHit from "./slothit";

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
