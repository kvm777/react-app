import React, { useState } from 'react'

const Index = () => {
    const [showData, setShowData] = useState(false);

    const DataShow = () =>{
        setShowData(!showData)
    }

  return (
    <div>
        <button onClick={DataShow}>{showData ? "hide":"show"}</button>
        {showData &&
        <div className='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus beatae illo ratione provident dolor sapiente dolore, temporibus, consequuntur dicta delectus numquam minima pariatur accusamus tenetur rem quae iste voluptas.
        </div>
        }
    </div>
  )
}

export default Index