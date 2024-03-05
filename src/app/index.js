import React, { useState } from "react";
import NavBar from "./navbar";
import StudentApp from "./student";
import CoachApp from "./coach";
import {Routes, Route} from "react-router";

const SchedulingApp = () => {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            
            <div>
                <Routes>
                    <Route path="student/*" element={<StudentApp/>}/>
                    <Route path="coach/*" element={<CoachApp/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default SchedulingApp