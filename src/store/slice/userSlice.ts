import { User } from "@/services/user/types";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  user: User;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    email: "",
    name: "",
    token: "",
  } as User,
  reducers: {
    setUser: (state: User, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
