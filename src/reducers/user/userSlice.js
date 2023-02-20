import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: "",
    name: "",
    email: "",
    rol: "",
    courses: [],
    orders: [],
    isAuth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.rol = action.payload.rol;
      state.courses = action.payload.courses;
      state.orders = action.payload.orders;
      state.isAuth = true;
    },

    unSetUser: (state) => {
      state.uid = "";
      state.name = "";
      state.email = "";
      state.rol = "";
      state.courses = [];
      state.orders = [];
      state.isAuth = false
    },
  },
});

export const { setUser, unSetUser } = userSlice.actions;

export default userSlice.reducer;
