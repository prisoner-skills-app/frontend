import React from 'react';

import { Card, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { RowContainer, ColumnContainer } from '../globals/components';

import styled from 'styled-components';

const LargeCard = ({ history, location, match }) => {
    let {
        name,
        description,
        education,
        availability,
        paroleDate,
        skills,
        centerId,
    } = location.state.candidate;

    console.log(location);

    let splitSkills = skills.split(',');

    return (
        <ColumnContainer>
            <Card style={{ width: 400, marginTop: 21 }}>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <ColumnContainer>
                        <RowContainer>
                            <ColumnContainer>
                                <h4>Education</h4>
                                {education}
                            </ColumnContainer>
                            <ColumnContainer>
                                <h4>ParoleDate</h4>
                                {paroleDate}
                            </ColumnContainer>
                        </RowContainer>
                        <h4>Availability</h4>
                        {availability}
                        <RowContainer>
                            <h4>Skills</h4>
                            {splitSkills.map((skill, i) => {
                                return <Label>{skill}</Label>;
                            })}
                        </RowContainer>
                    </ColumnContainer>
                </Card.Content>
                <Card.Content
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        content="Request to Hire"
                        onClick={() => alert('Hiring!')}
                    />
                </Card.Content>
            </Card>
            <Button
                content="close"
                basic
                color="red"
                onClick={() => history.push(`/${centerId}`)}
                style={{ width: 150 }}
            />
        </ColumnContainer>
    );
};

export default LargeCard;
