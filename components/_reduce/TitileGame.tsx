import { useState } from "react";
import styled from "styled-components";

interface TitleGame {
    header?: string;
    subheader? : string;
    search?: boolean;
}

interface Props {}

export default function TitleGame({ header , subheader , search }: TitleGame){
        const [isFocused, setIsFocused] = useState<boolean>(false);
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);
    return(
        <DivTitle>
            <DivTextTitle>
                <TextTitle>{header}</TextTitle>
                <InputWrapper search={search}>
                    <Icon onClick={handleFocus} isFocused={isFocused}>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        height="25px"
                        width="25px"
                        >
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            stroke="#fff"
                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        ></path>
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            stroke="#fff"
                            d="M22 22L20 20"
                        ></path>
                        </svg>
                    </Icon>
                    <InputBox
                        type="text"
                        name="text"
                        placeholder="search.."
                        isFocused={isFocused}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </InputWrapper>
            </DivTextTitle>
            <Line />
            <DivTextDes>
                <TextDes>{subheader}</TextDes>
            </DivTextDes>
        </DivTitle>
    )
}

const DivTitle = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 8px;
    margin-bottom: 10px;
`

const DivTextTitle = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
`

const TextTitle = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 36px;
    text-align: center;

    color: #ECD559;

    @media (min-width: 744px) {
        font-size: 24px;
    }
`

const Line = styled.div`
    width: 94.6%;
    height: 1.49px;

    background: linear-gradient(90deg, rgba(149, 149, 149, 0) 0.05%, #959595 51.56%, rgba(149, 149, 149, 0) 99.95%);
`

const DivTextDes = styled.div`
    width: 100%;
    height: auto;
`
const TextDes = styled.p`
    font-family: 'Prompt';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
`

const InputWrapper = styled.div<{search?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative;

  ${props => props.search ?
    `
        display: block;
    `
    :
    `
        display: none;
        
    `
    }
`;

const InputBox = styled.input<{ isFocused: boolean }>`
  border-style: none;
  height: 36px;
  width: ${(props) => (props.isFocused ? "250px" : "36px")};
  padding: 10px;
  outline: none;
  border-radius: ${(props) => (props.isFocused ? "0px" : "10%")};
  transition: 0.5s ease-in-out;
  background-color: ${(props) =>
    props.isFocused ? "transparent" : "#8f8f8f"};
  box-shadow: ${(props) =>
    props.isFocused ? "none" : "0px 0px 3px #f3f3f3"};
  padding-right: 25px;
  color: #fff;
  border-bottom: ${(props) =>
    props.isFocused ? "3px solid #8f8f8f" : "none"};
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;
  &::placeholder {
    color: #8f8f8f;
  }
`;

const Icon = styled.button<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 36px;
  height: 36px;
  outline: none;
  border-style: none;
  /* border-radius: 50%; */
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s linear;
`
