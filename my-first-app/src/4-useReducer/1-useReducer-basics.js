import React, { useReducer } from 'react'

const reducer = (state,action) => {
  // console.log(state,action);
  if(action.type === "DELETE_PERSON"){
    const newPersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payLoad;
    });
    return{
      ...state,
      data:newPersons,
      length: state.length-1,
    }
  }

}

const Index = () => {
  const InitialState = { 
    data:[
    {id:"1", firstName: "mahesh", mail:"mahesh@gmail.com"},
    {id:"2", firstName: "rinku", mail:"rinku@gmail.com"},
  ],
  length:2
  };

  const [state, dispatch ] = useReducer(reducer, InitialState)

  const HandleDelete = (id) => {
    dispatch({
      type:"DELETE_PERSON",
      payLoad:id,
    });
  };


  return (
    <div>
      <div>current users: {state.length}</div>
      {state.data.map(eachObj => {
        const {id,firstName, mail} = eachObj;
        return  <div key={id}>
          <h3>{firstName}</h3>
          <span>{mail}</span>
          <button onClick={() => HandleDelete(id)}>Delete</button>
        </div>
      })
      }
    </div>
  )
}

export default Index