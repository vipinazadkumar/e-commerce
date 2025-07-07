import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

export default function Card({basket, setBasket,image,title, price,rating}) {
 
  const addToBasket = () =>{
     setBasket([...basket,{image,title,price,rating}])
  }
   
  return (
    <Container>
      <Image>
        <img
          src={image}
          alt=""
        />
      </Image>
      <Discription>
        <h5>{title}</h5>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
        <p>{price}</p>
        <button onClick={addToBasket}>add to Cart</button>
      </Discription>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;

 
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  img {
    width: 120px;
    height: 120px;
  }
`;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  margin-left: 15px;
   h5{
     font-size: 16px;
     font-weight: 600;
   }
     p{
        font-weight: 600;
     }
     button{
       background-color: #fa8900;   
        width: 100%;
        height:33px;
        border:none;
        border-radius: 10px;
        cursor: pointer;
        margin-right: 12px;
    }
`;
