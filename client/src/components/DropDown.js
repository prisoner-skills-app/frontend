import React, { useState } from 'react';
//Components
import { Dropdown } from 'semantic-ui-react';
import faker from 'faker';
import _ from 'lodash';

const addressDefinitions = faker.definitions.address;
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
}));

const DropDown = () => (
    //<List>
    <Dropdown
        placeholder="Search States"
        search
        selection
        options={stateOptions}
    />
    //</List>
);

export default DropDown;
