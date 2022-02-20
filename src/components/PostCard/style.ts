import styled, { keyframes } from "styled-components"
import { color } from "theme/colors"

const cardAnimation = keyframes`  
0% { transform: translateX(0); }
100% { transform: translateX(calc(-340px * 50))}
`
export const CardSlider = styled.div`
  height: 320px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .slide-track {
    animation: ${cardAnimation} 400s linear infinite;
    display: flex;
    width: calc(340px * 100);
  }
`
export const Card = styled.section`
  background-color: ${color.white};
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px 0px,
    rgba(0, 0, 0, 0.16) 0px 47px 46px -27px;
  height: 240px;
  width: 340px;
  border-radius: 10px;
  padding: 20px;
  margin: 14px;

  p {
    margin-top: 10px;
    max-height: 130px;
    overflow: auto;

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`
export const TextRequestFailed = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  max-width: 250px;
`
