import { createSlice } from "@reduxjs/toolkit";
import { findFeedbacksByUserThunk, postFeedbackThunk } from "../services/feedbacks/feedback-thunks";

const initialState = {
    isLoading: true,
    feedbacks: [],
}

const bookingsSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postFeedbackThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
            })
            .addCase(findFeedbacksByUserThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(findFeedbacksByUserThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.feedbacks = payload
            })
            .addCase(findFeedbacksByUserThunk.rejected, (state) => {
                state.isLoading = true
            })
    }
});

export default bookingsSlice.reducer;
