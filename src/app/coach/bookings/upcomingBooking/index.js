import React from 'react';
import './index.css';


const UpcomingBooking = ({ date, startTime, studentName, phoneNumber }) => {

    return (
        <div className="card">
            <h5 className="card-header">{date}</h5>
            <div className="card-body">
                <h5 className="card-title">{`Student Name: ${studentName} (${phoneNumber})`}</h5>
                <p className="card-text">{`Starts at ${startTime}`}</p>
            </div>
        </div>
    );
};

export default UpcomingBooking;