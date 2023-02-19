import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { TfiAngleLeft } from 'react-icons/tfi';
import styled from 'styled-components'

interface IProps {
    modalPage: ReactNode;
    setModalPage: Dispatch<SetStateAction<ReactNode>>;
}

export default function Statement(props: IProps) {
    
  return (
    <Modal>
        <BgGrey />
        <DivFlexHead>
            <TfiAngleLeft size={16}  color="Grey" onClick={() => props.setModalPage(null)}/>
            <TextHead>ประวัติธุรกรรม</TextHead>
            <AiOutlineClose size={14.67} color="Grey"/>
        </DivFlexHead>
        <Flexmenu>
            <FlexButton>
                <GoldLine />
                <ButtonType>
                    <TextButtonType>ทั้งหมด</TextButtonType>
                </ButtonType>
                <ButtonType>
                    <TextButtonType>ฝาก</TextButtonType>
                </ButtonType>
                <ButtonType>
                    <TextButtonType>ถอน</TextButtonType>
                </ButtonType>
                <ButtonType>
                    <TextButtonType>โบนัส</TextButtonType>
                </ButtonType>
            </FlexButton>
            <FlexTransaction>
                <DivTextDate>
                    <TextDate>วันที่ 12 มีนาคม 2564</TextDate>
                </DivTextDate>
                <Line />
                <FlexRow>
                    <Box />
                    <FlexDetail>
                        <TextHeadDetail>รายการฝากเงิน</TextHeadDetail>
                        <TextDetail>+ 100,000.99฿</TextDetail>
                    </FlexDetail>
                    <FlexDetail2>
                        <TextHeadDetail2>ณ เวลา 19:52 น.</TextHeadDetail2>
                        <Status>
                            <TextStatus>ทำรายการทำเร็จ</TextStatus>
                        </Status>
                    </FlexDetail2>
                </FlexRow>
                <Line />
                <FlexRow>
                    <Box />
                    <FlexDetail>
                        <TextHeadDetail>รายการฝากเงิน</TextHeadDetail>
                        <TextDetail>+ 100,000.99฿</TextDetail>
                    </FlexDetail>
                    <FlexDetail2>
                        <TextHeadDetail2>ณ เวลา 19:52 น.</TextHeadDetail2>
                        <Status>
                            <TextStatus>ทำรายการทำเร็จ</TextStatus>
                        </Status>
                    </FlexDetail2>
                </FlexRow>
                <Line />
                <FlexRow>
                    <Box />
                    <FlexDetail>
                        <TextHeadDetail>รายการฝากเงิน</TextHeadDetail>
                        <TextDetail>+ 100,000.99฿</TextDetail>
                    </FlexDetail>
                    <FlexDetail2>
                        <TextHeadDetail2>ณ เวลา 19:52 น.</TextHeadDetail2>
                        <Status>
                            <TextStatus>ทำรายการทำเร็จ</TextStatus>
                        </Status>
                    </FlexDetail2>
                </FlexRow>
                <Line />
                <FlexRow>
                    <Box />
                    <FlexDetail>
                        <TextHeadDetail>รายการฝากเงิน</TextHeadDetail>
                        <TextDetail>+ 100,000.99฿</TextDetail>
                    </FlexDetail>
                    <FlexDetail2>
                        <TextHeadDetail2>ณ เวลา 19:52 น.</TextHeadDetail2>
                        <Status>
                            <TextStatus>ทำรายการทำเร็จ</TextStatus>
                        </Status>
                    </FlexDetail2>
                </FlexRow>
            </FlexTransaction>
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
    z-index: 9999;
`

const BgGrey = styled.div`
    width: 320px;
    height: 40px;

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

const Flexmenu = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin-top: 20px;
    gap: 15px;
`

const FlexButton = styled.div`
    width: 77%;
    height: 33px;

    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0px;

    overflow: hidden;

    background: #121116;
    border-radius: 5px;
`

const GoldLine = styled.div`
    width: 25%;
    height: 3px;

    position: absolute;
    left: 0px;
    bottom: 0px;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
`

const ButtonType = styled.div`
    width: 25%;
    height: 33px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TextButtonType = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const FlexTransaction = styled.div`
    width: 88%;
    height: 279px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow: scroll;

    gap: 5px;
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #121116;
`

const DivTextDate = styled.div`
    width: 100%;
    height: 18px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const TextDate = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.3;
`

const FlexRow = styled.div`
    width: 100%;
    height: 42px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;
`

const Box = styled.div`
    width: 30px;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 90px;
    overflow: hidden;

    background-color: Grey;
`

const FlexDetail = styled.div`
    width: 147px;
    height: 42px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 0px;
`

const TextHeadDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const TextDetail = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const FlexDetail2 = styled.div`
    width: 87px;
    height: 42px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    gap: 0px;
`

const TextHeadDetail2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 250;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #FFFFFF;
`

const Status = styled.div`
    width: 87px;
    height: 17px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #34C759;
    border-radius: 5px;
`

const TextStatus = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

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