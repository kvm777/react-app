import React, { useEffect, useReducer, useState } from 'react'


const Reducer = (state, action) => {  // action = {type, payload}
    if(action.type === "UPDATE_DATA"){
        return {
            ...state,
            data:action.payload,
        };
    }
    if(action.type === "LOADING"){
        return {
            ...state,
            isLoading:action.payload
        }
    }
    if(action.type === "DELETE_USER"){
        const newUsers = state.data.filter(eachUser => {
            return eachUser.id !== action.payload;
        }) 
        return {
            ...state,
            data:newUsers,
        }
    }
    if (action.type === "EDIT_USER"){
        return{
            ...state,
            isEditing:action.payload,
        }
    }

    if(action.type === "UPDATE_USER"){
        const newUpdateUsers = state.data.map(eachUser => {
            if(eachUser.id === action.payload.id){
                return {
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email,
                }
            }else{
                return eachUser
            }
        });
        return {
            ...state,
            data:newUpdateUsers,
        }
    }
    return state;
}

const Index = () => {

    const FetchData = async (apiURL) => {
        dispatch({type:"LOADING", payload:true})
        dispatch({type:"ERROR", payload:{status:false, msg:""}})
        try {
            const responce = await fetch(apiURL);
            const data = await responce.json();
            // console.log(data)
            dispatch({type:"UPDATE_DATA", payload:data})
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ERROR", payload:{status:false, msg:""}})
        } catch (error) {
            dispatch({type:"LOADING", payload:false})
            dispatch({type:"ERROR", payload:{status:true, msg:error.message || "somehing went wrong"}})
        }
    }
    useEffect(() => {
        FetchData("https://jsonplaceholder.typicode.com/users")
    },[])

    const InitialData = {
        data:[],
        isLoading:false,
        isError:{status:false, msg:""},
        isEditing:{status:false, id:"", name:"", email:""}
    }

    const [state, dispatch] = useReducer(Reducer, InitialData);
    // console.log(state)


    const HandleDelete = (id) => {
        dispatch({type:"DELETE_USER",payload:id})
    }

    const HandleEdit = (id,name,email) => {
        dispatch({type:"EDIT_USER", payload:{status:true, id:id, name:name, email}})
    }

    const UpdateDataFunction = (id, name, email) => {
        dispatch({type:"UPDATE_USER", payload:{
            id, name, email
        }})
        dispatch({type:"EDIT_USER", payload:{status:false, id:"", name:"", email:""}})
    }

    if(state.isLoading){
        return <div>
            <h3>Loading....</h3>
        </div>
    }

  return (
    <div>
        <h1>Users Details</h1>
        {state.isEditing?.status && <EditingTemplete 
        id={state.isEditing?.id} 
        userName={state.isEditing?.name} 
        userEmail={state.isEditing?.email} 
        updateData={UpdateDataFunction} />}

        {state.data.map(eachUser => {
            const {id,name,email} = eachUser;
            return <div key={id} style={{border: "2px solid blue"}}>
                <h3>{name}</h3>
                <p>{email}</p>
                <button onClick={() => HandleEdit(id,name,email)}>EDIT</button>
                <button onClick={() => HandleDelete(id)} >DELETE</button>
            </div>
        })}
    </div>
  )
}
 

const EditingTemplete = ({id, userName, userEmail,updateData})=> {
    const [title, setTitle] = useState(userName)
    const [email, setEmail] = useState(userEmail)

  return (
    <>
        <form>
            <input type='text' name='title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => updateData(id,title, email)} >UPDATE DATA</button>
        </form> 
    </>

  )
}


export default Index