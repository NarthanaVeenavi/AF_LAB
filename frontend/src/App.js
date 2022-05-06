import React, { Component } from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Item from './components/Item'
import TraderHome from './components/TraderHome'
import CustomerHome from './components/CutomerHome'
import AddPromotion from './components/AddPromotion'
import Profile from './components/Profile'
import AddProfile from './components/AddProfile'
import Promotion from './components/Promotion'
import EditItem from './components/EditItem'
import './components/Home/home.css'

export default class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      
     <Routes>
    
     <Route exact path="/" element={ <Home/> }/>
     <Route path="/trader/home" element={<TraderHome/> }/>
     <Route path="/customer/home" element={<CustomerHome/> }/>
     <Route path="/item/add" element={<Item/> }/>
     <Route path="/profile" element={<Profile/> }/>
     <Route path="/profile/add" element={<AddProfile/> }/>
     <Route path="/promotion/add" element={<AddPromotion/> }/>
     <Route path="/promotion" element={<Promotion/> }/>
     <Route path="/:id" element={<EditItem/> }/>
     {/* <Route path="item" element={<EditItem/> }/> */}
     
     
     

         </Routes>
         
        
      </BrowserRouter>


      





      
     
    );
  }
}

