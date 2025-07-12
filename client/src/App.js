import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import styled from 'styled-components'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Address from './Components/Address';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';

function App() {

  return (
    <Router>
        <Container>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
             <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/address' element={<Address/>}/>
             <Route path='/payment' element={<Payment/>}/>
           </Routes>
        </Container>
    </Router>

  );
}

const Container = styled.div`

`
export default App;
