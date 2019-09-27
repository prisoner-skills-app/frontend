import React from 'react'
import { Table } from 'semantic-ui-react'

const TableCreation = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://lsbw-liberated-skills.herokuapp.com/api/candidates/")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("Bleh!! Error :(");
      });
  };

  useEffect(fetchData, []);

  console.log(data);

  return (
        <div className="App">
        <h2>Prison Table</h2>
        <div>
        {data.map((prisons, index) => {
          return (
            <Prisoners
              name={prisons.name}
              key={index}
              location={prisons.location}
              inmates={prisons.inmates}
              skills={prisons.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

const Prisoners = props => {
  return (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Prison Name</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Inmate</Table.HeaderCell>
        <Table.HeaderCell>Skills</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{props.name}</Table.Cell>
        <Table.Cell>{props.location}</Table.Cell>
        <Table.Cell>{props.inmates}</Table.Cell>
        <Table.Cell>{props.skills}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
};
export default TableCreation;