import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import * as ReactDOM from 'react-dom';

const StyledProductpage = styled.main`
  margin: 100px;
  display: grid;
  grid-template-areas:
    "big big apple beep"
    "big big candy dog"
    "big big grape grape";
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Products = () => (
  <StyledProductpage>
    <div className="sidebar">
      <Link to="/products">
        <h1>Link to product</h1>
      </Link>
    </div>
    <div className="tile" />
    <div className="tile2" />
    <div className="tile3" />
    <div className="tile4" />
    <div className="tile5" />
    <div className="tile6" />
  </StyledProductpage>
);

export default Products;
