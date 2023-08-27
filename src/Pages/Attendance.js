import React from 'react'
import AttendanceList from '../Components/AttendanceList'
import { Attendivisor } from '../adjacer/Attendivisor'
import "../Styles/Attendance.css"
function Attendance() {
  return (
    <div className="attendance">
      <h1></h1>
      <div className="attendivisor">
        { Attendivisor.map((attendance, idx) => {
          return(
            <AttendanceList id={idx} name={attendance.name} image={attendance.image}/>
          )
        })}
      </div>
    </div>
  );
}

export default Attendance;