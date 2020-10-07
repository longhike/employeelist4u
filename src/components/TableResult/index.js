import React from 'react';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function TableResult (props) {
    console.log(props);
    const listEmployees = props.employees.map((employee) => 
        <tr key={employee.id}>
            <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.title}</td>
        </tr>
        )

    return (
        <div>
            <Table striped border hover>
                <thead>
                    <tr>
                        <th>
                            Employee ID 
                            <br></br>
                            <Button variant="secondary" size="sm" onClick={props.sortById}>
                                Sort
                            </Button>
                        </th>
                        <th>
                            First Name 
                            <br></br>
                            <Button variant="secondary" size="sm" onClick={props.sortByFirst}>
                                Sort
                            </Button>
                        </th>
                        <th>
                            Last Name 
                            <br></br>
                            <Button variant="secondary" size="sm" onClick={props.sortByLast}>
                                Sort
                            </Button>
                        </th>
                        <th>
                            Title
                            <br></br>
                            <Button variant="secondary" size="sm" onClick={props.sortByTitle}>
                                Sort
                            </Button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {listEmployees}
                </tbody>
            </Table>
        </div>
    )
}

export default TableResult