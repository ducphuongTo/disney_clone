
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import React from 'react'
import Viewers from './Components/Viewers';
import Movies from './Components/Movies';
import {Routes, Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Detail from './Components/Detail';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path='/detail' element = {<Detail/>}></Route>
          <Route exact path='/' element = {<Home/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
        </Routes>
      </Router>
  

      

      {/* <Viewers/>
      <Movies/> */}
    </div>
  );
}

export default App;
