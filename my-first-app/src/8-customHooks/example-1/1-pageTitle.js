import React, { useEffect } from 'react'

// custom Hooks...
// custom hooks are used for the reusablity hooks like functions...
function usePageTitle (count) {
    useEffect(() => {
        document.title = `count - ${count}`
    })
}

export default usePageTitle;