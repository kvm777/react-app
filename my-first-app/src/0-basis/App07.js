import React from "react";
import data from "./data07"

function App(){
  return <main className="container">
    <ul className="comments-container">
      {data.map(eachComment => {
        const {id,email,name,body} = eachComment;
        return <ListItem id={id} email={email} name={name} body={body} />
        // <li key={id} className="comment">
        //   <div className="comments-header">
        //   <h3 className="email">{email}</h3>
        //   <h3 className="name">{name}</h3>
        // </div>
        // <p className="message">{body}</p>
        // </li>
      })}
      
    </ul>
  </main>
}

const ListItem = (props) => {
  const {email,name,body} = props;
  return <li className="comment">
    <div className="comments-header">
    <h3 className="email">{email}</h3>
    <h3 className="name">{name}</h3>
  </div>
  <p className="message">{body}</p> 
  </li>
}


export default App;
