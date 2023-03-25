import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import styled from 'styled-components'
import { TfiAngleLeft } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from '@/pages/_app';

interface IPage {
    name: string;
    element: any;
}

interface IProps {
    modalPage: IPage;
    setModalPage: Dispatch<SetStateAction<IPage>>;
}

export default function Affilate(props: IProps) {
    const { setUserAccess } = useContext(AuthContext)
    const [ miniModal, setMiniModal ] = useState<boolean>(false)

    const handleLogout = () => {
        setUserAccess(null)
        localStorage.removeItem("access")
        localStorage.removeItem("telnum")
        window.location.reload()
    }

    return (
        <>
            <Modal>
                <Container>
                    <BgGrey />
                    <DivFlexHead>
                        <TfiAngleLeft style={{ cursor: "pointer" }} size={16} color="Grey" onClick={() => props.setModalPage({ name: "menu", element: null })} />
                        <TextHead>แนะนำเพือน</TextHead>
                        <AiOutlineClose style={{ cursor: "pointer" }} size={14.67} color="Grey" onClick={() => props.setModalPage({ name: "", element: null })} />
                    </DivFlexHead>
                    <Flexmenu>
                        <DivTextmenu>
                            <Textmenu>ยอดคืนจากเพื่อน</Textmenu>
                        </DivTextmenu>
                        <FlexFr>
                            <FlexCol>
                                <TextSmall>แนะนำเพือน</TextSmall>
                                <TextBig>5 คน</TextBig>
                            </FlexCol>
                            <FlexCol>
                                <TextSmall>ยอดคืน</TextSmall>
                                <TextBig>10,000฿</TextBig>
                            </FlexCol>
                        </FlexFr>
                        <GoldButton>
                            <TextButton>โอนเข้ากระเป๋าหลัก</TextButton>
                        </GoldButton>
                        <DivTextRemem>
                            <TextRemem>- ค่าคอมจะถูกคำนวณทุกวัน เวลา 14.00 น. -</TextRemem>
                        </DivTextRemem>
                        <DivLine>
                            <Line />
                        </DivLine>
                        <DivTextmenu>
                            <Textmenu>ลิ้งก์เชิญเพื่อน</Textmenu>
                        </DivTextmenu>
                        <DivTextRemem>
                            <TextRemem1>(https://xxxxxxx.com/aff/VIN12345)</TextRemem1>
                        </DivTextRemem>
                        <ButtonCopy>
                            <TextButtonCopy>คัดลอกลิ้งก์</TextButtonCopy>
                        </ButtonCopy>
                        <DivTextRemem onClick={() => setMiniModal(true)}>
                            <TextRemem2>เงื่อนไขและรายละเอียด</TextRemem2>
                        </DivTextRemem>
                    </Flexmenu>
                    <DivFlexLogout onClick={handleLogout}>
                        <TextLogout>ออกจากระบบ</TextLogout>
                    </DivFlexLogout>

                    {
                        miniModal &&
                        (
                            <>
                                <MiniModal>
                                    <MiniModalContainer>
                                        <IconX onClick={() => setMiniModal(false)}>
                                            <AiOutlineClose size={20} />
                                        </IconX>
                                        {/* Content */}
                                        <MiniModalContent>
                                            <MiniModalHeader>รายละเอียดการแชร์ลิ้งก์เชิญเพื่อน</MiniModalHeader>
                                            <MiniModalDesc>
                                                ลิ้งค์ช่วยแชร์รับ 0.6% ฟรี ทุกยอดการแทง (แค่ก๊อปปี้ลิ้งค์ไปแชร์ก็ได้เงินแล้ว) ยิ่งแชร์มากยิ่งได้มากท่านสามารถนำลิ้งค์ด้านล่างนี้หรือนำป้ายแบนเนอร์ ไปแชร์ในช่องทางต่างๆ ไม่ว่าจะเป็น เว็บไชต์ส่วนตัว, Blog, Facebook หรือ Social Network อื่นๆ หากมีการสมัครสมาชิกโดยคลิกผ่านลิ้งค์ของท่านเข้ามา ลูกค้าที่สมัครเข้ามาก็จะอยู่ภายให้เครือข่ายของท่านทันทีและหากลูกค้าภายใต้เครือข่ายของท่านมีการเดิมพันเข้ามา ทุกยอดการเดิมพันท่านจะได้รับส่วนแบ่งในการแนะนำ 0.6% ทันทีโดยไม่มีเงื่อนไขตัวอย่าง เช่นลูกค้าท่าน 1 คน แทง 1,000 บาท ท่านจะได้ 6 บาท (ท่านจะได้ทุกรายการแทงของลูกค้า)* ทุกวัน เวลา 14.00 น. ระบบจะทำการคำนวณยอด เช่น แนะนำสมาชิกได้และสมาชิกมียอดเล่นรวมทั้งหมด (186,190 x 0.6%)/100 = 1117.14 บาท/วัน เป็นรายได้แบบถาวร ยิ่งแนะนำเยอะ ยิ่งได้เยอะ ครบ 100 บาท โยกเงินเข้ากระเป๋าหลักได้ทันที เพียงแค่ชวนมาอยู่ภายใต้ท่านท่านกินค่าคอมมิชชั่นฟรีไปตลอดชีวิตสามารถทำรายได้เดือน 100,000 บาทง่ายๆเลยทีเดียว และรายได้ทุกบาททุกสตางค์ของท่านสามารถตรวจสอบได้ทุกขั้นตอน แจกจริง จ่ายจริง ที่นี่ที่เดียวที่ให้คุณมากกว่าใคร ก๊อปปี้ลิ้งค์และข้อความด้านล่างนี้ นำไปแชร์ได้เลย
                                            </MiniModalDesc>
                                        </MiniModalContent>
                                    </MiniModalContainer>
                                </MiniModal>
                                <OverlayMiniModal onClick={() => setMiniModal(false)} />
                            </>
                        )
                    }
                    
                </Container>
            </Modal>
            <Overlay onClick={() => props.setModalPage({ name: "", element: null })} />
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);
`

const MiniModalContent = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`

const MiniModalDesc = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    text-align: left;

    color: rgba(255, 255, 255, 0.8);
`

const MiniModalHeader = styled.h2`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const IconX = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;

    position: absolute;
    right: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 0px 10px;
`

const MiniModalContainer = styled.div`
    position: relative;

    padding: 30px 36px;
    width: 100%;
    height: 100%;
`

const OverlayMiniModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 450px;
`

const MiniModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    border-radius: 10px;
    width: 300px;
    height: 380px;
    overflow: hidden;

    background: #090909;
    box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

const Modal = styled.div`
    width: 320px;
    height: 450px;

    position: fixed;
    top: 50px;
    right: 20vh;

    border-radius: 0px 0px 5px 5px;

    background-color: #000000;
    color: #000;
    z-index: 150;

    overflow: hidden;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 89vh;

        top: 50px;
        left: 0;
    }
`

const BgGrey = styled.div`
    width: 320px;
    height: 40px;

    position: absolute;
    left: 0px;
    top: 0px;

    z-index: 1;

    background: #121116;

    @media (max-width: 1024px) {
        width: 100vw;
    }
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
    width: 80%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
    gap: 10px;
`

const DivLine = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: #121116;
`

const DivTextmenu = styled.div`
    width: 100%;
    height: 21px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Textmenu = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;
`

const FlexFr = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const FlexCol = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TextSmall = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.8);
`

const TextBig = styled.p`
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

const GoldButton = styled.button`
    cursor: pointer;
    border: none;
    width: 100%;
    height: 29px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
    border-radius: 5px; 
`

const ButtonCopy = styled.button`
    cursor: pointer;
    width: 100%;
    height: 29px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 1px solid #FFFFFF;
    border-radius: 5px;

    background-color: #000000;
`

const TextButton = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`

const TextButtonCopy = styled.p`
   font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const DivTextRemem = styled.button`
    cursor: pointer;
    border: none;
    width: 100%;
    height: 36px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: none;
`

const TextRemem = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 275;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`

const TextRemem1 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    opacity: 0.5;
`

const TextRemem2 = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;

    color: #FFFFFF;

    opacity: 0.3;
`

const DivFlexLogout = styled.div`
    cursor: pointer;
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

