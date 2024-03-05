import React from "react";
import UpcomingBooking from "./upcomingBooking";
import PastBooking from "./pastBooking";
import './index.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findUpcomingBookingsThunk, findPastBookingsThunk } from "../../../services/bookings/booking-thunks";

const CoachBookings = () => {
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
                            (upcomingBookings.length === 0 ? (
                                <p>No upcoming boookings</p>
                            ) : (
                                upcomingBookings.map(booking => (
                                    <UpcomingBooking 
                                        date = {booking.date.split("T")[0]}
                                        startTime = {booking.scheduled_time}
                                        studentName= {booking.student_name}
                                        phoneNumber= {booking.student_phone}
                                    />
                                ))
                            ))
                        }
                    </div>
                </div>
                <div className="col m-5">
                    <h3>Past Bookings</h3>
                    <div className="bookings-container">
                    {
                            !isLoading && 
                            (pastBookings.length === 0 ? (
                                <p>No past bookings</p>
                            ) : (
                                pastBookings.map(booking => (
                                    <PastBooking 
                                        id = {booking.id}
                                        date = {booking.date.split("T")[0]}
                                        studentName= {booking.student_name}
                                    />
                                ))
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoachBookings