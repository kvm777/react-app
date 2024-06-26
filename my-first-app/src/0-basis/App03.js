import React from "react";

function App(){
  return <section className="container">
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
  </section>
}

const Movie = () => {
  return <section className="each-item">
    <img src="https://www.usaoncanvas.com/images/low_res_image.jpg" alt="imagee"></img>
    <h1>Netflix show</h1>
  </section>
}





export default App;