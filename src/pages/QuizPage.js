import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import toast from "react-hot-toast";
import { UseUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Result from "./Result";
import Progress from "../Components/Progress";
import CircluarButton from "./CircluarButton";
import ColoredButton from "./ColoredButton";
const QuizPage = () => {
  const {
    questions,
    setQuestions,
    finalasnwer,
    setFinalAnswr,
    setScore,
    time,
    intervalId,
    percent,
    setPercent
  } = UseUserContext();
  // const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [btn, setBtn] = useState("Next");
  let [Vis,setVis]=useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  // const [finalasnwer, setFinalAnswr] = useState([]);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=15")
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res?.results);
        const x=questions.map((item,index)=>(
          <CircluarButton value={index+1}/>
        ))
        setVis(x);
      });

  }, []);

   const makeVis= (indexx)=>{
    console.log(Vis);
    const newArray = [...Vis];
    console.log(newArray);
    // Modify the i-th element
    newArray[indexx] = <ColoredButton value={indexx+1}/>;
    console.log(newArray);
    setVis(newArray);
   };
  const handleNext = (e) => {
    makeVis(count);
    // console.log("ffffff");
    // if (value === "") {
    //   toast.error("Answer is Required");
    //   return;
    // }
    if (value !== "") {
      setFinalAnswr([...finalasnwer, value]);
     
      setValue("");
      var x = 0;
      for (var i = 0; i < 15; i++) {
        if (questions[i].correct_answer === finalasnwer[i]) {
          x++;
        }
      }
      setScore(x);
    }

    if (count < 14) {
      setPercent(percent+Math.floor(100 / 15));
      setCount(count + 1);
      return;
    } else {
      setBtn("Submit");
      setPercent(0);
      setPercent(percent+Math.floor(100 / 15));
      alert("Congratulation! Your Quiz has been Submitted. View Your Score");
      navigate("/QuizApp/result");
    }
  };

  const onRadioChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <>
      {time.min !== 30 ? (
        <Layout>
          <div className="row">
          <div className="col-md-5 ml-2">
            <div className="card m-3 p-3">
            <div className="center">
             <h2> Current Time:</h2>
             <h3>  MM:SS:: {time.min}:{time.sec}</h3>
            </div>
           <h3> Total Time: 30:00</h3>
            <Progress />
            </div>
          </div>
          <div className="col-md-5">
              <div className="d-flex flex-wrap m-3 p-2">
               { questions.map((item,index)=>(
                  <CircluarButton value={index+1}/>
                ))}
              </div>
            </div>
          </div>
          {questions && questions.length > 0 ? (
            <div className="center card m-3 p-3">
              <p>
                Question {count + 1}: {questions[count].question}
              </p>
              <ul>
                <l1>
                  <label>
                    <input
                      type="radio"
                      value={questions[count].correct_answer}
                      checked={value === questions[count].correct_answer}
                      onChange={onRadioChange}
                    />
                    <span>{questions[count].correct_answer}</span>
                  </label>
                </l1>
                <br />
                {questions[count].incorrect_answers?.map((e) => (
                  <>
                    <l1>
                      <label>
                        <input
                          type="radio"
                          value={e}
                          checked={value === e}
                          onChange={onRadioChange}
                        />
                        <span>{e}</span>
                      </label>
                    </l1>
                    <br />
                  </>
                ))}
              </ul>
            </div>
          ) : (
            <></>
          )}

          <button
            className="btn btn-danger m-3 btn-lg"
            onClick={() => {
              handleNext();
            }}
          >
            {btn}
          </button>
        </Layout>
      ) : (
        <>
        {clearInterval(intervalId)}
          <Result />
        </>
      )}
    </>
  );
};

export default QuizPage;
