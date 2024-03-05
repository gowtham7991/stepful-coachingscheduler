import React from "react";
import UpcomingBooking from "./upcomingBooking";
import PastBooking from "./pastBooking";
import { useDispatch, useSelector } from "react-redux";
import { findPastBookingsThunk, findUpcomingBookingsThunk } from "../../../services/bookings/booking-thunks";
import { useEffect } from "react";

const StudentBookings = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const userId = userDetails.id
    const upcomingBookings = useSelector(state => state.bookingsData).upcomingBookings
    const pastBookings = useSelector(state => state.bookingsData).pastBookings
    const isLoading = useSelector(state => state.bookingsData).isLoading
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUpcomingBookingsThunk(userId))
        dispatch(findPastBookingsThunk(userId))
    }, [])

    return (
        <div className="container m-5">
            <div className="row">
                <div className="col m-5">
                    <h3>Upcoming Bookings</h3>
                    <div className="bookings-container">
                        {
                            !isLoading && 
                            upcomingBookings.map(booking => (
                                <UpcomingBooking 
                                    date = {booking.date.split("T")[0]}
                                    startTime = {booking.scheduled_time}
                                    coachName= {booking.coach_name}
                                    phoneNumber= {booking.coach_phone}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col m-5">
                    <h3>Past Bookings</h3>
                    <div className="bookings-container">
                    {
                            !isLoading && 
                            pastBookings.map(booking => (
                                <PastBooking 
                                    date = {booking.date.split("T")[0]}
                                    coachName= {booking.coach_name}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentBookings