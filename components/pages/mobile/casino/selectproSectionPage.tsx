import TitletypePage from "@/components/_reduce/DivtitlePage";
import { Container, FixWidth } from "@/components/_reduce/Reduce";
import { casinoContent } from "@/constants/casino";
import { AuthContext } from "@/pages/_app";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs"
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
    const [ active, setActive ] = useState<string>("all")
    const { userAccess, userData, telnum } = useContext(AuthContext)
    const phone = typeof window !== "undefined" && localStorage.getItem("telnum")?.slice(1) || ""

    const [ openTypeList, setOpenTypeList ] = useState(false)
    const [ openGameList, setOpenGameList ] = useState(false)
    const [ openProviderList, setOpenProviderList ] = useState(false)
    const [ typeList, setTypeList ] = useState<string[]>([])

    const settings = {
        dots: true,
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 744,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
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

    // setOpenTypeList(true)
    // setTypeList(["All Game Type", "Slot", "Fishing", "Arcade", "Table", "Bingo", "Lotto"])

    //TODO check casino type
    const checkSteper = async (type: string) => {
        switch(type) {
            case "live":
                {
                    setType(type)
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") )
                    setOpenGameList(true)
                    setOpenProviderList(false)
                    setOpenTypeList(false)
                    setGameLists(find_lobby)
                    break;
                }
            case "sport":
                {
                    setType(type)
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") )
                    setOpenGameList(true)
                    setOpenProviderList(false)
                    setOpenTypeList(false)
                    setGameLists(find_lobby)
                    break;
                }
            case "esport":
                {
                    setType(type)
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") )
                    setOpenGameList(true)
                    setOpenProviderList(false)
                    setOpenTypeList(false)
                    setGameLists(find_lobby)
                    break;
                }
            case "lotto":
                {
                    setType(type)
                    const tmp: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/type/${type}`).then((res) => res.data.data.gameList.flatMap((inner: any) => inner))
                    const find_lobby = tmp.filter((item) => item.name.includes("lobby") || item.name.includes("Lobby") || item.name.includes("Live") || item.name.includes("live") )
                    setOpenGameList(true)
                    setOpenProviderList(false)
                    setOpenTypeList(false)
                    setGameLists(find_lobby)
                    break;
                }
            
            case "slot":
                {   
                    setType(type)
                    const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
                    const filters = tmp_providers.filter((item) => item.type === type)
                    setProviderLists(filters) // set Cetegory game etc. slot fishing arcade
                    setOpenProviderList(true) // Display Provider list
                    setOpenGameList(false) // Hide game list before select provider
                    setProviders("") // Set default provider
                    break;
                }
            case "card":
                {
                    setType(type)
                    const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
                    const filters = tmp_providers.filter((item) => item.type === type)
                    setProviderLists(filters) // set Cetegory game etc. slot fishing arcade
                    setOpenProviderList(true) // Display Provider list
                    setOpenGameList(false) // Hide game list before select provider
                    setProviders("") // Set default provider
                    break;
                }
            case "keno":
                {
                    setType(type)
                    const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
                    const filters = tmp_providers.filter((item) => item.type === type)
                    setProviderLists(filters) // set Cetegory game etc. slot fishing arcade
                    setOpenProviderList(true) // Display Provider list
                    setOpenGameList(false) // Hide game list before select provider
                    setProviders("") // Set default provider
                    break;
                }
            case "fishing":
                {
                    setType(type)
                    const tmp_providers: IProviders[] = await axios.get(`${process.env.API_URL}/gfservice/provider`).then((res) => res.data.data)
                    const filters = tmp_providers.filter((item) => item.type === type)
                    setProviderLists(filters) // set Cetegory game etc. slot fishing arcade
                    setOpenProviderList(true) // Display Provider list
                    setOpenGameList(false) // Hide game list before select provider
                    setProviders("") // Set default provider
                    break;
                }
            
        }
    }

    const selectProvider = async () => {
        if(providers != "") {
            const games: IGames[] = await axios.get(`${process.env.API_URL}/gfservice/gamelist/${providers}`).then((res) =>res.data.data.gameList)
            setGameLists(games)
            setOpenGameList(true)
            setOpenTypeList(true)
        }
    }

    useEffect(() => {
        fetchProvider()
    }, [type])

    useEffect(() => {
        fetchGame()
        setPages({ page: 1, limit: 24 })
        console.log(providers)
    }, [providerLists])

    useEffect(() => {
        selectProvider()
    }, [providers])

    useEffect(() => {
        fetchProvider()
    }, [])

    return(
        <Container>
            <FixWidth>

                {/* // Select Category */}

                <BoxContainer>
                    <BoxNavigate style={{ width: "55px" }}>
                        <AiFillCaretLeft color="#959595" size={26} />
                    </BoxNavigate>

                    {/*//! Can do carousel ?  */}
                    <DivGridType id="type">

                            <SliderContainer>
                                <Slider {...settings}>
                                    <div>
                                        <DivBoxType order={1}>
                                            <BoxType isActive={type === "live"} onClick={() => checkSteper("live")}>
                                                <BoxTypeSpan>casino</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={2}>
                                            <BoxType isActive={type === "sport"} onClick={() => checkSteper("sport")}>
                                                <BoxTypeSpan>sport</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={3}>
                                            <BoxType isActive={type === "slot"} onClick={() => checkSteper("slot")}>
                                                <BoxTypeSpan>slot</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={4}>
                                            <BoxType isActive={type === "esport"} onClick={() => checkSteper("esport")}>
                                                <BoxTypeSpan>e-sport</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={5}>
                                            <BoxType isActive={type === "lotto"} onClick={() => checkSteper("lotto")}>
                                                <BoxTypeSpan>lottery</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={6}>
                                            <BoxType isActive={type === "card"} onClick={() => checkSteper("card")}>
                                                <BoxTypeSpan>card</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={7}>
                                            <BoxType isActive={type === "keno"} onClick={() => checkSteper("keno")}>
                                                <BoxTypeSpan>keno</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                    <div>
                                        <DivBoxType order={8}>
                                            <BoxType isActive={type === "fishing"} onClick={() => checkSteper("fishing")}>
                                                <BoxTypeSpan>fishing</BoxTypeSpan>
                                            </BoxType>
                                        </DivBoxType>
                                    </div>
                                </Slider>
                            </SliderContainer>

                    </DivGridType>

                    <BoxNavigate style={{ width: "55px" }}>
                        <AiFillCaretRight color="#959595" size={26} />
                    </BoxNavigate>
                </BoxContainer>

                {/* Select Provider */}
                {
                    openProviderList && (
                        <DivGridPro>
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

                {/* Game Type */}

                {
                    openTypeList &&
                    (
                        <GameTypeList>
                            <GameType isActive={active == "all" ? "true" : "false"} onClick={() => setActive("all")}>
                                <span>All Game</span>
                            </GameType>
                            <GameType isActive={active == "slot" ? "true" : "false"} onClick={() => setActive("slot")}>
                                <span>Slot</span>
                            </GameType>
                            <GameType isActive={active == "fish" ? "true" : "false"} onClick={() => setActive("fish")}>
                                <span>Fishing</span>
                            </GameType>
                            <GameType isActive={active == "arcade" ? "true" : "false"} onClick={() => setActive("arcade")}>
                                <span>Arcade</span>
                            </GameType>
                            <GameType isActive={active == "table" ? "true" : "false"} onClick={() => setActive("table")}>
                                <span>Table</span>
                            </GameType>
                            <GameType isActive={active == "bingo" ? "true" : "false"} onClick={() => setActive("bingo")}>
                                <span>Bingo</span>
                            </GameType>
                            <GameType isActive={active == "lotto" ? "true" : "false"} onClick={() => setActive("lotto")}>
                                <span>Lotto</span>
                            </GameType>
                        </GameTypeList>
                    )
                }

                    {/* Game List */}
                    {
                        openGameList &&
                        (
                            <ContainerDivFlexGame>
                                <LeftDivFlexGame>
                                    <AiFillCaretLeft color="#959595" size={26} />
                                </LeftDivFlexGame>
                                    <DivFlexGame>
                                        <DivTitle>
                                            <Title>
                                                <TextTitle>{type}</TextTitle>
                                            </Title>
                                            <LineTitle />
                                            <PageControl>
                                                <BackBtn onClick={() => pages.page != 1 && setPages({ page: pages.page-1, limit: 24 })}><AiOutlineCaretLeft size={14} /></BackBtn>
                                                <CurrentPage>{ pages.page }/{ Math.floor(gameLists.length / pages.limit) == 0 ? "1" : Math.floor(gameLists.length / pages.limit) }</CurrentPage>
                                                <NextBtn onClick={() => (gameLists.length > 24 && pages.page != Math.floor(gameLists.length / pages.limit)) && setPages({ page: pages.page+1, limit: 24 })}><AiOutlineCaretRight size={14} /></NextBtn>
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
                                                        <GoldPic>
                                                            <BsFillPlayFill color="#000" size={20} />
                                                        </GoldPic>
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
                                                        <GoldPic>
                                                            <BsFillPlayFill color="#000" size={20} />
                                                        </GoldPic>
                                                    </GridFr>
                                                ))
                                            }
                                        </DivGrid>
                                    </DivFlexGame>

                                <RightDivFlexGame>
                                    <AiFillCaretRight color="#959595" size={26} />
                                </RightDivFlexGame>

                            </ContainerDivFlexGame>
                        )
                    }

            </FixWidth>
        </Container>
    )
}

const SliderContainer = styled.div`
    width: 100%;
    height: 135px;
`

const DivFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const LeftDivFlexGame = styled.div`
    border-radius: 5px;
    width: 55px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 1439px) {
        display: none;
    }
`

const RightDivFlexGame = styled.div`
    border-radius: 5px;
    width: 55px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);

    @media (max-width: 1439px) {
        display: none;
    }
`

const ContainerDivFlexGame = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
`

const GameType = styled.div<{ isActive: string }>`
    border: 1px solid #100F14;
    border-radius: 5px;
    min-width: 85px;
    width: 93px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    background-color: #100F14;
    color: #fff;
    
    transition-duration: 300ms;
    
    cursor: pointer;

    &:hover {
        border: 1px solid #ECD559;
    }

    ${props => props.isActive == "true" ?
        `
            transition-duration: 300ms;
            border: none;
            background: linear-gradient(90deg, #F6E79A 0%, #D2BB6E 100%);
            color: #000;
        `
    : undefined
    }
`

const GameTypeList = styled.div`
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 650px;
    width: 100%;
    height: auto;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    overflow-x: scroll;

    background: rgba(255, 255, 255, 0.1);

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 1280px) {
        max-width: 1310px;
    }
`

const BoxContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`

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
    padding: 10px;
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
    /* min-width: 160px; */
    width: auto;
    height: auto;
    padding: 0px 10px;
    z-index: 2;
`

const LineTitle = styled.div`
    width: 100%;
    height: 1px;
    background: rgba(149, 149, 149, 0.25);

    z-index: 0;
`
const TextTitle = styled.span<{ header?: string}>`
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
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`

const DivGridType = styled.div`
    margin: auto;
    width: 100%;
    height: auto;
    max-width: 650px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    overflow-x: scroll;

    gap: 10px;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 1280px) {
        max-width: 1164.44px;

        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
    }
`

const BoxNavigate = styled.div`
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
    
    &:hover{
        border: 1px solid #ECD559;
    }

    @media (max-width: 1439px) {
        display: none;
    }
`

const DivBoxType = styled.div<{ order: number }>`
    padding-top: 5px;
    padding-bottom: 5px;

    width: 100%;
    height: 100%;

    ${props => props.order == 1 && `
        padding-left: 20px;
        padding-right: 5px;

        @media (min-width: 744px) {
            padding-left: 0px;
            padding-right: 5px;
        }
    `}
    ${props => props.order == 2 && `
        padding-left: 5px;
        padding-right: 20px;

        @media (min-width: 744px) {
            padding-left: 5px;
            padding-right: 5px;
        }
    `}
    ${props => props.order == 3 && `
        padding-left: 20px;
        padding-right: 5px;

        @media (min-width: 744px) {
            padding-left: 5px;
            padding-right: 0px;
        }
    `}
    ${props => props.order == 4 && `
        padding-left: 5px;
        padding-right: 20px;

        @media (min-width: 744px) {
            padding-left: 0px;
            padding-right: 5px;
        }
    `}
    ${props => props.order == 5 && `
        padding-left: 20px;
        padding-right: 5px;

        @media (min-width: 744px) {
            padding-left: 5px;
            padding-right: 5px;
        }
    `}
    ${props => props.order == 6 && `
        padding-left: 5px;
        padding-right: 20px;
        
        @media (min-width: 744px) {
            padding-left: 5px;
            padding-right: 0px;
        }
    `}
    ${props => props.order == 7 && `
        padding-left: 20px;
        padding-right: 5px;

        @media (min-width: 744px) {
            padding-left: 0px;
            padding-right: 5px;
        }
    `}
    ${props => props.order == 8 && `
        padding-left: 5px;
        padding-right: 20px;

        @media (min-width: 744px) {
            padding-left: 5px;
            padding-right: 5px;
        }
    `}
`

const BoxType = styled.div<{ isActive?: boolean }>`

    border: 1px solid #100F14;

    min-width: 135px;
    width: 100%;
    height: 49px;
    aspect-ratio: 92/47;
    
    border-radius: 5px;
    
    margin: 0 auto;
    
    background: #100F14;
    color: #fff;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 300ms;
    
    cursor: pointer;

    ${props => props.isActive == true ? `
        border: 1px solid #ECD559;
        transition-duration: 300ms;
        border: none;
        background: linear-gradient(90deg, #F6E79A 0%, #D2BB6E 100%);
        color: #000 !important;
    `: undefined}
    
    &:hover{
        border: 1px solid #ECD559;
    }

    @media (min-width: 744px) {
        aspect-ratio: 210/69;
    }
`

const DivGridPro = styled.div`
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    height: auto;
    max-width: 650px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
    align-items: center;

    gap: 10px;

    overflow-x: hidden;
    
    background: rgba(255, 255, 255, 0.1);
    
    &::-webkit-scrollbar {
        display: none;
    }

    /* @media (min-width: 480px) {
        grid-template-columns: repeat(4, 1fr);
    } */

    @media (min-width: 744px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1280px) {
        max-width: 1164.44px;
        grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 1440px) {
        max-width: 1310px;
        grid-template-columns: repeat(8, 1fr);
    }
`

const BoxPro = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    border: 1px solid #000;
    min-width: 85px;
    width: 100%;
    height: 36px;
    aspect-ratio: 86/28;

    border-radius: 5px;

    /* margin: auto; */

    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: 300ms;

    background: #100F14;

    ${props => props.isActive && `border: 1px solid #ECD559;`}
    
    &:hover{
        border: 1px solid #ECD559;
    }

    @media (min-width: 744px) {
        height: 40px
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
    padding: 0 10px;
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
    aspect-ratio: 145/103;

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

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 5px 0px;

    z-index: 3;
`
