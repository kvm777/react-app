import React, {useState} from 'react'


const Index = () => {
    const initialArray = [
        {
            id:1,
            firstName: "Emma",
            lastName: "Watson",
            age:27
        },
        {
            id:2,
            firstName: "Mahesh",
            lastName: "Korada",
            age:23
        },
        {
            id:3,
            firstName: "Don",
            lastName: "Seenu",
            age:25
        }
    ]

    const [data, setData] = useState(initialArray);
    

    const handleData =(comingId) =>{
        const filterData = data.filter((eachItem) =>{
            return eachItem.id !== comingId;
        })
        console.log(filterData);
        setData(filterData)
    };
    
  return (
    <div>
        {
            data.map((eachObj) => {
                const {firstName,lastName,age,id} = eachObj;
                return(
                    <li key={id}>
                        <div>my firstName is <i>{firstName}</i></div>
                        <div>my lastName is <i>{lastName}</i></div>
                        <div>my age is <i>{age}</i></div>
                        <button onClick={() => handleData(id)}>Delete Me</button>
                    </li>
                )
            })
        }
    </div>

  )
}


// const Index = () => {
//     const [firstName, setFirstName] = useState("Emma");
//     const [lastName, setLastName] = useState("Watsom");
//     const [age, setAge] = useState(27);

//     const ChangeFirstName = () =>{
//         setFirstName("mahesh")
//     }

//     const ChangeLastName = () =>{
//         setLastName("Korada")
//     }
    
//   return (
//     <div>
//         <h1>my FirstName is {firstName}</h1>
//         <button onClick={ChangeFirstName}>change FirstName</button>
//         <h1>my LastName is {lastName}</h1>
//         <button onClick={ChangeLastName}>change LastName</button>
//         <h1>age is {age}</h1>
        
//     </div>

//   )
// }


// const Index = () => {
//     const obj = {
//         firstName: "Emma",
//         lastName: "Watson",
//         age:23
//     }

//     const [data, setData] = useState(obj);

//     const ChangeFirstName = () =>{
//         setData({
//             ...data, //copying of all data
//             firstName: "mahesh",
//         })
//     }

//     const ChangeLastName = () =>{
//         setData({
//             ...data, //copying of all data
//             lastName: "Korada",
//         })
//     }
//   return (
//     <div>
//         <h1>my name is {data.firstName}</h1>
//         <button onClick={ChangeFirstName}>change Name</button>
//         <h1>my name is {data.lastName}</h1>
//         <button onClick={ChangeLastName}>change Name</button>
//         <h1>age is {data.age}</h1>
//     </div>

//   )
// }


export default Index