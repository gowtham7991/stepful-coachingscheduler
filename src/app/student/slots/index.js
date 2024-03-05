import React from "react";
import { useState } from "react";
import './index.css'
import { findSlotsByDateThunk } from "../../../services/slots/slot-thunks";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bookSlotThunk, findUpcomingBookingsThunk } from "../../../services/bookings/booking-thunks";

const SlotsComponent = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    const userDetails = useSelector(state => state.loginData).userDetails
    const userId = userDetails.id

    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedCoach, setSelectedCoach] = useState('All');
    const [selectedTimeSlot, setTimeSlot] = useState('');
    const slots = useSelector(state => state.slotsData).slots
    const isLoading = useSelector(state => state.slotsData).isLoading
    const dispatch = useDispatch()

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
      dispatch(findSlotsByDateThunk(event.target.value))
    };
  
    const handleCoachChange = (coach) => {
        setSelectedCoach(coach);
    };

    const handleTimeSlotChange = (slotId) => {
        setTimeSlot(slotId);
    };

    useEffect(() => {
        dispatch(findSlotsByDateThunk(today))
        console.log(slots)
        
    }, [])

    const handleBookSlot = () => {
        const details = {
            "slotId" : selectedTimeSlot,
            "studentId" : userId
        }

        dispatch(bookSlotThunk(details))
        dispatch(findUpcomingBookingsThunk(userId))
        alert("Booked a slot successfully!")
    }

    return (
        <div className="container">
                <h3>Book a slot with a Coach</h3>
            {
                !isLoading && (
                    <div>
                <div className="mb-5">
                    <h5>Select Date</h5>
                    <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={handleDateChange} 
                    />
                </div>
                <div className="mb-5">
                    <h5>Select Coach</h5>
                    <div className="coach-selection">
                        <div className={`coach ${selectedCoach === "All" ? "bg-dark text-white" : "bg-light"}`} onClick={() => handleCoachChange("All")}>
                            All
                        </div>
                        {
                            Object.keys(slots).map(coach => (
                                <div className={`coach ${selectedCoach === coach ? "bg-dark text-white" : "bg-light"}`} onClick={() => handleCoachChange(coach)}>
                                    {coach}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mb-5">
                    <h5>Select Time</h5>
                    <div className="slot-selection">
                        {
                            selectedCoach === "All" ? (
                                Object.keys(slots).map(coach => (
                                    slots[coach].map(slot => (
                                        !slot.is_booked &&
                                        <div className={`slot ${selectedTimeSlot === slot.id ? "bg-dark text-white" : "bg-light"}`} onClick={() => handleTimeSlotChange(slot.id)}>
                                            {slot.start_time.split(":")[0] + ":" + slot.start_time.split(":")[1]}
                                        </div>
                                    ))
                                ))
                            ) : (
                                slots[selectedCoach].map(slot => (
                                    !slot.is_booked &&
                                    <div className={`slot ${selectedTimeSlot === slot.id ? "bg-dark text-white" : "bg-light"}`} onClick={() => handleTimeSlotChange(slot.id)}>
                                        {slot.start_time.split(":")[0] + ":" + slot.start_time.split(":")[1]}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => handleBookSlot()}>Confirm</button>
            </div>
                )
            }
        </div>
    );
}

export default SlotsComponent