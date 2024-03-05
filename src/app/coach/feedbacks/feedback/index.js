import React from "react";

const Feedback = ({date, studentName, rating, notes}) => {
    return (
        <div>
            <div className="card">
            <h5 className="card-header">{date}</h5>
            <div className="card-body">
                <h5 className="card-title">{`Student Name: ${studentName}`}</h5>
                <h5 className="card-title">{`Satisfaction Score : ${rating}`}</h5>
                <p className="card-text">{`Notes : ${notes}`}</p>
            </div>
        </div>
        </div>
    );
}

export default Feedback;