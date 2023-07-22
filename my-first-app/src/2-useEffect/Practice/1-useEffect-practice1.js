import React, { useEffect, useState } from 'react'


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Index = () => {
  const [searchItem, setSearchItem] = useState("")
  const [drinkData, setDrinkData] = useState([])
  const [loading,setLoading] = useState(false)
  const [isError, setIsError] = useState({state:false,msg:""})


  const fetchDrink = async (apiURL) => {
    setLoading(true)
    setIsError({state:false,msg:""})
    try {
        const responce = await fetch(apiURL);
        const {drinks} = await responce.json();
        //console.log(drinks)
        setDrinkData(drinks)
        setLoading(false)
        setIsError({state:false,msg:""})

        if(!drinks){
            throw new Error("data not found")
        }
    } catch (error) {
        setIsError({state:true, msg: error.message || "something Went Wrong"})
        setLoading(false)
    }
    
  }

  useEffect(() => {
    const newURL = URL+searchItem;
    fetchDrink(newURL)
  },[searchItem])

  return (
    <div>
        <form>
            <input type='text'
            name='search'
            id='search'
            placeholder='Enter Your Item'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
             />
        </form>
        <hr />
        {loading && !isError?.state && <h2>Loading...</h2>}
        {isError?.state && <h3 style={{color:"red"}}>{isError?.msg}</h3>}
        {!loading && !isError?.state && 
        <ul className='drink-data'>
        {drinkData.map(eachDrink => {
            const {idDrink,strDrink,strDrinkThumb} = eachDrink;
            return (
                <li key={idDrink}>
                    <div>
                        <img src={strDrinkThumb} alt={strDrink}></img>
                    </div>
                    <div>
                        <h3>{strDrink}</h3>
                    </div>
                </li>
            )
        })}
    </ul>}
        

    </div>
  )
}

export default Index