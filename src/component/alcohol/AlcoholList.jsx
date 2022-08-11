import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Item from "./AlcoholItem";
import Loading from "../../common/Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getAlcos } from "../../redux/modules/Alchole";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

function AlcoholList() {
  //Hook
  const dispatch = useDispatch();
  const alcoList = useSelector((state) => state.alcoReducer);
  const loadingVal = useSelector((state) => state.alcoReducer.isLoading);
  const nav = useNavigate();

  useEffect(() => {
    dispatch(getAlcos());
  }, []);

  //슬라이드 화살표
  const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "contrast(0.5)",
          height: "9rem",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          filter: "contrast(0.5)",
          height: "9rem",
        }}
        onClick={onClick}
      />
    );
  };
  //슬라이드 옵션
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          green: "#9BFFDA",
          purple: "#FF9DFF",
          red: "#FF4646",
        },
      }}
    >
      <StAlcoholList style={{margin:'0 auto'}}>
        <div className="btn_loca">
          <Button onClick={() => nav("/form")}>추가하기</Button>
        </div>
        <Slider {...settings}>
          {loadingVal ? <Loading /> : null}
          {alcoList.alcohol.map((data) => (
            <Item data={data} key={data.id} id={data.id} />
          ))}
        </Slider>
      </StAlcoholList>
    </ThemeProvider>
  );
}

export default AlcoholList;

const StAlcoholList = styled.div`
  width: 80%;
  margin: 0 auto;
  .btn_loca {
    margin: 10px 0 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
