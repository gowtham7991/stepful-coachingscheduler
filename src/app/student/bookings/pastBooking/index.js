import React from 'react';
import './index.css';

const PastBooking = ({ date, coachName }) => {
    return (
        <div class="card" style={{height: '150px'}}>
            <h5 class="card-header">{date}</h5>
            <div class="card-body">
                <h5 class="card-title">{`Coach Name: ${coachName}`}</h5>                
            </div>
        </div>
    );
};

export default PastBooking;