import React, { useEffect } from "react";
import Layout from "../../common/Layout";
import UpdateForm from "../../component/alcohol/UpdateForm";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlcos } from "../../redux/modules/Alchole";

const AlcoholUpdate = () => {
  //Hook
  const { id } = useParams();

  const dispatch = useDispatch();

  const alcoList = useSelector((state) => state.alcoReducer.alcohol);
  useEffect(() => {
    dispatch(getAlcos());
  }, []);

  return (
    <div>
      {alcoList.map((data) => {
        if (data.id === Number(id)) {
          return <UpdateForm data={data} id={id} key={data.id} />;
        }
      })}
    </div>
  );
};
export default AlcoholUpdate;
