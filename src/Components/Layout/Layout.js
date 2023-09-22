import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet';
// import {ToastContainer} from 'react-toastify';
import {Toaster} from 'react-hot-toast';
const Layout = (props) => {
  return (
    <div > 
      <Helmet>
      <meta charSet='utf-8'/>
      <meta name='description' content={props.description}/>
      <meta name='keywords' content={props.keywords}/>
      <meta name='author' content={props.author}/>
      <title>{props.title}</title>
      </Helmet>
        <Header/>
        <main style={{minHeight:'70vh', marginTop:"80px"}}>
          <Toaster/>
        {props.children}
        </main>
        <Footer/> 
    </div>
  )
}

Layout.defaultProps={
  title:'Quiz App',
  description:'Quiz App',
  keywords:'Quiz',
  author:'Himanshu Gupta'
}

export default Layout
