import { createSlice } from "@reduxjs/toolkit";
import { bookSlotThunk, findUpcomingBookingsThunk, findPastBookingsThunk } from "../services/bookings/booking-thunks";

const initialState = {
    isLoading: true,
    upcomingBookings: [],
    pastBookings: [],
}

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(bookSlotThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
            })
            .addCase(findUpcomingBookingsThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(findUpcomingBookingsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.upcomingBookings = payload
            })
            .addCase(findUpcomingBookingsThunk.rejected, (state) => {
                state.isLoading = true
            })
            .addCase(findPastBookingsThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(findPastBookingsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.pastBookings = payload
            })
            .addCase(findPastBookingsThunk.rejected, (state) => {
                state.isLoading = true
            })
    }
});

export default bookingsSlice.reducer;
