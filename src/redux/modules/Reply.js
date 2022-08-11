import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReply = createAsyncThunk("GET_REPLY", async () => {
  const response = await axios.get(process.env.REACT_APP_DBURL + "member");
  return response.data;
});

//한가지의 작업이 다

export const addReply = createAsyncThunk("ADD_REPLY", async (newList) => {
  const response = await axios.post(
    process.env.REACT_APP_DBURL + "member",
    newList
  );
  return response.data;
});

export const deleteReply = createAsyncThunk("DELETE_REPLY", async (replyId) => {
  const response = await axios.delete(
    process.env.REACT_APP_DBURL + `member/${replyId}`
  );
  return replyId;
});

export const updateReply = createAsyncThunk(
  "UPDATE_REPLY",
  async ({ replyId, username, comment }) => {
    const response = await axios.put(
      process.env.REACT_APP_DBURL + `member/${replyId}`,
      {
        username: username,
        comment: comment,
      }
    );
    return { replyId, username, comment };
  }
);

export const replyReducer = createSlice({
  name: "replyList",
  initialState: [],
  //reducers는 내부의 state값을 변경할때 사용
  reducers: {},
  //extraReducers 는 DB 같은 외부 저장소에서 값을 변경할때 사용
  extraReducers: {
    [getReply.fulfilled]: (state, { payload }) => [...payload],
    [addReply.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteReply.fulfilled]: (state, { payload }) =>
      state.filter((reply) => reply.id !== payload),

    [updateReply.fulfilled]: (state, { payload }) => {
      return state.map((reply) => {
        if (reply.id === payload.replyId) {
          return {
            ...reply,
            username: payload.username,
            comment: payload.comment,
          };
        } else {
          return reply;
        }
      });
    },
  },
});
