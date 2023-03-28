import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { casinoContent } from "@/constants/casino";
import { AuthContext } from "@/pages/_app";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Swal from "sweetalert2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProviders {
    id: number;
    name: string;
    wallet_code: string;
    type: string | any;
    createdAt: string;
}

interface IGames {
    id: number;
    name: string;
    game_code: string;
    pic_url: string;
    provider_id: string;
}

interface ILimit {
    page: number;
    limit: number;
}

export default function SelectProSectionPage() {

    const [ type, setType ] = useState<string>("")
    const [ providers, setProviders ] = useState<string>("")
    const [ providerLists, setProviderLists ] = useState<IProviders[]>([])
    const [ gameLists, setGameLists ] = useState<IGames[]>([])
    const [ pages, setPages ] = useState<ILimit>({ page: 1, limit: 24 })
    const router = useRouter()
    const { userAccess, userData, telnum } = useContext(AuthContext)
    const phone = typeof window !== "undefined" && localStorage.getItem("telnum")?.slice(1) || ""

    const handleOnError = (event: any, name: string) => {
        event.target.src =  `https://placehold.co/210x150/black/white/jpg/?text=${name}`;
    }

    const fetchProvider = async () => {
        try {
            const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
            const filters = tmp_providers.filter((item) => item.type === type)
            setProviderLists(filters)  
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchGame = async () => {
        try {

            //? Case Live
            if(type === "live") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") )
                    if (find_lobby) {
                        const uniqueGames = find_lobby.filter((game, index, array) => {
                            return array.findIndex(t => t.provider_id === game.provider_id) === index;
                        });
                       setGameLists(uniqueGames)
                    }
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    const tmp_1 = games.find((item) => item.name.includes("lobby") || item.name.includes("Lobby"))
                    if(!tmp_1) {
                        const tmp_2 = games.find((item) => item.name.includes("Live") || item.name.includes("live"))
                        !!tmp_2 && setGameLists([tmp_2])
                    }else {
                        setGameLists([tmp_1])
                    }
                }
            }
            //? Case Slot
            else if(type === "slot") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    setGameLists(tmp)
                    
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    setGameLists(games)
                        
                }
            }

            //? Case Sport
            else if(type === "sport") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") || item.name.includes("PC") || item.name.includes("pc") || item.name.includes("book") )
                    if (find_lobby) {
                        const uniqueGames = find_lobby.filter((game, index, array) => {
                            return array.findIndex(t => t.provider_id === game.provider_id) === index;
                        });
                       setGameLists(uniqueGames)
                    }
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    const tmp_1 = games.find((item) => item.name.includes("lobby") || item.name.includes("Lobby"))
                    if(!tmp_1) {
                        const tmp_2 = games.find((item) => item.name.includes("Live") || item.name.includes("live"))
                        if(!tmp_2) {
                            const tmp_3 = games.find((item) => item.name.includes("PC") || item.name.includes("pc"))
                            tmp_3 && setGameLists([tmp_3])
                        }else{
                            tmp_2 && setGameLists([tmp_2])
                        }
                    }else {
                        setGameLists([tmp_1])
                    }
                }
            }
            //? Case ESport
            else if(type === "esport") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    setGameLists(tmp)
                    
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    setGameLists(games)
                        
                }
            }
            //? Case Lotto | Keno
            else if(type === "lotto") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    setGameLists(tmp)
                    
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    setGameLists(games)
                        
                }
            }
            //? Case Card
            else if(type === "card") {
                if(providers === "all") {
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    setGameLists(tmp)
                }else{
                    const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
                    setGameLists(games)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const launchGame = async (game_code: string, provider: string) => {
        try {
            const wallet_code = providerLists.find((item: any) => item.name == provider)?.wallet_code
            
            //! if not loged in
            if(phone) {
                await axios.post(`${process.env.API_URL}/gfservice/launch`,
                    {
                        player_name: phone,
                        game_code: game_code,
                        vendor_code: wallet_code
                    }
                ).then((res) => {
                    const { data } = res.data
                    if(data.game_url.status === 1) {
                        const { url } = data.game_url.data
                        window.location.href = url
                    }else {
                        Swal.fire({
                            title: "Info",
                            text: data.game_url.message,
                            icon: "info",
                            timer: 1000,
                            showConfirmButton: false
                        })
                    }
                })
            }else {
                Swal.fire({
                    title: "Info",
                    text: "กรุณาเข้าสู่ระบบ",
                    icon: "info",
                    timer: 1000,
                    showConfirmButton: false
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProvider()
    }, [type])

    useEffect(() => {
        fetchGame()
        setPages({ page: 1, limit: 24 })
        console.log(providers)
    }, [providers, providerLists])

    useEffect(() => {
        fetchProvider()
    }, [])

    return(
        <Container>
            <FixWidth>

                {/* // Select Category */}
                <DivGridType>
                    <BoxType isActive={type === "live"} onClick={() => setType("live")}>
                        <BoxTypeSpan>CASINO</BoxTypeSpan>
                    </BoxType>
                    <BoxType isActive={type === "sport"} onClick={() => setType("sport")}>
                        <BoxTypeSpan>SPORT</BoxTypeSpan>
                    </BoxType>
                    <BoxType isActive={type === "slot"} onClick={() => setType("slot")}>
                        <BoxTypeSpan>SLOT</BoxTypeSpan>
                    </BoxType>
                    <BoxType isActive={type === "esport"} onClick={() => setType("esport")}>
                        <BoxTypeSpan>E-SPORT</BoxTypeSpan>
                    </BoxType>
                    <BoxType isActive={type === "lotto"} onClick={() => setType("lotto")}>
                        <BoxTypeSpan>LOTTERY</BoxTypeSpan>
                    </BoxType>
                    <BoxType isActive={type === "card"} onClick={() => setType("card")}>
                        <BoxTypeSpan>CARD</BoxTypeSpan>
                    </BoxType>
                </DivGridType>

                {/* Select Provider */}
                {
                    type !== "" && (
                        <DivGridPro>
                            {/* <BoxPro isActive={providers === "all"} onClick={() => setProviders("all")}>
                                <BoxProSpan>
                                    TOTAL GAME
                                </BoxProSpan>
                            </BoxPro> */}

                            {
                                providerLists.map((item, index) => (
                                    <BoxPro key={index} isActive={providers === item.name} onClick={() => setProviders(item.name)}>
                                        <BoxProSpan>
                                            {item.name}
                                        </BoxProSpan>
                                    </BoxPro>
                                ))
                            }

                        </DivGridPro>
                    )
                }

                {/* Game List */}

                {
                    providers !== "" &&
                    (
                        <DivFlexGame>
                            <DivTitle>
                                <Title>
                                    <TextTitle>provider {type}</TextTitle>
                                </Title>
                                <LineTitle />
                                <PageControl>
                                    <BackBtn onClick={() => pages.page != 1 && setPages({ page: pages.page-1, limit: 24 })}><AiOutlineCaretLeft size={14} /></BackBtn>
                                    <CurrentPage>{ pages.page }/{ Math.floor(gameLists.length / pages.limit) == 0 ? "1" : Math.floor(gameLists.length / pages.limit) }</CurrentPage>
                                    <NextBtn onClick={() => gameLists.length > 24 && setPages({ page: pages.page+1, limit: 24 })}><AiOutlineCaretRight size={14} /></NextBtn>
                                </PageControl>
                            </DivTitle>


                            <DivGrid>

                                {
                                    gameLists.length >= 2 ? gameLists.slice(Math.floor((pages.page - 1) * pages.limit), Math.floor((pages.page - 1) * pages.limit + pages.limit)).map((item, index) => (
                                        <GridFr key={index} onClick={() => launchGame(item.game_code, item.provider_id)}>
                                            <DivPicPro>
                                                <PicPro loading="lazy" src={item.pic_url ? item.pic_url : `https://placehold.co/210x150/black/white?text=${item.provider_id}`} />
                                            </DivPicPro>
                                            <BoxText>
                                                {
                                                    type === "live" ?
                                                    `Lobby ${item.provider_id}`
                                                    :
                                                    item.name
                                                }
                                            </BoxText>
                                            <GoldPic />
                                        </GridFr>
                                    ))
                                    :
                                    gameLists.map((item, index) => (
                                        <GridFr key={index} onClick={() => launchGame(item.game_code, item.provider_id)}>
                                            <DivPicPro>
                                                <PicPro loading="lazy" src={item.pic_url ? item.pic_url : `https://placehold.co/210x150/black/white?text=${item.provider_id}`} />
                                            </DivPicPro>
                                            <BoxText>
                                                {
                                                    type === "live" ?
                                                    `Lobby ${item.provider_id}`
                                                    :
                                                    item.name
                                                }
                                            </BoxText>
                                            <GoldPic />
                                        </GridFr>
                                    ))
                                }

                            </DivGrid>
                        </DivFlexGame>
                    )
                }

            </FixWidth>
        </Container>
    )
}

const NextBtn = styled.button`
    cursor: pointer;
    width: 20px;
    aspect-ratio: 1/1;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
`

const BackBtn = styled.button`
    cursor: pointer;
    width: 20px;
    aspect-ratio: 1/1;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
`

const CurrentPage = styled.span`
    font-size: 12px;
    width: 35px;
    padding: 0 5px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
`

const PageControl = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
    gap: 7px;
    align-items: center;
`

const DivTitle = styled.div<{ ISqure?: boolean , Nm?: any }>`
    width: 100%;
    height: auto;
    aspect-ratio: 300/40;
    max-width: 650px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    overflow: hidden;

    @media (min-width: 1280px) {
        width: 100%;
        aspect-ratio: 1164.44/35.56;
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const Title = styled.div`
    min-width: 200px;
    width: auto;
    height: auto;
    padding: 0px 10px;
    background: #343434;
    z-index: 2;
`
const AllGame = styled.div`
    width: auto;
    height: auto;

    position: relative;
    padding: 1px 10px;

    border-radius: 5px;
    
    z-index: 1;
`

const LineTitle = styled.div`
    margin: 0 20px;
    width: 100%;
    height: 1px;
    background: #959595;

    z-index: 0;
`
const TextTitle = styled.h2<{ header?: string}>`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;

    text-transform: uppercase;

    color: #ECD559;

    ${props => props.header && `
        content: ${props.header} !important;
    `}
    
`

const BoxProSpan = styled.span`
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
`

const BoxTypeSpan = styled.span`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`

const DivGridType = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 2fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const BoxType = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    border: 1px solid #000;
    width: 100%;
    height: auto;
    aspect-ratio: 92/47;

    border-radius: 5px;

    margin: 0 auto;

    background: #100F14;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 300ms;

    ${props => props.isActive && `border: 1px solid #ECD559;`}
    
    &:hover{
        border: 1px solid #ECD559;
    }

    @media (min-width: 744px) {
        aspect-ratio: 210/69;
    }
`

const DivGridPro = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: flex;
    /* grid-template-columns: repeat(3, 3fr); */
    justify-content: flex-start;
    align-items: center;

    gap: 10px;

    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 744px) {
        /* grid-template-columns: repeat(4, 2fr); */
    }

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        /* grid-template-columns: repeat(8, 1fr); */
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const BoxPro = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    border: 1px solid #000;
    min-width: 150px;
    width: 150px;
    height: auto;
    aspect-ratio: 86/28;

    border-radius: 5px;

    /* margin: auto; */

    background: #100F14;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border 300ms;

    ${props => props.isActive && `border: 1px solid #ECD559;`}
    
    &:hover{
        border: 1px solid #ECD559;
    }
`

const BoxPro1 = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 86/28;

    border-radius: 5px;

    margin: auto;

    background-color: grey;

    @media (min-width: 744px) {
        display: none;
    }
`

const DivFlexGame = styled.div`
    width: 100%;
    height: auto;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 1280px) {
        max-width: 1164.44px;
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const DivGrid = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 6fr);
    justify-content: center;
    align-items: center;

    gap: 10px;

    @media (min-width: 744px) {
        grid-template-columns: repeat(3, 4fr);
    }

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 4fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const GridFr = styled.div`
    cursor: pointer;
    width: 100%;
    height: auto;
    aspect-ratio: 145/130;

    position: relative;
    overflow: hidden;

    border: 1px solid #959595;
    border-radius: 5px;

    @media (min-width: 744px) {
        aspect-ratio: 210/150;
    }
`

const DivPicPro = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 1;
`

const PicPro = styled.img`
    width: 100%;
    height: 100%;
`

const BoxText = styled.div`
    padding-left: 10px;
    width: 100%;
    height: auto;
    aspect-ratio: 145/17.26;

    position: absolute;
    left: 0;
    bottom: 0;

    z-index: 2;

    background: linear-gradient(180deg, #3E3E3E 0%, #100F14 100%);
`

const GoldPic = styled.div`
    width: 14%;
    height: auto;
    aspect-ratio: 20.71/17.26;

    position: absolute;
    right: 0;
    bottom: 0;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 5px 0px;

    z-index: 3;
`
