import React,{useState} from 'react'

//insted odf these heirarical inheristance....we use useContext hook

const Index = () => {
    const [userDetails, setUserDetails ] = useState({
        fName:"Mahesh",
        lName:"Korada",
        mail:"korada@gmail.com",
    })
    return (
      <div>
          <h1>This is parent class</h1>
          <ChildComponent details={userDetails} />
      </div>
    )
  }
  
  const ChildComponent = (props) => {
      return (
          <div>
              <h2>this is child component</h2>
              <SubChildComponent childDetails={props.details} />
          </div>
          
      )
  }
  
  const SubChildComponent = (props1) => {
      const {childDetails} = props1;
      return (
          <div>
              <h2>this is sub child component</h2>
              <span>{childDetails.fName}</span>
  
          </div>
      )
  }

export default Index