import React, { useEffect, useState } from "react";
import { UseUserContext } from "../context/UserContext";
import Layout from "../Components/Layout/Layout";



const Result = () => {

  const checkedSuccess= (x)=>{
    return <div className="m-1">
  <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" defaultChecked checked disabled/>
  <label className="btn btn-outline-success" htmlFor="success-outlined">{x}</label>
</div>
  }
  const UncheckedSuccess= (x)=>{
    return <div className="m-1">
  <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" disabled />
  <label className="btn btn-outline-success" htmlFor="success-outlined">{x}</label>
</div>
  }
  const checkWrong =(x)=>{
    return <div className="m-1">
  <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" defaultChecked checked disabled/>
  <label className="btn btn-outline-danger" htmlFor="danger-outlined">{x}</label>
</div>
  }
  const defaulwale= (x)=>{
    return <div className="m-1">
  <input type="checkbox" className="btn-check" id="btn-check-2-outlined" checked autoComplete="off" disabled />
  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined">{x}</label><br />
</div>

  }
  //   <div key={index}>
  //   <p>{item1}</p>
  //   <p>{questions[index]}</p>
  // </div>
  const { questions, finalasnwer, score } = UseUserContext();
  const renderedItems = finalasnwer.map((item1, index) => (
    <>
    {
     questions &&  index < questions.length ? (
        <div className="card m-2 p-1" style={{width:"18rem"}}>
      <p>Question {index+1}: {questions[index].question}</p>
      {
        item1==questions[index].correct_answer?( UncheckedSuccess(item1)):(checkedSuccess(item1))
      }
      {questions[index].incorrect_answers.map((e) => (
        <>
          {
            e == item1 ? (checkWrong(item1)):(defaulwale(item1))
          }
        </>
      ))}
    </div>
    ):
    (<></>)

      }
    </>
  ));

  return (
    <Layout>
      <div className="card ms-5" style={{width:"18rem"}}>
         <div className="card-body">
            <div className="card-title"><b>Quiz Result</b></div>
            <div className="card-description">
            <p>Score: {score}</p>
      <p>Registered Name: {localStorage.getItem("name")}</p>
      <p>Registered Email: {localStorage.getItem("email")}</p>
            </div>
         </div>
      </div>
     
      <div className="d-flex flex-wrap m-3">
      {renderedItems}
      </div>
      
    </Layout>
  );
};

export default Result;
