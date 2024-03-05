import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home"
import BookingsComponent from "./bookings"
import SlotsComponent from "./slots";

const StudentApp = () => {
    return (
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/bookings" element={<BookingsComponent/>}/>
            <Route path="/slots" element={<SlotsComponent/>}/>
        </Routes>
    );
}

export default StudentApp