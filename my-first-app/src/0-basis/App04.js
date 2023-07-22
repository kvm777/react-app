import React from "react";

//all are added to array.. 
let data = [
  {
    imageURL:"https://www.justwatch.com/images/icon/52449861/s100/icon.webp",
    title: "Prime video",
  },
  {
    imageURL: "https://www.justwatch.com/images/icon/85114140/s100/icon.webp",
    title: "Jio"
  },

  {
    imageURL: "https://www.justwatch.com/images/icon/93795879/s100/icon.webp",
    title: "ZEE5"
  }
] 


function App(){
  // const newArray = data.map((eachObj) =>{
  //   return <article>
  //     <h1>{eachObj.title}</h1>
  //     <img src={eachObj.imageURL}></img>

  //   </article>
  // })

  return <section className="container">
    {/* {newArray} */}
    
    {data.map(eachObj => {
      return <Movie title={eachObj.title} imageURL={eachObj.imageURL}/>
    })
    }

    {/* <Movie imageURL={data[0].imageURL} title={data[0].title} />
    <Movie imageURL={data[1].imageURL} title={data[1].title} />
    <Movie imageURL={data[2].imageURL} title={data[2].title}/> */}

  </section>
}

const Movie = (props) => {
  return <section className="each-item">
    <h1>{props.title}</h1>
    <img src={props.imageURL} alt="None" />
  </section>
}

export default App;
