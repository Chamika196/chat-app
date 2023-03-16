import React from "react";
import Chamika from "./chamika";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
        
          <Routes>
            
            <Route path="/chamika" element={<Chamika />} />
            

          </Routes>
       
      </BrowserRouter>
       
  
    );
  
  };
  
  export default App;
  