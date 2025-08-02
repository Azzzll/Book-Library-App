import { createSlice } from "@redux/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: filter,
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
  },
});
