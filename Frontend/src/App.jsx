import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import Authlogin from './pages/auth/login'
import Authregister from './pages/auth/register'
import AdminBooking from './pages/admin-view/booking'
import AdminListing from './pages/admin-view/listing'
import UserHome from './pages/user-view/home'
import Listing from './pages/user-view/listing'
import UserAccount from './pages/user-view/account'
import Search from './pages/user-view/search'
import Contract from './pages/user-view/contract'
import Blog from './pages/user-view/Blog'
import CheckAuth from "./components/common/check-auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminLayout from './components/admin-view/layout'
import UserLayout from './components/user-view/layout'
import UnauthPage from './pages/unauth-page'
import NotFound from './pages/not-fount'
import { checkAuth } from "./store/auth-slice";

function App() {

  const {user,isAuthenticated,isLoading}=useSelector((state)=>state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
 
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

      <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />


        <Route path='/auth' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>
              <Route path='login' element={<Authlogin/>}/>
              <Route path='register' element={<Authregister/>}/>
        </Route>


        <Route path='/admin' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }>
              <Route path='booking' element={<AdminBooking/>}/>
              <Route path='listing' element={<AdminListing/>}/>
        </Route>


        <Route path='/user' element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <UserLayout />
              </CheckAuth>
          }>
              <Route path='home' element={<UserHome/>}/>
              <Route path='listing' element={<Listing/>}/>
              <Route path='account' element={<UserAccount/>}/>
              <Route path="search" element={<Search />} />
              <Route path="contract" element={<Contract />} />
              <Route path="blog" element={<Blog />} />

          </Route>

          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path='*' element={<NotFound/>}/>

      </Routes>
    </div>
  )
    
}

export default App
