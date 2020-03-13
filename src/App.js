import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header2'
import Footer from './components/Footer/Footer'
import Mainpage from './components/MainPage/Mainpage';


const App = () => {
  
  return (
         <div>
          <Header/>
          <Mainpage/>
          {/* <Footer/> */}
         </div>
       

  
  );
}



export default connect () (App);
