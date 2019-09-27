import React, { useState } from 'react';
//Components
import { Dropdown } from 'semantic-ui-react';
import faker from 'faker';
import _ from 'lodash';

import { useStateValue } from '../state';

const addressDefinitions = faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
}));

stateOptions.unshift({ key: '', text: '', value: '' });

const DropDown = () => {
    const [{ state }, dispatch] = useStateValue();

    return (
        <Dropdown
            placeholder="Search States"
            selection
            options={stateOptions}
            value={state}
            onChange={(e, { value }) => {
                dispatch({
                    type: 'update_state',
                    payload: value,
                });
            }}
            style={{
                borderRadius: 5,
            }}
        />
    );
};

export default DropDown;
