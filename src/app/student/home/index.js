import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentHome = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const userRole = userDetails.role

    return (
        <div className="container">
            <h1>{`Hi, ${userDetails.name}`}</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div class="col card">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-calendar" aria-hidden="true"></i><span className="ms-2">Book a slot</span></h5>
                            <p class="card-text">Find upcoming slots by date, coach and time and reserve.</p>
                            <Link to={`/app/${userRole.toLowerCase()}/slots`}>
                                Book
                            </Link>
                        </div>
                    </div>
                    <div class="col card">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-book" aria-hidden="true"></i><span className="ms-2">Bookings</span></h5>
                            <p class="card-text">Find your upcoming bookings, past bookings and view feedback.</p>
                            <Link to={`/app/${userRole.toLowerCase()}/bookings`}>
                                Bookings
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div class="col card">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-comments" aria-hidden="true"></i><span className="ms-2">Feedbacks</span></h5>
                            <p class="card-text">Find your previous feedbacks, score and notes</p>
                            <Link to={`/app/${userRole.toLowerCase()}/`}>
                                Feedbacks
                            </Link>
                        </div>
                    </div>
                    <div class="col card">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fa fa-user" aria-hidden="true"></i><span className="ms-2">Profile</span></h5>
                            <p class="card-text">Visit your profile</p>
                            <Link to={`/app/${userRole.toLowerCase()}/`}>
                                Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentHome