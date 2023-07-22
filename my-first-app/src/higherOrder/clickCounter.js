import React from 'react'
import EnhancedCounter from './enhancedComponent';

const ClickCounter = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
        <button onClick={props.increment}>clicked {props.count} times</button>
    </div>
  )
}

export default EnhancedCounter(ClickCounter);