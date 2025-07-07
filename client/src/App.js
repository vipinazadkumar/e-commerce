import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import styled from 'styled-components'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

function App() {

  const [basket ,setBasket] = useState([])
  console.log("basket >>> ", basket);
  
  return (
    <Router>
        <Container>
           <Routes>
            <Route path='/' element={<Home basket ={basket} setBasket= {setBasket}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
           </Routes>
        </Container>
    </Router>

  );
}

const Container = styled.div`

`
export default App;
