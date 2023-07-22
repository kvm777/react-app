import React from 'react'

const InitialData = {
    firstName:"Mahesh",
    lastName:"Korada",
    mail:"korada@gmail.com"
}

export const userContext = React.createContext();

export const UserContextProvider = ({children}) => {
    return <userContext.Provider  value={InitialData}>
        {children}
    </userContext.Provider>
}

