import React from 'react'
import EnhancedCounter from './enhancedComponent'

const HoverCounter = (props) => {
    
  return (
    <div>
        <h3 onMouseOver={props.increment}>Hovered {props.count} times</h3>
    </div>
  )
}

export default EnhancedCounter(HoverCounter)