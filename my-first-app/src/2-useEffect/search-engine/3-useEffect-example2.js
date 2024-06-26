import React, { useEffect, useState } from 'react'
import './3-useEffect-example2.css'

//we make this url to remove after "=" to set api call to database
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const SearchEngine = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [loadiing, setLoading] = useState(false)
  const [isError, setIsError] = useState({status:false, msg:""})

  //fetching of url
  const FetchDrink = async (apiURL) => {
    setLoading(true)
    setIsError({status:false, msg:""})
    try {
      const responce = await fetch(apiURL);
      const {drinks} = await responce.json();
      setDrinksData(drinks);
      //console.log(drinks)
      setLoading(false);
      setIsError({status:false, msg:""});

      //if the data is not found in API it may throws an error to show...
      if(!drinks){
        throw new Error("data not found")
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setIsError({status:true, msg: error.message || "something went wrong.."});
    }
    
  }

  //api call at every instant
  useEffect( () => {
    const newURL = `${URL}${searchTerm}`
    FetchDrink(newURL)
  },[searchTerm])
  
  return (
    <div>
        <form>
          <input type='text'
          name='search'
          id='search'
          placeholder='search your drink'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
           />
        </form>

        <hr/>

        {loadiing && !isError?.status && <h3>loadingg.....</h3>}
        {isError?.status && <h3 style={{color:"red"}}>{isError.msg}</h3>}
        {!loadiing && !isError?.status && (
        <ul className='cocktail-data'>
          {drinksData.map(eachDrink => {
            const{idDrink,strDrink,strDrinkThumb} = eachDrink;
            return <li key={idDrink}>
              <div>
                <img src={strDrinkThumb} alt={strDrink} />
              </div>
              <div className='text'>
                <h3>{strDrink}</h3>
              </div>
            </li>
          })}
        </ul>)
        }

    </div>
  )
}

export default SearchEngine;