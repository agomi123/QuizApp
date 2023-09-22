import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Instruction from "./pages/Instruction";
import Result from "./pages/Result";
import { Toaster } from "react-hot-toast";
import QuizPage from "./pages/QuizPage";
import UserContextProvider from "./context/UserContext";
// import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/QuizApp" element={<StartPage />} />
        <Route path="/QuizApp/instruction" element={<Instruction />} />
        <Route path="/QuizApp/quiz" element={<QuizPage />} />
        <Route path="/QuizApp/result" element={<Result />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
