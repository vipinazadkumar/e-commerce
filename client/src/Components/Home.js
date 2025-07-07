import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";

export default function Home({ basket, setBasket }) {
  return (
    <Container>
      <Navbar basket = {basket} />
      <Banner>
        <img src="./banner.webp" alt="" />
        <img src="./banner2.jpg" alt="" />
      </Banner>
      <Main>
        <Card
          basket={basket}
          setBasket={setBasket}
          image={"https://m.media-amazon.com/images/I/71Wq67q-4VL._SL1500_.jpg"}
          price={50000}
          rating={5}
          title={"Apple AirPods Max Wireless Over-Ear Headphones"}
        />
        <Card
          basket={basket}
          setBasket={setBasket}
          image={"https://m.media-amazon.com/images/I/61oCISLE+PL._SL1500_.jpg"}
          price={19000}
          rating={4.5}
          title={"Apple AirPods Max Wireless Over-Ear Headphones"}
        />
        <Card
          basket={basket}
          setBasket={setBasket}
          image={"https://m.media-amazon.com/images/I/7199EhD4w8L._SX522_.jpg"}
          price={1600}
          rating={4}
          title={"Apple AirPods Max Wireless Over-Ear Headphones"}
        />
        <Card
          basket={basket}
          setBasket={setBasket}
          image={"https://m.media-amazon.com/images/I/51aXvjzcukL._SL1500_.jpg"}
          price={29990}
          rating={4.5}
          title={"Apple AirPods Max Wireless Over-Ear Headphones"}
        />
         <Card
          basket={basket}
          setBasket={setBasket}
          image={"https://m.media-amazon.com/images/I/61dgl2srHDL.jpg"}
          price={9999}
          rating={4.5}
          title={"Apple AirPods Max Wireless Over-Ear Headphones"}
        />
      </Main>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
`;
const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  @media only screen and (mix-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
`;
