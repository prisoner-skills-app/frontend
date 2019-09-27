import React from 'react';
import { mount, shallow } from 'enzyme';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

//Testing Comopnents
import { Header, CandidateCard, LogIn, NavBar } from './index';

beforeEach(() => {
    jest.resetModules();
});

//Attempting to mock context API
// const withContext = () => {
//     jest.mock();
// }

test('Header snapshot', () => {
    let Dummy = () => <h1>Dummy</h1>;

    let header = render(
        <BrowserRouter>
            <Header
                title={`Test Title \n with line break`}
                direction="column"
                align="center"
                backButton
                dropdown={<Dummy />}
            />
        </BrowserRouter>
    );
    expect(header).toMatchSnapshot();
});

test('Candidate snapshot', () => {
    let candidateCard = render(
        <CandidateCard
            key="asdfasdf"
            name="John Wick"
            description="The best hitman the world has ever seen"
            skills="killing, hitting, not dying"
        />
    );
    expect(candidateCard).toMatchSnapshot();
});

// test('NavBar Snapshot', () => {
//
//     //TODO: Needs to somehow mock the context API for testing
//     let navBar = render(<NavBar />);
//     expect(navBar).toMatchSnapshot();
// });
