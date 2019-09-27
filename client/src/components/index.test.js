import React from 'react';
import { mount, shallow } from 'enzyme';
import { Header } from './index';

test('Header snapshot', () => {
    let Dummy = () => <h1>Dummy</h1>;

    let header = mount(
        <Header
            title={`Test Title \n with line break`}
            direction="column"
            align="center"
            backButton
            dropdown={<Dummy />}
        />
    );
    expect(header).toMatchSnapshot();
});
