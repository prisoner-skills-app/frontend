import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const TableCreation = ({ prisons = null }) => {
    return (
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Prison Name</Table.HeaderCell>
                    <Table.HeaderCell>State</Table.HeaderCell>
                    <Table.HeaderCell>City</Table.HeaderCell>
                    <Table.HeaderCell>Contact</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {prisons &&
                    prisons.map(prison => {
                        return (
                            <Table.Row>
                                <Table.Cell>
                                    <Link to={`/${prison.id}`}>
                                        {prison.name}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>{prison.state}</Table.Cell>
                                <Table.Cell>{prison.city}</Table.Cell>
                                <Table.Cell>{prison.phone}</Table.Cell>
                            </Table.Row>
                        );
                    })}
            </Table.Body>
        </Table>
    );
};

export default TableCreation;
