import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { Attendivisor } from '../adjacer/Attendivisor';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/AttendanceDisplay.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Form from 'react-bootstrap/Form';




function AttendanceDisplay() {
    const { id } = useParams();
    const attendance = Attendivisor[id];

    return (
        <div className="attendance">
            <h1>{attendance.name}</h1>
            <img src={attendance.image} alt={attendance.name} />
            <p><b>ATTENDANCE PORTAL</b></p>
        </div>
    );
}

export default function Register() {
    const navigate = useNavigate();
    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
    };

    const [values, setValues] = useState({
        username: '',
        email: '',
        regno: '',
        year: '',
        
       
    });

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate('/');
        }
    }, []);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { username, email, regno } = values;
        if (username.length < 3) {
            toast.error('Username should be greater than 3 characters.', toastOptions);
            return false;
        } else if (email === '') {
            toast.error('Email is required.',toastOptions);
            return false;
        } else if (!email.endsWith("srmist.edu.in")){
            toast.error('Enter a valid SRM Email Address.',toastOptions);
            return false;
        }else if ( regno.length !== 15) {
            toast.error('Invalid Register No',toastOptions);
            return false;
        } return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
             navigate('/Thanks'); 
        }
    };

    return (
        
        <>
            <FormContainer>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <center><img src={Logo} alt="logo" /></center>
                        <h2>Attendance Portal</h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="username"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="text"
                        placeholder="Your Register No"
                        name="regno"
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder=" Your Official Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                    />
                    <Form.Select aria-label="Default select example">
                        <option>Select your Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth year</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Select The Subject</option>
                        <option value="1">Data Structures</option>
                        <option value="2">Discrete Mathematics</option>
                        <option value="3">Operating System</option>
                        <option value="3">Database Management</option>
                        <option value="3">Minor Project</option>
                    </Form.Select>
                    <FormControl>
                        <FormLabel id="radio-buttons"></FormLabel>
                        <RadioGroup
                        aria-labelledby="radio-buttons"
                        defaultValue="Absent"
                        name="radio-buttons"
                        >
                        <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
                        <FormControlLabel value="Present" control={<Radio />} label="Present" />
                        </RadioGroup>
                    </FormControl>
                    <button type="submit" onClick={() => { 
                        handleValidation();
                        }} >
                            SUBMIT

                    </button>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    );
}

const FormContainer = styled.div`
    height: 115vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    background-color: #21325e;
    .brand {
        display: flex;
        align-items: center;
        color: white;
        gap: 1rem;
        justify-content: center;
        img {
            height: 5rem;
        }
        h1 {
            color: white;
            text-transform: uppercase;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #00000076;
        border-radius: 2rem;
        padding: 3rem 5rem ;
    }
    input {
        background-color: transparent;
        padding: 1rem  0.1rem;
        justify-content: center;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color: white;
        width: 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }
    radio-buttons{
        color:white;
    }

    select {
        display: flex;
        flex-direction: column;
        background-color: #21325e;
        padding: 1rem  0.1rem;
        border: 0.1rem solid #4e0eff;
        border-radius: 0.4rem;
        color:white ;
        width: 100%;
        font-size: 1rem;
        &:focus {
            border: 0.1rem solid #997af0;
            outline: none;
        }
    }
    
    button {
        
        background-color: #21325e;
        color: white;
        padding: 1rem 8rem ;
        border: none;
        font-weight: bold;
        cursor: pointer;
        border-radius: 0.4rem;
        font-size: 1rem;
        text-transform: uppercase;
        &:hover {
            background-color: #e9d35b;
        }
    }
    span {
        color: white;
        text-transform: uppercase;
        a {
            color: #4e0eff;
            text-decoration: none;
            font-weight: bold;
        }
    }
`;
