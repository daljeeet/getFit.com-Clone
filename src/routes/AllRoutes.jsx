import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/landing_page/Home';
import Fitness from '../pages/fitness_page/Fitness'
import Care from '../pages/care_page/Care'
import Mind from '../pages/mind_page/Mind'
import Store from '../pages/store_page/Store'
import Men from '../pages/shoping_page/Men'
import Women from '../pages/shoping_page/Women'
import Cardio from '../pages/shoping_page/Cardio'
import Cycles from '../pages/shoping_page/Cycles'
import Accessories from '../pages/shoping_page/Accessories'
import Dance from '../pages/shoping_page/Dance'
import Equipments from '../pages/shoping_page/Equipments'
import Running from '../pages/shoping_page/Running'
import Strength from '../pages/shoping_page/Strength'
import Supplements from '../pages/shoping_page/Supplements'
import Yoga from '../pages/shoping_page/Yoga'
import Login from '../pages/auth_pages/Login';
import Signup from '../pages/auth_pages/Signup';
import PrivateContext from '../contexts/PrivateContext';
import ProductDetail from '../cart/ProductDetail';
import CartPage from '../cart/CartPage';
import Checkout from '../cart/Checkout'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/fitness' element={<Fitness />} />
      <Route path='/care' element={<Care />} />
      <Route path='/mind' element={<Mind />} />
      <Route path='/store' element={<PrivateContext> <Store /></PrivateContext>} />
      <Route path='/men' element={<PrivateContext>
        <Men />
        </PrivateContext>} />
      <Route path='/women' element={<PrivateContext><Women/></PrivateContext>} />
      <Route path='/cardio' element={<PrivateContext><Cardio /></PrivateContext>} />
      <Route path='/cycles' element={<PrivateContext><Cycles /></PrivateContext>} />
      <Route path='/accessories' element={<PrivateContext><Accessories /></PrivateContext>} />
      <Route path='/supplements' element={<PrivateContext><Supplements /></PrivateContext>} />
      <Route path='/equipments' element={<PrivateContext><Equipments /></PrivateContext>} />
      <Route path='/yoga' element={<PrivateContext><Yoga /></PrivateContext>} />
      <Route path='/strength' element={<PrivateContext><Strength /></PrivateContext>} />
      <Route path='/running' element={<PrivateContext><Running /></PrivateContext>} />
      <Route path='/dance' element={<PrivateContext><Dance /></PrivateContext>} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<PrivateContext><CartPage /></PrivateContext>} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/payments' element={<PrivateContext><Checkout /></PrivateContext>} />
      <Route path=':catagory/:id' element={<PrivateContext><ProductDetail /></PrivateContext>} />

    </Routes>
  )
}

export default AllRoutes