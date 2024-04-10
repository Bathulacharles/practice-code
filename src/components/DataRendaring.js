import React from 'react'


function DataRendaring() {
const personsList = [
    {
        id: 1,
        name: 'Ravi',
        age: '20',
        skill: 'React'
    },
    {
        id: 2,
        name: 'Anil',
        age: '21',
        skill: 'Java'
    },
    {
        id: 3,
        name: 'Madhu',
        age: '22',
        skill: 'Python'
    },
    {
        id: 4,
        name: 'Kumar',
        age: '23',
        skill: 'Nodejs'
    }
      
]
            
    return(
        <>
        <h2>Data Render</h2>
        <table>
            <tr>
                <th>id</th>
                <th>First name</th>
                <th>age</th>
                <th>skill</th>
            </tr>
            {
                personsList.map((person) =>{
                    return(
                    <>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.skill}</td>
                        </tr>
                        </>
                    )
                })
            }
        </table>
      </>
    )
            
}

export default DataRendaring