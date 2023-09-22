import React,{useState} from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Layout from "../Components/Layout/Layout";
// import { UseUserContext } from "../context/UserContext";
const StartPage = () => {
  // const {msg}= UseUserContext();
  // console.log(msg+"ggg");
  const [name,setName]=useState("");
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email)
    {
      toast.error('All field Required')
    
      return;
    }
    localStorage.setItem('email',email);
    localStorage.setItem('name',name);
     navigate('/instruction')
  };
  return (
    <Layout>
      <main className='center' style={{ minHeight: "70vh" }}>
        <div className="register">
       
          <h1>WelCome To Quiz Game</h1>
          <h3>Fill up the Details and Proceed to Attempt the Quiz</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-sm">
              Proceed
            </button>
          </form>
        </div>
      </main>

      
    </Layout>
  );
};

export default StartPage;
