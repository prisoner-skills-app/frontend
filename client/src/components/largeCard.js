//Components
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const ContainerComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  margin: 10vw;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1px;
`;

export const StyledH2 = styled.h2`
  left: 59.38%;
  right: 34.98%;
  padding: 2%;
  top: 36.65%;
  bottom: 60.99%;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5 rem;
  text-shadow: 1px 1px 5px #fff;
  line-height: 19px;
  /* identical to box height, or 106% */
  color: #1b1c1d;
`;
export const Container = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 85%;
  border-radius: 10px;
`;
export const StyleP = styled.p`
  padding: 10px;
`;
const BTN = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  color: white;
  background-color: green;
  margin: 0 auto;
  position: relative;
`;

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://lsbw-liberated-skills.herokuapp.com/api/candidates/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("Bleh!! Error :(");
      });
  };

  useEffect(fetchData, []);

  console.log(data);

  return (
    <div className="App">
      <h2>Candidate Card</h2>
      <div>
        {data.map((candidates, index) => {
          return (
            <Prisoners
              name={candidates.name}
              key={index}
              availability={candidates.availability}
              skills={candidates.skills}
              description={candidates.description}
              education={candidates.education}
              paroleDate={candidates.paroleDate}
            />
          );
        })}
      </div>
    </div>
  );
};

const Prisoners = props => {
  return (
    <ContainerComp>
      <Container>
        <StyledH2>{props.name}</StyledH2>
        <div>
          <StyleP>Availability: {props.availability}</StyleP>
          <StyleP>Skills: {props.skills}</StyleP>
          <StyleP>Description: {props.description}</StyleP>
          <StyleP>ParoleDate: {props.paroleDate}</StyleP>
          <StyleP>Education: {props.education}</StyleP>
          <BTN formTarget = "#">Request to hire {props.name}</BTN>
        </div>
      </Container>
    </ContainerComp>
  );
};

export default App;
