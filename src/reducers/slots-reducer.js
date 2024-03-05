import { createSlice } from "@reduxjs/toolkit";
import { createSlotThunk, findSlotsByCoachThunk, findSlotsByDateThunk } from "../services/slots/slot-thunks";

const initialState = {
    isLoading: true,
    coachSlots: {},
    slots: {}
}

const slotsSlice = createSlice({
    name: 'slots',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createSlotThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
            })
            .addCase(findSlotsByCoachThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(findSlotsByCoachThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.coachSlots = payload
            })
            .addCase(findSlotsByCoachThunk.rejected, (state) => {
                state.isLoading = true
            })
            .addCase(findSlotsByDateThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(findSlotsByDateThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.slots = payload
            })
            .addCase(findSlotsByDateThunk.rejected, (state) => {
                state.isLoading = true
            })

    }
});

export default slotsSlice.reducer;
