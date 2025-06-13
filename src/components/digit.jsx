import React from 'react'

const Digit = (props) => {
  return (
        <div>
            <h2 className='digit-h'>Predicted Digit</h2>
    
    <div className='digit-container'>
        <h1 className='digit'>{props.digit}</h1>
    </div>
        </div>
  )
}

export default Digit