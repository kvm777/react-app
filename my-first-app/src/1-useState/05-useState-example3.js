import React, { useState } from 'react'

const Index = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text:"",
    id: ""
  });

  const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  })

  const changeMessage = (e) =>{
    setMessage({
      ...message,
      text:e.target.value,
    })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    let newToDo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list,newToDo])
    setMessage({
      text:"",
      id:"",
    })
  }

  const HandleDelete = (id) => {
    let newTodos = list.filter((eachItem =>{
      return eachItem.id !== id;
    }))
    setList(newTodos)
  }

  const changeEditState = (id) => {
     setEditingItem({
      ...editingItem,
      id:id,
      isEditing:true
     })
     let editableItem = list.find((eachItem => {
      return eachItem.id === id
     }))
     setMessage({
      ...message,
      id: editableItem.id,
      text: editableItem.text
     })

  }

  const HandleEdit = (e) =>{
    e.preventDefault();
    let newTodos = list.map((eachItem) => {
      if(eachItem.id === editingItem.id){
        return {
          text: message.text,
          id:editingItem.id,
        };
      } else{
        return eachItem;
      }
    })
    setList(newTodos);
    setMessage({
      text:"",
      id:""
    })
    setEditingItem({
      id:"",
      isEditing: false
    })

  }

  return (
    <div>
        <form>
          <input type='text' 
          name='message' 
          id='message' 
          placeholder='Enter Some text' 
          value={message.text} 
          onChange={changeMessage} />

          {editingItem.isEditing ? 
          <button onClick={HandleEdit} >Change</button> :
          <button onClick={HandleSubmit} >Add</button>}

          {/* <button onClick={HandleSubmit} >Add</button> */}
        </form>
        <hr />

        {/* it is conditional renderng... */}
        {
          list.length===0 && <h3>There is no items in the list</h3>
        }

        <ul >
          {list.map((eachObj) =>{
            const {text,id} = eachObj;
            return (
            <li key={id} style={{listStyle:'none'}}> 
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>edit</button>
              <button onClick={() => HandleDelete(id)}>delete</button>
            </li>
            )
          })}
        </ul>
    </div>
  )
}

export default Index