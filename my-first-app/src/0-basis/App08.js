import React from "react";

function App(){
  function New(e, firstName) {
    console.log("this is from function", e);
    console.log(`Hiii.... ${firstName}`)
  }
  return <main className="container">
    <button className="myButton" 
      onClick={function(e){
        return New(e, "mahesh")}} >
      click me
      </button>
    
    {/* <button className="myButton" onClick={New} >click me</button> */}
  </main>
}


export default App;
