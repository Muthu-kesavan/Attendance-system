import React from "react";
import { useNavigate } from "react-router-dom";

function AttendanceList({ image, name, id }) {
    const navigate = useNavigate();
    return (
        <div className="attendanceList"
        onClick={() => { 
            navigate("/Attendance/"+ id);
        }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
            </div>
    );
}

export default AttendanceList;