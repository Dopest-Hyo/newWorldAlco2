import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초기화 값
const initialState = {
  alcohol: [],
  isLoading: false,
  error: null,
};

//list get청크
export const getAlcos = createAsyncThunk("alcoholList/getAlcos", async () => {
  const responesData = await axios.get("http://localhost:3001/alcohol");
  return responesData.data;
});
//item del청크
export const delAlco = createAsyncThunk(
  "alcoholList/delAlco",
  async (itemId) => {
    const responesData = await axios.delete(
      `http://localhost:3001/alcohol/${itemId}`
    );
    return responesData.data;
  }
);

//item update청크
export const updateAlco = createAsyncThunk(
  "alcoholList/delAlco",
  async ({ itemId, data }) => {
    const responesData = await axios.put(
      `http://localhost:3001/alcohol/${itemId}`,
      data
    );
    return { itemId, data };
  }
);

//리듀스
export const alcoReducer = createSlice({
  name: "alcoholList",
  initialState,
  reducers: {},
  extraReducers: {
    [getAlcos.pending]: (state) => {
      state.loading = true;
    },
    [getAlcos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.alcohol = payload;
    },
    [delAlco.pending]: (state) => {
      state.loading = true;
    },
    [delAlco.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.alcohol = state.alcohol.filter((data) => data.id != payload);
    },
    [updateAlco.pending]: (state) => {
      state.loading = true;
    },
    [updateAlco.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.alcohol = state.alcohol.map((data) => {
        if (data.id === Number(payload.itemId)) {
          return payload.data;
        }
        return data;
      });
    },
  },
});

// export default alcoholList;
