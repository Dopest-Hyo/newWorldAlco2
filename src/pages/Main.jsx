import React from "react";
import Layout from "../common/Layout";
// import Button from  '../redux/modules/Button'
import Header from "../common/Header";
import Styled from "styled-components";
import AlcoImg from "../image/mainImg/alcol.jpeg";

function Main() {
  return (
    <Layout>
      <Header />
      {/* <AlCategory>
        <TxCategory>
          <h1>추천 카테고리</h1>
          <Txcountry>전체 /독일 / 영국/ 미국 /브라질</Txcountry>
        </TxCategory>
      </AlCategory> */}
    </Layout>
  );
}

export default Main;

const AlCategory = Styled.div`
    
    float:left;
    width:49% ;
    height:49%;
 
    display:inline-block;
`;

const TxCategory = Styled.div`
    margin : 120px 0 0 30px;
    white-space: nowrap;
    color:black;
    
`;
const Txcountry = Styled.div`
margin-top : 30px`;

const AlList = Styled.div`

    float:left;
    height:40.5%;
    margin-left:6px;
    display:inline-block;
    white-space: nowrap;
`;
const RecomAlco = Styled.div`
    background-image:url(${AlcoImg}) ;
    background-position:center;
    background-size:cover;
    border-radius:30px;
    width:120px;
    height:80%;
    margin: 20px 0 0 10px;
    display:inline-block;
`;

const AlcoName = Styled.div`
  
  display:inline-block;
  position:relative;
  font-size:30px;
  right:90px;
  top:30px;
  width:10px;
 `;
