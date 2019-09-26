import React, { useState } from "react";
//Components
import { ColumnContainer } from "../../globals/components";
import { Header } from "../../components";
import { Form, Icon, Input, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import faker from "faker";
import _ from "lodash";
import { isAbsolute } from "path";
import "semantic-ui-css/semantic.min.css";

const MyForm = styled.div`
  width: 600px;
  margin: 20px;
  #search {
    background-color: transparent;
    ::placeholder {
      color: white;
    }
  }
  .ui.form input[type="text"] {
    color: white;
    border: 1px solid white;
    font-size: 1rem;
  }
`;

const List = styled.header`
  overflow: none;
`;

const SearchBar = () => {
  const [skill, setSkill] = useState("");

  return (
    <MyForm>
      <Form>
        <Form.Field>
          <Input
            id="search"
            value={skill}
            placeholder=" ⍰ Search Skills "
            color="white"
            onChange={event => setSkill(event.target.value)}
            action={{
              color: "#ffffff",
              labelPosition: "right",
              icon: "search",
              content: "Search"
            }}
          />
        </Form.Field>
      </Form>
    </MyForm>
  );
};

const addressDefinitions = faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index]
}));

const DropDown = () => (
  //<List>
  <Dropdown placeholder="State" search selection options={stateOptions} />
  //</List>
);

const Home = () => {
  return (
    <ColumnContainer>
      <Header
        title="All Candidates"
        searchBar={<SearchBar />}
        dropDown={<DropDown />}
      />
    </ColumnContainer>
  );
};

export default Home;
