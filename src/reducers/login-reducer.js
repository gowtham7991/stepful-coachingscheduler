import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../services/login/login-thunks";

const initialState = {
    userDetails: {
        id: "",
        email: "",
        password: "",
        name: "",
        phone: "",
        role: ""
    },
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.userDetails = { ...payload };
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isLoggedIn = false;
            });
    }
});

export default loginSlice.reducer;
