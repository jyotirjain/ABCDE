import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "guest user",
    token: "",
    isAuthenticated: false
  };
export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    LOGOUTUSER: () => initialState,
    LOGINUSER: (state , action) => {
        state.user= action.payload.id;
        state.userType= action.payload.User_Type;
        state.userToken= action.payload.accessToken;     
        state.isUserAuthenticated= true
    }
  },
})
// Action creators are generated for each case reducer function
export const { LOGINUSER , LOGOUTUSER }  = authUserSlice.actions

export default authUserSlice.reducer