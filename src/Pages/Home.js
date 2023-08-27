import React from 'react'
import '../Styles/Home.css'
import Logo from '../assets/logo.png';

function Home() {
  return (
    
    <div className="home">
        <div className="home1">
            <img src={Logo} alt="Srm logo" />
            <h2>WELCOME TO SRM UNIVERSITY</h2>
        <div className="prompt">
            <p>Attendance Marking System</p>
            </div>
        </div>
        <div className="about">
            <h1>About Us</h1>
            <ol className="list">
                <li className="item">
                <h2>ESTABLISHMENT</h2>
                <span>The first college of what is now SRMIST, SRM (Sri Ramaswamy Memorial) Engineering College, was established in 1985, followed by the other SRM colleges from 1992 to 1997. The institute gained deemed status in 2002 as SRM Institute of Science and Technology and renamed SRM University in 2006.</span>
                </li>
                <li className="item">
                    <h2>CAMPUS</h2>
                    <span>
                     Our Campus Located about 35 km (22 mi) away from the city of Chennai, this campus is situated on a 250 acre site overlooking Grand Southern Trunk Road (GST Road), NH-32. The main campus at Kattankulathur consists of a College of Engineering and Technology, College of Medicine and Health Sciences, College of Science and Humanities, School of Management and School of Law. It is also one of the few schools in India that offers a Degree in Telecom studies.
                    </span>
                </li>
                <li className="item">
                    <h2>RANKINGS</h2>
                    <span>
                    The QS World University Rankings ranked SRM Institute of Science and Technology 301–350 in Asia in 2023. SRM Institute of Science and Technology ranked 29th among engineering colleges in India by India Today in 2020. The National Institutional Ranking Framework (NIRF) ranked it 28th in the engineering ranking, 15th in the pharmacy ranking, 18th among universities and 32nd overall in NIRF 2023.
                    </span>
                </li>
            </ol>

        </div>
    </div>
    
  );
}

export default Home