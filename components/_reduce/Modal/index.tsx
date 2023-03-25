import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai"
import { TfiAngleLeft } from "react-icons/tfi"
import styled from "styled-components";

interface IPage {
  name: string;
  element: any;
}

interface IProps {
  children: ReactNode;
  isCenter?: boolean;
  isLogedIn?: boolean;
  page: boolean;
  setPage: Dispatch<SetStateAction<IPage>>;
  element?: ReactNode;
}

function Modal({ children, page, setPage, isCenter, isLogedIn, element }: IProps) {
  return (
    <>
      <Overlay open={page} onClick={() => setPage({ name: "", element: null })} />
      <Container open={page} isCenter={isCenter}>
        <Header>

          <IconX isLogedIn={isLogedIn}>
              <AiOutlineClose size={20} onClick={() => setPage({ name: "", element: null })} />
          </IconX>

          <TfiAngleLeft style={{ cursor: "pointer" }} size={16} color="Grey" onClick={() => setPage({ name: "", element: null })} />
          <Title>ข้อมูลส่วนตัว</Title>
          <AiOutlineClose style={{ cursor: "pointer" }} size={14.67} color="Grey" onClick={() => setPage({ name: "", element: null })} />
        </Header>

          {element}

          <DivFlexLogout>
              <TextLogout>ออกจากระบบ</TextLogout>
          </DivFlexLogout>
      </Container>
    </>
  )
}

export default Modal

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

const Title = styled.p`
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

const IconX = styled.div<{ isLogedIn?: boolean }>`
  position: absolute;
  right: 0;
  top: 0;

  border-radius: 0px 10px;
  width: 30px;
  height: 30px;
  
  ${props => props.isLogedIn ?
    `
      display: none;
    `
  :
    `
      display: flex;
    `
  }

  justify-content: center;
  align-items: center;
  
  background: linear-gradient(90deg, #D2BB6E 0%, #F6E79A 100%);
  cursor: pointer;
`

const Header = styled.div`
  position: relative;

  padding: 0 10px;
  width: 100%;
  height: 37px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #121116;
`

const Container = styled.div<{ open?: boolean, isCenter?: boolean }>`
  position: fixed;
  z-index: 150;
  
  border-radius: 10px;
  width: 320px;
  height: 500px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background: #000;
  color: #000;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;

  ${props => props.isCenter ?
    `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  :
    `
      top: 50px;
      right: 20vh;
    `
  }

  ${props => props.open ?
    `
      visibility: visible;
      opacity: 1;
      transition: visibility 0.2s, opacity 0.2s linear;
    `
    :
    `
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.2s, opacity 0.2s linear;
    `
  }
`

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0,0.5);

  ${props => props.open ?
    `
      visibility: visible;
      opacity: 1;
      transition: visibility 0.2s, opacity 0.2s linear;
    `
    :
    `
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.2s, opacity 0.2s linear;
    `
  }
`
