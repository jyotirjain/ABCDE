import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "guest user",
    token: "",
    isAuthenticated: false
  };
export const authStartupSlice = createSlice({
  name: 'authStartup',
  initialState,
  reducers: {
    LOGOUTUSER: () => initialState,
    LOGINUSER: (state , action) => {
        state.user= action.payload.id;
        state.userName= action.payload.Name;
        state.userToken= action.payload.accessToken;
        state.isUserAuthenticated= true
    },
  },
})
export const { LOGINUSER , LOGOUTUSER }  = authStartupSlice.actions

export default authStartupSlice.reducer