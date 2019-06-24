import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import * as ReactDOM from 'react-dom';

const StyledFrontpage = styled.main`
  body {
    font-family: "Roboto", sans-serif;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 600px 150px 1fr;
    background-color: lightblue;
    background-image: url("./banner.jpeg");
    background-size: cover;
    grid-template-areas:
      "nav nav nav"
      "nav nav nav";
  }

  li {
    list-style-type: none;
    font-family: Arial, Helvetica, sans-serif;
  }

  li a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    font-size: 17px;
  }

  .right-navbar {
    grid-area: 1 / 3;
  }

  .right-navbar ul {
    display: grid;
    grid-template-columns: 1fr 50px 50px;
    justify-items: end;
  }

  .middle-navbar {
    grid-area: 1 / 2;
  }

  .middle-navbar ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .logo-navbar {
    grid-area: 1 / 1;
  }

  .banner {
    /* display: grid; */
    margin: auto;
    color: white;
    justify-content: center;
    grid-area: 2 /2;
  }

  .banner h1 {
    letter-spacing: 4px;
  }
  .banner-buttons {
    display: block;
    margin: auto;
    max-width: 300px;
    text-align: center;
  }

  .banner-buttons button {
    background-color: #ed1c23;
    color: white;
    border: none;
    padding: 13px 30px;
    font-size: 14px;
    border-radius: 2px;
    font-weight: bold;
    margin-right: 10px;
  }

  .banner-buttons button:first-child {
    background-color: white;
    color: #ed1c23;
    border: none;
    padding: 13px 30px;
    font-size: 14px;
    border-radius: 2px;
  }

  .cards {
    display: grid;
    grid-area: 4 / span 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 450px;
  }

  .category {
    display: grid;
    grid-area: 3 / span 3;
    background-color: #333;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px;
  }

  .category button {
    /* background: linear-gradient(to top, #232526, #414345); */
    background: #1a1a1a;
    border: none;
    color: white;
    font-size: 24px;
  }

  .card {
    margin-top: 40px;
    display: grid;
    grid-template-rows: 3fr 1fr 1fr;
  }

  .card img {
    object-fit: fill;
    height: 100%;
    width: 100%;
  }
`;

const FrontPage = () => (
  <StyledFrontpage>
    <div className="container">
      <div className="right-navbar">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a href="contact.asp">Cart</a>
          </li>
        </ul>
      </div>

      <div className="middle-navbar">
        <ul>
          <li>
            <a href="default.asp">BACKPACKS</a>
          </li>
          <li>
            <a href="news.asp">MESSENGERS</a>
          </li>
          <li>
            <a href="contact.asp">LUGGAGE</a>
          </li>
          <li>
            <a href="about.asp">OUTDOORS</a>
          </li>
          <li>
            <a href="about.asp">COLLECTIONS</a>
          </li>
          <li>
            <a href="about.asp">SALE</a>
          </li>
        </ul>
      </div>

      <div className="logo-navbar" />

      <div className="banner">
        <h1>Inspire adventure in everyone</h1>
        <div className="banner-buttons">
          <button>About Us</button>
          <button>Browse Store</button>
        </div>
      </div>
    </div>

    <div className="category">
      <button>TOP SELLERS</button>
      <button>LATEST COLLECTION</button>
      <button>CLEARANCE SALE</button>
    </div>

    <div className="cards">
      <div className="card">
        <img src="./backpack1.jpeg" />
        <h3>Boss 65 Frame Pack</h3>
        <h3>$25.55</h3>
      </div>

      <div className="card">
        <img src="./backpack1.jpeg" />
        <h3>Boss 65 Frame Pack</h3>
        <h3>$25.55</h3>
      </div>

      <div className="card">
        <img src="./backpack1.jpeg" />
        <h3>Boss 65 Frame Pack</h3>
        <h3>$25.55</h3>
      </div>
      <div className="card">
        <img src="./backpack1.jpeg" />
        <h3>Boss 65 Frame Pack</h3>
        <h3>$25.55</h3>
      </div>
      <div className="card">
        <img src="./backpack1.jpeg" />
        <h3>Boss 65 Frame Pack</h3>
        <h3>$25.55</h3>
      </div>
    </div>
  </StyledFrontpage>
);

export default FrontPage;
