import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { alcoReducer } from "../modules/Alchole.js";
import { replyReducer } from "../modules/Reply.js";
import logger from "redux-logger";

const reducer = combineReducers({
  alcoReducer: alcoReducer.reducer,
  replyReducer: replyReducer.reducer,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
