import React, { useState } from 'react';
//Components
import { ColumnContainer, RowContainer } from '../../globals/components';
import { Header, CandidateCard } from '../../components';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Home = () => {
    return (
        <ColumnContainer>
            <Header
                title={'Find Your Next Employee. \n Help Your Community'}
                size="4em"
                direction="column"
                align="center"
                subtitle={
                    <div style={{ marginTop: 20 }}>
                        <Button
                            as={Link}
                            to="/candidates"
                            color="white"
                            content="Explore Candidates"
                        />
                        <Button
                            as={Link}
                            to="/prisons"
                            color="white"
                            content="Explore Prisons"
                        />{' '}
                    </div>
                }
            />
            <ColumnContainer padding="3em" align="center">
                <h2>Find the right person, for the right job!</h2>
                <p style={{ textAlign: 'center' }}>
                    We are Regain, an organization that focuses on assisting
                    incarcerated individuals with rehabilitation through job
                    employment during their sentences. Many times prisons are
                    heavily populated with people, and oftentimes these people
                    have valuable skills that can be of use to one's community.
                    Inmates with low threat levels/good behaviour can be given
                    the option to participate in this program. Employers with a
                    job they need done can then browse through candidates with
                    relative skills to the employers job and hire that
                    individual. Just because someone has ended up in prison does
                    not necessarily render them useless or unimportant to the
                    community. There are many tasks out there that these
                    prisoners more than capable of doing right.
                </p>
            </ColumnContainer>
            <ColumnContainer padding="3em" align="center">
                <h2>Top Candidates</h2>
                <RowContainer justify="flex-start">
                    <div>
                        <CandidateCard
                            key={0}
                            name="Juan Hernandez"
                            description="The most amazing fiddler I've ever heard! He can play the fiddle like the Devil went down to Georgia! I'd hire him for any event that needs a good fiddler."
                            skills={'Fiddler, violin, music'}
                            actions={
                                <Button
                                    content={`View more about Juan`}
                                    color="green"
                                />
                            }
                        />
                    </div>
                    <CandidateCard
                        key={0}
                        name="Helga Dubbery"
                        description="I've never seen a woman be as persuasive as Helga can be! She's truly another type of person! If you need her for sales, she'll convince anyone they need your product."
                        skills={'Sales, Phone Calls'}
                        actions={
                            <Button
                                content={`View more about Helga`}
                                color="green"
                            />
                        }
                    />
                    <CandidateCard
                        key={0}
                        name="Franky Nunez"
                        description="Franky is a different type of smart. While he's not the most street smart, he know more about accouting than even CPA's I've met."
                        skills={'Accounting, CPA'}
                        actions={
                            <Button
                                content={`View more about Franky`}
                                color="green"
                            />
                        }
                    />
                </RowContainer>
            </ColumnContainer>
        </ColumnContainer>
    );
};

export default Home;
