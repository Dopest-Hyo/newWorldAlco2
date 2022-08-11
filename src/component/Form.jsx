import React, { useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./button/Button";
import axios from "axios";
import noPic from "../image/formImage/nopic.jpg";
import s3Upload from "react-aws-s3";
import { useNavigate } from "react-router-dom";

window.Buffer = window.Buffer || require("buffer").Buffer;

const Form = () => {
  //-------내부 state----------------
  const initData = {
    alco_name: "",
    alco_type: "",
    alco_nation: "",
    alco_exp: "",
  };
  //text state
  const [state, setState] = useState(initData);
  //이미지 state
  const [files, setFiles] = useState(null);
  //이미지 input value 값 가져오기
  const imgVal = useRef(null);
  let navigate = useNavigate();

  //----------함수--------------------

  //이미지 파일 후 미리보기
  const onLoadImg = (e) => {
    //현재 이미지 파일
    const imageFile = e.target.files[0];
    //선택한 이미지 파일의 url
    const imageUrl = URL.createObjectURL(imageFile);
    setFiles(imageUrl);
  };

  //text값 가져오기
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  //등록하기
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //이미지 처리
    let file = imgVal.current.files[0];
    let newFileName = imgVal.current.files[0].name;

    const config = {
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      bucketName: process.env.REACT_APP_BUCKET_NAME,
      region: process.env.REACT_APP_REGION,
    };
    //aws 서버에 등록함(DB저장 X)
    const s3Client = new s3Upload(config);
    s3Client.uploadFile(file, newFileName).then(async (data) => {
      if (data.status === 204) {
        let imgUrl = data.location;
        const newState = { ...state, alco_img: imgUrl };
        //json-server 등록
        await axios.post("http://localhost:3001/alcohol", newState);
        alert("등록이 완료되었습니다!");
        navigate("/list");
        //초기화
        setState(initData);
        setFiles(null);
      }
    });
  };

  return (
    <FormWarp>
      <div className="img-wrapper">{}</div>
      <h1>Select Alcohol!🍸</h1>
      <form onSubmit={onSubmitHandler}>
        <Content>
          <div>🍾 주류 이름</div>
          <input
            type="text"
            name="alco_name"
            onChange={onChangeHandler}
            value={state.alco_name}
            placeholder="제품명을 입력해주세요"
            required
          />
        </Content>
        <Content>
          <div>🍾 이미지</div>
          {!files ? (
            <img src={noPic} alt="이미지 없음" />
          ) : (
            <img src={files} alt="등록한 이미지" />
          )}
          <label htmlFor="alco_img">이미지 선택</label>
          <input
            type="file"
            accept="image/*"
            name="alco_img"
            id="alco_img"
            ref={imgVal}
            onChange={onLoadImg}
            onClick={(e) => (e.target.value = null)}
          />
        </Content>
        <Content>
          <div>🍾 국가 선택</div>
          <select
            name="alco_nation"
            value={state.alco_nation}
            onChange={onChangeHandler}
          >
            <option value="선택">선택</option>
            <option value="덴마크">덴마크</option>
            <option value="독일">독일</option>
            <option value="미국">미국</option>
            <option value="스위스">스위스</option>
            <option value="한국">한국</option>
          </select>
        </Content>
        <Content>
          <div>🍾 주류 설명</div>
          <textarea
            name="alco_exp"
            placeholder="주류에 대한 설명을 적어주세요."
            value={state.alco_exp}
            onChange={onChangeHandler}
          />
        </Content>
        <ThemeProvider
          theme={{
            palette: {
              green: "#9BFFDA",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <Button color="green" style={{ margin: "auto" }}>
            등록 🍻
          </Button>
        </ThemeProvider>
      </form>
    </FormWarp>
  );
};

export default Form;

//이곳부터는 스타일 컴포넌트
const FormWarp = styled.div`
  margin: 2rem auto;
  border: 2px solid #3cfbff;
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  font-size: 16px;

  h1 {
    text-align: center;
    color: #3cfbff;
  }
  /* button {
    width: 20%;
    text-align: center;
    margin: 5px auto;
    border: none;
    background: #5f9ea0;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  } */
`;
const Content = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 0.5rem;

  div {
    margin: 0.6rem;
    font-size: 20px;
    font-weight: bold;
    color: #3cfbff;
  }
  input[type="text"] {
    border: none;
    border-radius: 5px;
    width: 90%;
    height: 5vh;
    padding: 0.5rem;
    color: black;
  }
  label {
    width: 91%;
    border: 1px solid #ff9614;
    color: #fff;
    padding: 0.5rem;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    display: block;
  }
  label:hover {
    background-color: #ff9614;
  }
  img {
    width: 94%;
  }
  span {
    width: 70%;
    background: lightgray;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0 0 0 6px;
    display: inline-block;
  }
  input[type="file"] {
    display: none;
  }

  select {
    width: 50%;
    height: 5vh;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: black;
  }
  textarea {
    border: none;
    width: 90%;
    padding: 0.5rem;
    color: black;
  }
`;
