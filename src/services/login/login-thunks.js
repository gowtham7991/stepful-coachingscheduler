import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./login-service"

export const loginThunk = createAsyncThunk(
    'login', async (userCredentials) => await service.login(userCredentials)
)