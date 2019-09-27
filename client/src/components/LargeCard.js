import React from 'react';

import { Card, Label, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { RowContainer, ColumnContainer } from '../globals/components';

import styled from 'styled-components';

const LargeCard = props => {
    let {
        name,
        description,
        education,
        availability,
        paroleDate,
        skills,
        centerId,
        history,
        location,
        match,
        noButton = false,
    } = props;

    if (location && location.state) {
        name = location.state.candidate.name;
        description = location.state.candidate.description;
        education = location.state.candidate.education;
        availability = location.state.candidate.availability;
        paroleDate = location.state.candidate.paroleDate;
        skills = location.state.candidate.skills;
        centerId = location.state.candidate.centerId;
    }

    console.log(location);

    let splitSkills = skills && skills.split(',');

    return (
        <ColumnContainer>
            <Card style={{ width: 400 }}>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
                <Card.Content>
                    <ColumnContainer>
                        <RowContainer justify="space-between">
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
                            {splitSkills &&
                                splitSkills.map((skill, i) => {
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
                        color="green"
                        onClick={() => alert('Hiring!')}
                    />
                </Card.Content>
            </Card>
            {!noButton && (
                <Button
                    content="close"
                    basic
                    color="red"
                    onClick={() => history.push(`/${centerId}`)}
                    style={{ width: 150 }}
                />
            )}
        </ColumnContainer>
    );
};

export default LargeCard;
