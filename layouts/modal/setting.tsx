import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';
import { TfiAngleLeft } from 'react-icons/tfi';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Setting(props: IProps) {
    
  return (
    <Modal>
        <BgGrey />
        <DivFlexHead>
            <TfiAngleLeft size={16}  color="Grey" onClick={() => props.setModalPage({ name: "", element: null })}/>
            <TextHead>ตั้งค่า</TextHead>
            <AiOutlineClose size={14.67} color="Grey"/>
        </DivFlexHead>
        <DivFlexinfo>
            <Boxinfo>
                <EditBox>
                    <TextEditBox>แก้ไข</TextEditBox>
                </EditBox>
            </Boxinfo>
            <FlexUser>
                <Textinfo>Username</Textinfo>
                <MdOutlineDriveFileRenameOutline size={16} color="#9DA3AD" />
            </FlexUser>
        </DivFlexinfo>
        <Flexmenu>
            <FlexFrRow>
                <Textmenu>โหมดกลางคืน</Textmenu>
                <BoxSwitch />
            </FlexFrRow>
            <FlexFrCol>
                <Textmenu>ระดับเสียง</Textmenu>
                <FlexSound />
            </FlexFrCol>
            <FlexFrRow>
                <Textmenulan>ภาษาไทย</Textmenulan>
            </FlexFrRow>
        </Flexmenu>
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
    z-index: 150;
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
    width: 90%;
    height: 37px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    height: auto;

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

    position: relative;

    overflow: hidden;
    border-radius: 90px;

    background-color: grey;
`

const EditBox = styled.div`
    width: 100%;
    height: 14px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0px;

    background: rgba(0, 0, 0, 0.5);
`

const TextEditBox = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const FlexUser = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
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

const Flexmenu = styled.div`
    width: 71%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 3px;
`

const FlexFrRow = styled.div`
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Textmenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.3;
`

const Textmenulan = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

const BoxSwitch = styled.div`
    width: 42.77px;
    height: 26px;

    background-color: grey;
`

const FlexFrCol = styled.div`
    width: 100%;
    height: 63px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const FlexSound = styled.div`
    width: 100%;
    height: 30px;

    background-color: grey;
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