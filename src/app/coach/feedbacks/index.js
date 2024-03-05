import React from "react";
import Feedback from "./feedback";
import "./index.css"
import { useDispatch } from "react-redux";
import { findFeedbacksByUserThunk } from "../../../services/feedbacks/feedback-thunks";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Feedbacks = () => {
    const userDetails = useSelector(state => state.loginData).userDetails
    const userId = userDetails.id
    const feedbacks = useSelector(state => state.feedbackData).feedbacks
    const isLoading = useSelector(state => state.feedbackData).isLoading
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findFeedbacksByUserThunk(userId))
    }, [])

    return (
        <div>
            <div className="container m-5">

                <div className="row">
                    <h3>Feedback Review</h3>
                    <div className="feedback-container col">
                        {
                            !isLoading && (
                                feedbacks.length === 0 ? (
                                    <p>No feedbacks</p>
                                ) : (
                                    feedbacks.map(feedback => (
                                        <Feedback 
                                            date={feedback.date.split("T")[0]}
                                            studentName={feedback.student_name}
                                            rating={feedback.score}
                                            notes={feedback.notes}
                                        />
                                    ))
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedbacks;