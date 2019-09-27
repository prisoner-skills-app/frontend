import React, { useState } from 'react';
//Components
import { Form, Icon, Input, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

import { useStateValue } from '../state';

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
    const [{ search }, dispatch] = useStateValue();

    return (
        <MyForm>
            <Form>
                <Form.Field>
                    <Input
                        id="search"
                        value={search}
                        placeholder="Search Skills "
                        color="white"
                        onChange={event =>
                            dispatch({
                                type: 'update_search',
                                payload: event.target.value,
                            })
                        }
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
