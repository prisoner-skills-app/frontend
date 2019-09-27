import React, { useState } from 'react';
//Components
import { Form, Icon, Input, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const MyForm = styled.div`
    max-width: 400px;
    margin: 20px;
    #search {
        background-color: transparent;
        ::placeholder {
            color: white;
        }
    }
    .ui.form input[type='text'] {
        color: white;
        border: 1px solid white;
        font-size: 1rem;
    }
`;

const SearchBar = () => {
    const [skill, setSkill] = useState('');

    return (
        <MyForm>
            <Form>
                <Form.Field>
                    <Input
                        id="search"
                        value={skill}
                        placeholder="Search Skills "
                        color="white"
                        onChange={event => setSkill(event.target.value)}
                        action={{
                            color: '#ffffff',
                            labelPosition: 'right',
                            icon: 'search',
                            content: 'Submit',
                        }}
                    />
                </Form.Field>
            </Form>
        </MyForm>
    );
};

export default SearchBar;
