import React from 'react';
import './index.css';
import "./App.css"
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard.tsx';

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Navigate to={"/adarsh"}></Navigate>}></Route>
  <Route path='/:username' element={<Dashboard></Dashboard>}></Route>
</Routes>

</BrowserRouter>    



    
    
  );
};

export default App;
