import { createSlice } from "@reduxjs/toolkit";

const Authslice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) ||  {
      name: "",
      password: "",
      authUser: false,
    },
  },
  reducers: {
    login: (state, action) => {
      const userId = action.payload;
      const userValidation = /^[A-Za-z\s]{3,30}$/.test(userId.name);
      const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
        userId.password
      );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
      }
      const saveItem = JSON.stringify(userId);
      sessionStorage.setItem("authUser", saveItem);
    },

    logout: (state) => {
      state.user = {
        name: "",
        password: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = Authslice.actions;
export default Authslice.reducer;
