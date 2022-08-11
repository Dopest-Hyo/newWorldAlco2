import React from 'react';
import Styled, { keyframes } from 'styled-components';
import MainLogo from '../image/mainImg/mainLogo-1.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MButton } from '../component/button/Button';
import { constants } from 'buffer';

function Header() {
     const nav = useNavigate();

     return (

          <>
               <SetMainImg src={MainLogo} />

               <SetMainDiv>
                    <SetMainH1 onClick={() => nav("/list")}>
                         방구석 주류박<span class="first">람</span>회
                    </SetMainH1>
               </SetMainDiv>

          </>

     )
}

export default Header;


const SetMainImg = Styled.img`
  max-width: 75%;
  height: auto;
  display: block;
  margin: 0px auto;
`;


const LetterFlicker = keyframes`
2% { 
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  3% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  6% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  9% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  11% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  14% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  18% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  32% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  33% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  37% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  39% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  40% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  100% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
`;


const TextFlicker = keyframes`

2% { 
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  3% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  6% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  9% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  11% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  14% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  18% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  32% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  33% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  37% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  39% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  43% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  46% {
    color: rgba(120, 0, 50, .5);
    text-shadow: none;
  }
  47% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  100% {
    color: rgb(230, 0, 120);
    text-shadow: 0 0 15px rgb(230, 0, 120);
  }
  `;

const BorderFlicker = keyframes`
2% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  3% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  5% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  6% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  7% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  9% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  13% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  16% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  18% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  22% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  34% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  36% {
    border: 3px solid rgb(0, 40, 70);
    box-shadow: none;
  }
  54% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }
  100% {
    border: 3px solid rgb(0, 180, 230);
    box-shadow: 0 0 15px -1px rgb(0, 180, 230), 
    0 0 12px -1px rgb(0, 180, 230) inset;
  }`;


const SetMainDiv = Styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  width: 300px;
  height: 55px;
  margin: -50px 0 0 -150px;
  text-align: center;
  border-radius: 8px;
  border: 3px solid rgb(0, 40, 70);
  cursor: pointer;

&:hover{
animation: ${BorderFlicker} 2s linear forwards;
}
`;

const SetMainH1 = Styled.h1`
font-family: 'GangwonEdu_OTFBoldA';
  font-weight: 300;
  font-size:1.9em;
  margin: 15px 0 0;
  color: rgba(120, 0, 50, .5);
  &:hover{
     animation: ${TextFlicker} 2s linear forwards;
     .first{
          animation: ${LetterFlicker} 3s linear infinite;
     }
`;


