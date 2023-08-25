import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import '../Styles/Footer.css';

function Footer() {
  return (
    <div className ="footer">
        <div className ="socialmedia">
        <a href="https://www.linkedin.com/in/muthu-kesavan-s-95425821b/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
        </a> 
        <a href="https://github.com/Muthu-kesavan" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> 
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram /> 
        </a>
        <a href="mailto:ms0826@srmist.edu.in">
                    <EmailIcon />
        </a>
        </div>
        <p>&copy; 2023 All Rights Reserved!</p>
    </div>
  );
}

export default Footer