import React from 'react'
import styled from 'styled-components'
import {AiFillStar} from "react-icons/ai"
import { IoIosSettings } from "react-icons/io";

export default function Main() {
  return (
    <Modal>
        <BgGrey />
        <DivFlexHead>
            <TextHead>โปรไฟล์</TextHead>
        </DivFlexHead>
        <DivFlexinfo>
            <Boxinfo />
            <Textinfo>Username</Textinfo>
        </DivFlexinfo>
        <Gridmenu>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <AiFillStar size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>ข้อมูลส่วนตัว</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <AiFillStar size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>เปลี่ยนรหัส</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <AiFillStar size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>สถิติการเล่น</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <AiFillStar size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>แนะนำเพือน</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <AiFillStar size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>โปรโมชั่น</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
            <GridFr>
                <DivFlexMenu>
                    <BoxMenu>
                        <IoIosSettings size={32} color="#9DA3AD" />
                    </BoxMenu>
                    <TextMenu>ตั้งค่า</TextMenu>
                </DivFlexMenu>
                <GoldLine />
            </GridFr>
        </Gridmenu>
        <DivFlexLogout>
            <TextLogout>ออกจากระบบ</TextLogout>
        </DivFlexLogout>
    </Modal>
  )
}

const Modal = styled.div`
    width: 320px;
    height: 450px;

    position: relative;

    position: fixed;
    top: 50px;
    right: 20vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 0px 0px 5px 5px;

    gap: 10px;
    
    background-color: #000000;
    color: #000;
    z-index: 9999;
`

const BgGrey = styled.div`
    width: 320px;
    height: 84px;

    position: absolute;
    left: 0px;
    top: 0px;

    z-index: 1;

    background: #121116;
`

const DivFlexHead = styled.div`
    width: 100%;
    height: 37px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const TextHead = styled.p`
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9DA3AD;
`

const DivFlexinfo = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    z-index: 2;
`

const Boxinfo = styled.div`
    width: 80px;
    height: 80px;

    border-radius: 90px;

    background-color: grey;
`

const Textinfo = styled.p`
    font-family: 'Sukhumvit Set';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const Gridmenu = styled.div`
    width: 85%;
    height: fit-content;

    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    justify-content: center;
    align-items: center;
    
    gap: 10px;
`

const GridFr = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 14px;
`

const DivFlexMenu = styled.div`
    width: 100%;
    height: 49px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2px;
`

const BoxMenu = styled.div`
    width: 32px;
    height: 32px;
`

const TextMenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.8);
`

const GoldLine = styled.div`
    width: 40px;
    height: 2px;
    
    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const DivFlexLogout = styled.div`
    width: 86px;
    height: 24px;

    position: absolute;
    bottom: 10px;
    right: 10px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 5px;
`

const TextLogout = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    letter-spacing: -0.011em;

    color: rgba(255, 255, 255, 0.8);
`