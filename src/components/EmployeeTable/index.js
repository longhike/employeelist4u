import React from 'react';
import Container from '../Container'
import Header from '../Header';
import TableResult from '../TableResult'

const employees = [
    {
        id: "1",
        first_name: "Frasier",
        last_name: "Crane",
        title: "Radio Host, Failed Psychiatrist"
    },
    {
        id: "2",
        first_name: "Roz",
        last_name: "Doyle",
        title: "Producer, Union Member"
    },
    {
        id: "3",
        first_name: "Niles",
        last_name: "Crane",
        title: "Less-Failed-Than-Fraiser Psychiatrist"
    },
    {
        id: "4",
        first_name: "Maris",
        last_name: "Crane",
        title: "Chief Drama Officer"
    },
    {
        id: "5",
        first_name: "Martin",
        last_name: "Crane",
        title: "Dad"
    },
    {
        id: "6",
        first_name: "Daphne",
        last_name: "Moon",
        title: "Chief Executive Officer of the Apartment"
    },
    {
        id: "7",
        first_name: "Eddie",
        last_name: "Crane",
        title: "Dog President"
    },
]

let sortedEmployees = []

class EmployeeTable extends React.Component {
    
    state = {
        employees: employees
    }

    sortById = () => {
        sortedEmployees = employees.sort( 
            (a, b) => {
                if (parseInt(a.id) > parseInt(b.id)) {return 1}
                if (parseInt(a.id) < parseInt(b.id)) {return -1}
                return 0
            })
        
            this.setState({ employees: sortedEmployees  })
    }

    sortByFirst = () => {
        sortedEmployees = employees.sort((a, b) => a.first_name.localeCompare(b.first_name))
        
            this.setState({ employees: sortedEmployees  })
    }

    sortByLast = () => {
        sortedEmployees = employees.sort((a, b) => a.last_name.localeCompare(b.last_name))
        
            this.setState({ employees: sortedEmployees  })
    }

    sortByTitle = () => {
        sortedEmployees = employees.sort((a, b) => a.title.localeCompare(b.title))
        
            this.setState({ employees: sortedEmployees  })
    }

    render() {

        return (
        <div>
            <Container>

                <Header />
                
                <TableResult 
                    employees={this.state.employees}
                    sortById={this.sortById} 
                    sortByFirst={this.sortByFirst}
                    sortByLast={this.sortByLast}
                    sortByTitle={this.sortByTitle}
                />

            </Container>
        </div>
        )

    }

}

export default EmployeeTable