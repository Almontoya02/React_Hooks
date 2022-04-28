import React from 'react'
import {BrowserRouter as Router,Navigate,Route,Routes} from "react-router-dom";

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';


export const AppRouter = () => {
  return (
    <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route exact path='/about' element={<AboutScreen/>} />
                <Route exact path='/login' element={<LoginScreen/>} />
                <Route exact path='/' element={<HomeScreen/>} />
                <Route path='*' element={<Navigate replace to="/"/>}/>
            </Routes>
        </div>
    </Router>
  )
}
