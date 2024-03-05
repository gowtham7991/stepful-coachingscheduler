import React, { useState } from 'react';
import './index.css';
import Modal from "react-modal"
import { useDispatch } from 'react-redux';
import { findFeedbacksByUserThunk, postFeedbackThunk } from '../../../../services/feedbacks/feedback-thunks';

const PastBooking = ({id, date, studentName}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState('1');
    const [notes, setNotes] = useState('')
    const dispatch = useDispatch()

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSelectChange = (event) => {
        setRating(event.target.value)
      };
    
    const handleTextareaChange = (event) => {
        setNotes(event.target.value);
      };

    const postFeedbackHandler = (e) => {
        e.preventDefault()
        const details = {
            "bookingId" : id,
            "score" : rating,
            "notes" : notes
        }
        dispatch(postFeedbackThunk(details))
        closeModal()
        alert("Feedback posted!")
    }

    return (
        <div class="card">
            <h5 class="card-header">{date}</h5>
            <div class="card-body">
                <h5 class="card-title">{`Student Name: ${studentName}`}</h5>
                
                <button onClick={openModal} className='btn btn-primary p-2'>Give Feedback</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    style={{
                        overlay : {
                            height: '500px',
                            width : '500px',
                            top : '25%',
                            left : '35%',
                        }
                    }}
                >
                    <button type="button" class="btn-close" aria-label="Close" onClick={closeModal}></button>
                    <form onSubmit={(e) => postFeedbackHandler(e)}>
                        <div class="form-group mb-3">
                            <label for="exampleFormControlSelect1">Satisfaction Score</label>
                            <select class="form-control" id="exampleFormControlSelect1" value={rating} onChange={(e) => handleSelectChange(e)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div class="form-group mb-3" style={{height : '150px'}}>
                            <label for="exampleFormControlTextarea1">Notes</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value={notes} onChange={(e) => handleTextareaChange(e)}></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default PastBooking;