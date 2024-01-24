import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './Components/MovieList'
import DetailsPage from './Components/DetailsPage'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
