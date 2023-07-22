import React from 'react'

const InitialData = [
    {
        firstName:"Mahesh",
        lastName:"Korada",
        mail:"korada@gmail.com"
    },
    {
        firstName:"emma",
        lastName:"Watson",
        mail:"emmaa@gmail.com"
    }
]

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({children}) => {
    return <MainDataContext.Provider  value={InitialData}>
        {children}
    </MainDataContext.Provider>
}