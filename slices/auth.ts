import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

export interface UserStateProps {
  user: User | null;
}

const initialState: UserStateProps = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      if (typeof state.user !== null) {
        state.user = action.payload;
      }
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
