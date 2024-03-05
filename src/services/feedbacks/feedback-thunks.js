import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./feedback-service"

export const postFeedbackThunk = createAsyncThunk(
    'feedbacks/postFeedback', async (payload) => await service.postFeedback(payload)
)

export const findFeedbacksByUserThunk = createAsyncThunk(
    'feedbacks/findFeedbackByUser', async (payload) => await service.findFeedbacksByUser(payload)
)