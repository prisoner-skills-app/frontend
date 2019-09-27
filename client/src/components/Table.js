import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useStateValue } from '../state';

const TableCreation = ({ prisons = null }) => {
    const [{ state }, dispatch] = useStateValue();

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
                    prisons
                        .filter(p => {
                            if (state) {
                                return p.state == state;
                            }
                            return p;
                        })
                        .map(prison => {
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
