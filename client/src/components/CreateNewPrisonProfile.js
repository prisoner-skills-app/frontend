import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewPrisoner = styled.button`
  @media (max-width: 500px) {
    display: none;
  }
  height: 293px;
  width: 248px;
  border-color: silver;
  font-size: 1.2rem;
  cursor: pointer;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 1px solid silver;
  text-shadow: 0px 0px 0px transparent;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: silver;
  p {
    margin-top: 130px;
    color: silver;
    border: 1px solid silver;
    width: 25px;
  }
`;

const Box = styled.h3`
  margin: 30px;
  margin-top: 120px;
`;

const CreateNewPrisonProfile = () => {
  return (
    <div>
      <Box>
        <h3>Candidate Profiles</h3>
      </Box>
      <Link to="/me/create-profile">
        <NewPrisoner>
          <p>+</p>
          <text>Create New</text>
          <text>Prisoner Profile</text>
        </NewPrisoner>
      </Link>
    </div>
  );
};

export default CreateNewPrisonProfile;
