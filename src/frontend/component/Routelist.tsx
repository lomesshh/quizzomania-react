import React from 'react'
import { Category, Homepage, Leaderboard, Login, Profile, Questions, Result, Rules, Signup } from 'frontend/pages';
import { Route, Routes } from 'react-router-dom'

const Routelist = () => {
  return (  
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/result" element={<Result />} />
        <Route path="/rules" element={<Rules />} />

    </Routes>
  ) 
}

export { Routelist }    