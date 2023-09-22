import { useContext, createContext, useState } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [finalasnwer, setFinalAnswr] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState({ min: 0, sec: 0,ms:0 });
  const [intervalId, setIntervalId] = useState(null);
  const [percent,setPercent]=useState(0);
  var updateMin = time.min, updatedSec = time.sec,updatedms=time.ms;
  
  const startTimer= ()=>{
    run();
    setIntervalId(setInterval(run,10));
    // const id= setInterval(run,1000);
    // setIntervalId(id);
  }
  const run= ()=>{
    if(updatedSec===60){
        updateMin++;
        updatedSec=0;
    }
    if(updatedms===60){
        updatedSec++;
        updatedms=0;
    }
    updatedms++;
    return setTime({min:updateMin,sec:updatedSec});
  }

  return (
    <UserContext.Provider
      value={{
        questions,
        setQuestions,
        finalasnwer,
        setFinalAnswr,
        score,
        setScore,
        startTimer,
        time,
        intervalId,
        percent,
        setPercent
       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  const {
    questions,
    setQuestions,
    finalasnwer,
    setFinalAnswr,
    score,
    setScore,
    startTimer,
    time,
    intervalId,
    percent,
    setPercent
   
  } = useContext(UserContext);
  return {
    questions,
    setQuestions,
    finalasnwer,
    setFinalAnswr,
    score,
    setScore,
    startTimer,
    time,
    intervalId,
    percent,
    setPercent
  
  };
};

export default UserContextProvider;
