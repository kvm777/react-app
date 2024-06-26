import React, { useState } from 'react'

// not done.....

const states = [
    {"name": "andhra",
    cities:["vizag", "srikakulam", "tirupathi", "guntur"]
    },
    {"name": "telengana",
    cities:["c1", "c2", "c3", "c4"]
    },
    {"name": "tamilnadu",
    cities:["c5", "c6", "c7", "c8"]
    },
    {"name": "kerala",
    cities:["c9", "c10", "c11", "c12"]
    },
    {"name": "maharastra",
    cities:["c13", "c14", "c16", "c12"]
    },

]

const Index = () => {
    const [state, setState] = useState("")
    const [cities, setCities] = useState([]);

    function changeState(e) {
        setState(e.target.value);
        // console.log(state, e.target.value)
        setCities(states.find(obj => {
        }))
    }

  return (
    <div>
        <h1>DropDown for states and countries</h1>
        <select onChange={changeState}>
            <option>---state---</option>
            {
                states.map(state => {
                    return <option key={state.name} > {state.name}</option>
                })
            }
        </select>

    </div>
  )
}

export default Index