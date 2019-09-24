import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom"

const Banner = styled.header`

  background-image: url("http://www.bara-art.com/wp-content/uploads/2016/07/building_roof.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px){
    background-position: 0% 30%;
  }

  @media(max-width:500px){
    background-position: 0% 45%
  }

  overflow-x: hidden;
  text-align: center;
  font-size: 2em;
  color: white;
  height:200px;  
`;

const Header = props => (
  <Banner>
    {props.title}
    {props.subtitle}
    <p>Prisoner Skills believes in every prisoner’s future.</p>
    <p>Thank you for helping</p>    
  </Banner>
);
export default withRouter (Header);
