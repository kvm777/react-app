import React from 'react'

const Title = () => {
    console.log("title rendered");
    return <h2>useCallback and React.memo</h2>
}

export default React.memo(Title);