import React, { useEffect } from "react";
import Styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlcos, delAlco } from "../../redux/modules/Alchole";
import { useNavigate } from "react-router-dom";
import ReplyList from "../../component/reply/ReplyList";
import Button from "../../component/button/Button";

// import Loading from "../../common/Loading";

function AlcoholDetail() {
  //HooK
  const dispatch = useDispatch();
  const { id } = useParams();
  const alco = useSelector((state) => state.alcoReducer.alcohol);
  let navigate = useNavigate();
  //->로딩 처리 해볼려고 하는 중
  // const loadingVal = useSelector((state) => state.alcoReducer.loading);
  // const [load, setLoad] = useState(true);
  // setLoad(loadingVal);
  useEffect(() => {
    dispatch(getAlcos());
  }, [dispatch]);

  //이벤트 및 함수
  const deleteHandler = (itemiId) => {
    dispatch(delAlco(itemiId));
    alert("정상적으로 삭제되었습니다.");
    navigate("/list");
  };

  return (
    <div>
      {/* {load ? <Loading /> : null} */}
      <ThemeProvider
        theme={{
          palette: {
            green: "#9BFFDA",
            purple: "#FF9DFF",
            red: "#FF4646",
          },
        }}
      >
        <StyledDivPrev>
          <Button color="purple" onClick={() => navigate("/list")}>
            리스트로 이동
          </Button>
        </StyledDivPrev>
        <StyledDivWarp>
          {alco.map((data) => {
            if (data.id === Number(id)) {
              return (
                <StyledCard key={data.id}>
                  <StyledWrapImg src={data.alco_img} />

                  <StyledDesc>
                    <StyledTitle>
                      <StyledTitleH2>{data.alco_name}</StyledTitleH2>
                      <p>{data.alco_exp}</p>
                    </StyledTitle>
                    <div className="btn_loca">
                      <Button
                        color="green"
                        onClick={() => navigate(`/update/${data.id}`)}
                      >
                        수정하기
                      </Button>
                      <Button
                        color="red"
                        onClick={() => deleteHandler(data.id)}
                      >
                        삭제하기
                      </Button>
                    </div>
                  </StyledDesc>
                </StyledCard>
              );
            }
          })}
        </StyledDivWarp>
        <ReplyList />
      </ThemeProvider>
    </div>
  );
}

export default AlcoholDetail;

const StyledDivPrev = Styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 20px 30px;
`;

const StyledDivWarp = Styled.div`
  padding: 0 10px;
  width: 600px;
  margin: 0 auto;
`;

const StyledWrapImg = Styled.img`
  border-radius: 20px 0 0 20px;
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

const StyledCard = Styled.div`
  width:100%;
  background: rgba( 255, 255, 255, 0.01 );
  box-shadow: 0 8px 32px 0 rgb(205 91 227 / 58%);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: inline-flex;
  margin-bottom: 20px;
`;

const StyledDesc = Styled.div`
    text-align: center;
    width:100%;
    .btn_loca{
      position: relative;
      top: 14rem;
      right: 0rem;
  }
`;
const StyledTitle = Styled.div`
  width : 100%;
  margin: 0.5rem
`;
const StyledTitleH2 = Styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #3cfbff;
    text-align: center;
    margin:0 0 1rem 0;
`;
