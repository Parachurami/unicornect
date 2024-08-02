import {BrowserRouter, Route, Routes} from "react-router-dom";
// import React, { useState, useEffect } from 'react';
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import useOnlineStatus from "./pages/Error/components/UseOnlineStatus";
// import { useOnline } from 'react-use';
// import ReactLoading from 'react-loading';
import {useState} from "react";
import Loading from "./pages/Error/components/Loading";
import NotFound from "./pages/Error/NotFound";

function App() {
    const isOnline = useOnlineStatus();
    // const Online = useOnline();
    // const isOnline = useOnline();
    const [showLoader, setShowLoader] = useState(false);

    // Event listener for online/offline status change
    window.addEventListener('online', () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2000); // Adjust timeout duration as needed
    });

    window.addEventListener('offline', () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 2000); // Adjust timeout duration as needed
    });



    // const [isLoading,setIsLoading] = useState(false);

    if (!isOnline) {
        return <Error />;
    }

  return (
      <>
          {showLoader && (
              <div className='loader'>
                  <Loading/>
              </div>
          )}
          {!showLoader && (
       <BrowserRouter>
         <Routes>
             <Route element={<Home/>} path={'/'}/>
             <Route element={<Contact/>} path={'/contact'}/>
             <Route element={<About/>} path={'/about'}/>
             <Route element={<Error/>} path={'/error'}/>
             <Route element={<NotFound/>} path={'*'}/>
         </Routes>
       </BrowserRouter>)}

      </>
  );
}

export default App;
