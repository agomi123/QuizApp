import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const mystyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '1px'
      };
    return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; Himanshu Gupta</h4>
      <p className="text-center mt-3">
        <Link to="/QuizApp/about">About</Link>|
        <Link to="/QuizApp/contact">Contact</Link>|
        <Link to="/QuizApp/policy">Privacy Policy</Link>
      </p>
      <div style={mystyle}>
      <a href="https://www.instagram.com/gupta_3385" target="blank">
        <i class="bi bi-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/himanshudevop" target="blank">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="mailto:himanshugupta3385@email.com" target="blank">
        <i class="bi bi-envelope"></i>
      </a>
      <a href="https://www.github.com/agomi123" target="blank">
        <i class="bi bi-github"></i>
      </a>
    </div>
      </div>
  );
};

export default Footer;
