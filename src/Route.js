import React from 'react'
import {Routes,Route} from "react-router-dom";
import Form from './Form';
import MainPage from './MainPage';
import ViewUserData from './ViewUserData';
import UpdateUserDetail from './UpdateUserDetail';


const Routess = () => {
    
  return (
    <div>
     <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path={`/ViewUserData/:id`} element={<ViewUserData/>}/>
        <Route path={`/UpdateUserDetail/:id`} element={<UpdateUserDetail/>}/>
      </Routes>
    </div>
  )
}

export default Routess
