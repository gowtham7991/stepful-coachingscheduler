import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./slots-service"

export const createSlotThunk = createAsyncThunk(
    'slots/createSlot', async (payload) => await service.createSlot(payload)
)

export const findSlotsByCoachThunk = createAsyncThunk(
    'slots/findSlotsByCoach', async (id) => await service.findSlotsByCoach(id)
)

export const findSlotsByDateThunk = createAsyncThunk(
    'slots/findSlotsByDate', async (date) => await service.findSlotsByDate(date)
)