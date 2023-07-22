import React from "react";

const PrintName = () => {
  return <h1>this is object </h1>
  ;
}

/* 
*the below 2 are nested components.
*one component is called from other component..
*/
const InnerComponent = () => {
  return <h2>Inner Component</h2>
}

const OtherComponent = () => {
  return (
    <div>
      <InnerComponent />
      <PrintName />
    </div>
  )
}

function App(){
  return <React.Fragment>
    {/**
     * <h1>Hello {new Date().toLocaleTimeString()}</h1> 
     */}
    {/* this is the comment style in JSX */}
    {/**
     * we don`t get the change time by time interval ..
     * we make it change in index.js
     */}
     <PrintName />
     <PrintName />
     --Nested Components--
     <OtherComponent />
  </React.Fragment>
}

// function App(){
//   const firstName ="Mahesh";
//   const lastName = "Korada";
  
//   const user ={
//     firstName : "Kvm" ,
//     lastName : "venkata"
//   };

//   function printName(user) {
//     return `my full name is ${firstName} ${user.lastName}`;
//   }
  
//   return <React.Fragment >
//     <h1>Hello {printName(user)}</h1>
//     <h2>none</h2>
//   </React.Fragment>
// };
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );

// }

// function App(){
//   return React.createElement(
//     "div",{className: "container"}, 
//     React.createElement("h1", {className: "myH1"}, "Hello World")
//   );
// }

export default App;