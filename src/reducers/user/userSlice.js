import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const EmptyUserState = {
  uid: "",
  name: "",
  email: "",
  rol: "",
  courses: [],
  orders: [],
};

export const setAndPersistUser = (userInfo) => {
  sessionStorage.setItem("user", JSON.stringify({ ...userInfo }));
};

export const resetSessionStorage = () => {
  sessionStorage.removeItem("user");
};

export const userSlice = createSlice({
  name: "user",
  initialState: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : EmptyUserState,
  reducers: {
    setUser: (state, action) => {
      const result = action.payload;
      setAndPersistUser(action.payload);
      return action.payload;
    },

    unSetUser: () => {
      resetSessionStorage()
      return EmptyUserState
    }
  },
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
