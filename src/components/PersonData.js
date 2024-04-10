import React from 'react'

function PersonData(props) {
    const {personDetails}=props
    const {name, age, skill}=personDetails
    
  return (
    <div>
        <h2>I am {name}.</h2> 
        <h2>I am {age} years old.</h2> 
        <h2>I know {skill}</h2>
        
    </div>
  )
}

export default PersonData