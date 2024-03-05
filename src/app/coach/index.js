import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import BookingsComponent from "./bookings"
import CalendarComponent from "./calendar";
import FeedbackComponent from "./feedbacks"

const CoachApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/bookings" element={<BookingsComponent/>}/>
            <Route path="/calendar" element={<CalendarComponent/>}/>
            <Route path="/feedbacks" element={<FeedbackComponent/>}/>
        </Routes>
    );
}

export default CoachApp