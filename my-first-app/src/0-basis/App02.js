import React from "react";

function App(){
  return <section className="container">
    <Picture />
    <Picture />
    <Picture />
    <Picture />
    <Picture />
    <Picture />
    <Picture />
    <Picture />
  </section>
}

const Picture = () => {
  return <section className="each-item">
    <Image />
    <Name />
  </section>
}

const Image = () => {
  return <img src="https://png.pngtree.com/png-clipart/20190119/ourmid/pngtree-lowpoly-polygon-style-parrot-branch-png-image_481581.jpg" alt="none"></img>
}

const Name = () => {
  const styles ={
    Heading : {
      color : "red",
      fontFamily: "cursive",
      fontSize: "30px",
    },
    smallHeading: {
      color:"blue",
      fontSize: "px",
      fontFamily: "TimesNewRoman",
    }
  }

  return <h3 style={styles.Heading} >The Bird 
  
  </h3>
}

export default App;