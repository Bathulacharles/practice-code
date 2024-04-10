
import React from 'react'

function NamesList() {
    const names  = ['charlee', 'madhu', 'vikas', 'charlee']

    const personsList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    return <div>{personsList}</div>
  
}

export default NamesList