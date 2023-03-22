import { createSlice } from "@reduxjs/toolkit";

// post page matter
const postSlice = createSlice({
  name: "post",
  initialState: [{title:"good morning Reddit Family.",img:""}],
  reducers: {
    add(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const { add } = postSlice.actions;

export default postSlice.reducer;
