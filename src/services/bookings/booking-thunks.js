import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./booking-service"

export const bookSlotThunk = createAsyncThunk(
    'bookings/bookSlot', async (payload) => await service.bookSlot(payload)
)

export const findUpcomingBookingsThunk = createAsyncThunk(
    'bookings/findUpcomingBooking', async (payload) => await service.findUpcomingBookingByUser(payload)
)

export const findPastBookingsThunk = createAsyncThunk(
    'bookings/findPastBooking', async (payload) => await service.findPastBookingByUser(payload)
)