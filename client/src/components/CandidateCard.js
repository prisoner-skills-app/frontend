import React from 'react';

import { Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const CandidateCard = ({ name, description, skills, actions }) => {
    let splitSkills = skills && skills.split(',');

    return (
        <Card
            style={{
                height: 300,
                maxWidth: 280,
                marginBottom: 20,
                marginRight: 30,
            }}
        >
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {description && description.slice(0, 200)}
                </Card.Description>

                <h4>Skills</h4>
                {splitSkills &&
                    splitSkills.map((skill, i) => {
                        return <Label>{skill}</Label>;
                    })}
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
