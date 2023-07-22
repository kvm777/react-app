import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import "./0-basis/index07.css"
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import { UserContextProvider } from './useContext/contexts/1-userContext';
// import { MainDataContextProvider } from './useContext/contexts/2-mainDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode> 

  // <MainDataContextProvider>
  //   <UserContextProvider>
  //     <App />
  //   </UserContextProvider>
  // </MainDataContextProvider>
  
);


// setInterval ( () => (
//   root.render(<App />)
// ),1000);


