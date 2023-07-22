import React, { useState } from 'react'

const Index= () => {

  const [message, setMessage] = useState({
    text:"",
    id:""
  })

  const [list, setList] = useState([])

  const [editItem, setEditItem] = useState({
    id:"",
    isEditing:false

  }) 

  const ChangeMessage = (e) => {
    setMessage({
      ...message,
      text:e.target.value,
      id: new Date().getTime().toString(),
    })
  }

  const HAndleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      text:message.text,
      id:message.id
    }
    setList([...list,obj])
    setMessage({
      text:"",
      id:"",
    })
  }

  const HandleDelete = (id) => {
    let newList = list.filter(eachObj => {
      return eachObj.id !== id;
    })
    setList(newList)
  }

  const HAndleEdit = (id) => {
    let tempObj = list.find(eachObj => {
      return eachObj.id === id;
    })
    setMessage({
      ...message,
      text:tempObj.text,
      id:tempObj.id,
    })
    setEditItem({
      ...editItem,
      id:id,
      isEditing:true
    })

  }
  const HAndleChange = (e) => {
    e.preventDefault();
    let toDoList = list.map(eachObj => {
      if(eachObj.id === editItem.id){
        return {
          text:message.text,
          id:editItem.id
        }
      }
      else{
        return eachObj
      }
    })

    setList(toDoList)

    setMessage({
      text:"",
      id:""
    })

    setEditItem({
      id:"",
      isEditing:false
    })

  }
   
  return (
    <div>
      <form>
        <input type='text'
        name='message'
        id='message'
        value={message.text}
        placeholder='Enter yout Text'
        onChange={ChangeMessage} />

        {editItem.isEditing ?
        <button onClick={HAndleChange}>Change</button> :
        <button onClick={HAndleSubmit}>Add</button>
        }
      </form>

      <hr />
      
      {
        list.length===0 && <h2>there is no items in the list</h2>
      }
      <ul>
        {list.map(eachObj => {
          const {text, id} = eachObj;
          return <li key={id}>
            <span>{text}</span>
            <button onClick={() => HAndleEdit(id)} >Edit</button>
            <button onClick={() => HandleDelete(id)}>Delete</button>
          </li>
        })}
      </ul>
      
    </div>
  )
}

export default Index
