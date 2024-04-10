import React from 'react'
import './Styles.css'

const heading = {
    fontSize: '72px',
    color: 'red'
}

function stylessheet(props) {
    const className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className='error'>Error</h1>
        <h1 style={heading}>Inline Styles</h1>

        <h1 className={`${className} font`}>stylessheet</h1>
    </div>
        
  )
}

export default stylessheet