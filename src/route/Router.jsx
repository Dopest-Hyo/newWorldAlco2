import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import AlcoDetail from "../pages/alcohol/AlcoholDetail";
import Form from "../component/Form";
import AlcoholListPage from "../pages/alcohol/AlcoholListPage";
import ReplyList from "../component/reply/ReplyList";
import { successButton } from "../component/button/Button";
import AlcoholUpdate from "../pages/alcohol/AlcoholUpdate";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<AlcoDetail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/update/:id" element={<AlcoholUpdate />} />
        <Route path="/list" element={<AlcoholListPage />} />
        <Route path="/reply" element={<ReplyList />} />
        <Route path="/btn" element={<successButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
