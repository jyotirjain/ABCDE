import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin: "guest Admin",
    token: "",
    isAuthenticated: false,
    isAdmin:false
  };
export const authAdminSlice = createSlice({
  name: 'authAdmin',
  initialState,
  reducers: {
    LOGOUTADMIN: () => initialState,
    LOGINADMIN: (state , action) => {
        state.admin= action.payload.id;
        state.adminName= action.payload.Name;
        state.adminToken= action.payload.accessToken;
        state.isAdminAuthenticated= true;
    },
    setType:(state,action)=>{
      state.isAdmin=action.payload.isAdmin
    }
  },
})
// Action creators are generated for each case reducer function
export const { LOGINADMIN , LOGOUTADMIN,setType}  = authAdminSlice.actions

export default authAdminSlice.reducer