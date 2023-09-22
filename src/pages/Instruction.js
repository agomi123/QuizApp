import React from "react";
import Layout from "../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/UserContext";
const Instruction = () => {
  const navigate =useNavigate();
  const {startTimer}=UseUserContext();

  return (
    <Layout>
      <div className="m-3">
      <h1>Instruction To Play the Quiz</h1>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">Quiz will be consist will of 15 Question from Different Sections.</li>
        <li class="list-group-item">Total 30 minutes will be given to complete the Quiz</li>
        <li class="list-group-item">Quiz will be Auto Saved and Submited after Timeout</li>
        <li class="list-group-item">Score and Answer will be revealed after the completion of Quiz.</li>
        <li class="list-group-item">User cannot go back after submiting any answer</li>
      </ol>
      <button  className='btn btn-primary' onClick={()=>navigate('/')}>Back</button>
      <Link  className='btn btn-warning m-3' to='/quiz' onClick={startTimer}>Start</Link>
    
      </div>
      
    </Layout>
  );
};

export default Instruction;
