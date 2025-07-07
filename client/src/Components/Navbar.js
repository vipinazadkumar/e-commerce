import React from "react";
import styled from "styled-components";

export default function Navbar({basket}) {
  return (
    <Container>
      <Inner>
        <Logo>
          <img src="./Amazon-Logo1.png" alt="" />
        </Logo>
        <SearchBar>
          <input type="text" placeholder="Search..." />
          <SearchIcon>
            <img src="./search.png" alt="" />
          </SearchIcon>
        </SearchBar>
        <RightContainer>
          <NavButton>
            <p>Hello <br/> Guest
            </p>
            {/* <p>Guest</p> */}
          </NavButton>
          <NavButton>
            <p>return & <br/> Order</p>
            {/* <p>Order</p> */}
          </NavButton>
          <BasketBotton>
            <img src="./cart.png" alt="" />
            <p>{basket.length}</p>
          </BasketBotton>
        </RightContainer>
      </Inner>
      <MobileSearchBar>
        <input type="text" placeholder="Search..." />
        <SearchIcon>
          <img src="./search.png" alt="" />
        </SearchIcon>
      </MobileSearchBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const MobileSearchBar = styled.div`
  height: 35px;
  width: 90px;
  diplay: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::palceholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;
const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-item: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
    margin-right: 10px;
   line-height: 1.2;

  p {
    &::nth-child(1) {
      font-size: 12px;
    }

    &::nth-child(2) {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
const BasketBotton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  img {
    width: 55px;
    margin-right: 1px;
    margin-top: 20px;
  }

  p {
    color: #fff;
    font-weight: 500;
    margin-right: 12px;
  }
`;
