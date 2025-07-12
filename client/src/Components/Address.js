import React, { useState } from "react";
import styled from "styled-components";
import {useNavigate } from 'react-router-dom'
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
export default function Address() {

     const [{},dispatch] = useStateValue();

     const [fullName,setFullName] = useState('');
     const [Phone,setPhone] = useState('');
     const [flat,setflat] = useState('');
     const [area,setarea] = useState('');
     const [landmark,setlandmark] = useState('');
     const [city,setcity] = useState('');
     const [state,setstate] = useState('');
     
     const navigate = useNavigate();

     const deliver =(e)=>{
       e.preventDefault();

       dispatch({
        type: "SET_ADDRESS",
        item:{
          fullName,
          Phone,
          flat,
          area,
          city,
          state
        }
       })
       navigate('/payment')
     }
  return (
     
    <Container>
      <Navbar/>
      <Main>
        <FromContainer>
          <InputContainer>
            <p>Full Name</p>
            <input type="text" placeholder="xyz azad" onChange={(e)=> setFullName(e.target.value)} value={fullName}/>
          </InputContainer>
          <InputContainer>
            <p>Phone number</p>
            <input type="text" onChange={(e)=> setPhone(e.target.value)} value={Phone}/>
          </InputContainer>
          <InputContainer>
            <p>Flat, house , building number</p>
            <input type="text"  onChange={(e)=> setflat(e.target.value)} value={flat}/>
          </InputContainer>
          <InputContainer>
            <p>Area, Colony, street</p>
            <input type="text" onChange={(e)=> setarea(e.target.value)} value={area} />
          </InputContainer>
          <InputContainer>
            <p>LandMark</p>
            <input type="text" onChange={(e)=> setlandmark(e.target.value)} value={landmark} />
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input type="text" onChange={(e)=> setcity(e.target.value)} value={city} />
          </InputContainer>
          <InputContainer>
            <p>State/Province</p>
            <input type="text" onChange={(e)=> setstate(e.target.value)} value={state} />
          </InputContainer>

          <button onClick={deliver}>Deliver to this Address</button>
        </FromContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;

  margin: auto;
  background-color: rgb(224,237,237);
  position : relative;
`;

const Main = styled.div`
  padding: 15px; 
`;

const FromContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button{
     align-self: flex-start;
     height: 33px;
     width: 250px;
     margin-top: 20px;
     background-color: #ffa32a;
     border: none;
     outline: none;
     border-radius: 5px;
     cursor: pointer;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weigt: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border: 1px solid lightgray;
    margin-top: 1px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;