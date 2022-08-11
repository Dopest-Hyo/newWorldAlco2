import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const AlcoholItem = ({ data, id }) => {
  //Hook
  let navigate = useNavigate();

  return (
    <StItemWrap id={id}>
      <ImgContent
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        imgUrl={data.alco_img}
      ></ImgContent>

      <TextContent>
        <span name="alco_info">
          {data.alco_name} (원산지 :{data.alco_nation})
        </span>
        <div name="textArea">
          ❤️ <span name="like"> 0</span>
        </div>
        <p># {data.alco_exp}</p>
      </TextContent>
    </StItemWrap>
  );
};

export default AlcoholItem;

const StItemWrap = styled.div`
  width: 96%;
  height: inherit;
  margin: 0 0.5rem;
`;
const ImgContent = styled.div`
  background-image: url(${(props) => props.imgUrl});
  width: initial;
  height: 60vh;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;
const TextContent = styled.div`
  width: initial;
  height: initial;
  [name="alco_info"] {
    font-size: 17px;
    font-weight: bold;
    display: inline-block;
    padding: 0.5rem 0;
    color: #3cfbff;
  }
  [name="textArea"] {
    font-size: 15px;
    font-weight: 400;
    vertical-align: middle;
    padding: 0.3rem 0;
    border-bottom: 1px solid #3cfbff;
  }
  p {
    height: 17%;
    padding: 0.5rem 0;
  }
  button {
    border: none;
    background: #5f9ea0;
    text-align: center;
    padding: 7px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 13px;
    color: #fff;
  }
`;
