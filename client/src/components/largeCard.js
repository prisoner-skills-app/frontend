import React from 'react';

import { Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { RowContainer, ColumnContainer } from '../globals/components';

import styled from 'styled-components';

const CandidateCard = ({
    name,
    description,
    skills,
    education,
    availability,
    paroleDate,
    actions,
}) => {
    let splitSkills = skills.split(',');

    return (
        <Card style={{ height: 300 }}>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Card.Content>
                <ColumnContainer>
                    <Card.Description>{description}</Card.Description>
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
                    <h4>Skills</h4>
                    {splitSkills.map((skill, i) => {
                        return <Label>{skill}</Label>;
                    })}
                </ColumnContainer>
            </Card.Content>
            <Card.Content
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {actions}
            </Card.Content>
        </Card>
    );
};

export default CandidateCard;
