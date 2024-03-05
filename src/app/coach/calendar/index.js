import React from "react";
import { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import './index.css'
import { useDispatch } from "react-redux";
import { createSlotThunk, findSlotsByCoachThunk } from "../../../services/slots/slot-thunks";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CalendarComponent = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const userId = userDetails.id
    const [selectedTimezone, setSelectedTimezone] = useState({})
    const [date, setDate] = useState({})
    const [startTime, setStartTime] = useState({})
    const upcomingSlots = useSelector(state => state.slotsData).coachSlots
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findSlotsByCoachThunk(userId))
        Object.keys(upcomingSlots).map(date => {
            upcomingSlots[date].map(slot => {
                console.log(slot)
            })
        })
    }, [])

    const addSlotHandler = (e) => {
        e.preventDefault();
        const [hours, minutes] = startTime.split(":"); 
        const endTime = (parseInt(hours) + 2) + ":" + minutes

        const slotDetails = {
            "coachId" : userId,
            "slotDate" : date,
            "startTime" : startTime,
            "endTime" : endTime
        }

        dispatch(createSlotThunk(slotDetails))
        alert("Added a slot successfully!")
        dispatch(findSlotsByCoachThunk(userId))
    }

    return (
        <div className="container m-5">
            <div className="row">
            <div className="col m-5">
                <h3>Select your Availability</h3>
                <form onSubmit={(e) => addSlotHandler(e)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1">Select Timezone</label>
                        <TimezoneSelect
                            value={selectedTimezone}
                            onChange={setSelectedTimezone}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label for="date">Select Date</label>
                        <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div class="form-group mb-3">
                        <label for="start_time">Start Time</label>
                        <input type="time" className="form-control" id="start_time" value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col m-5">
                <h3>Upcoming Slots</h3>
                {
                    Object.keys(upcomingSlots).map(date => (
                        <div className="upcoming-slot-date mb-3">
                            <p className="mb-1">{date}</p>
                            <div className="slots">
                                {
                                    upcomingSlots[date].map(slot => (
                                        <div className="slot">{slot.start_time.split(":")[0] + ":" + slot.start_time.split(":")[1]}</div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
        </div>
    );
}

export default CalendarComponent