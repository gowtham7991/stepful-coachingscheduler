import React from 'react';
import './index.css';

const UpcomingBooking = ({ date, startTime, coachName, phoneNumber }) => {
    return (
        <div className="card" style={{height: '150px'}}>
            <h5 className="card-header">{date}</h5>
            <div className="card-body">
                <h5 className="card-title">{`Coach Name: ${coachName} (${phoneNumber})`}</h5>
                <p className="card-text">{`Starts at ${startTime}`}</p>
            </div>
        </div>
    );
};

export default UpcomingBooking;