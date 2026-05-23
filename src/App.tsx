import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components/sections/Navbar'
import Home from './pages/Home'
import MyMemes from './pages/MyMemes'
import SavedSection from './components/memes/history/SavedSection'

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/my-memes'
          element={<MyMemes />}
        />

        <Route
          path='/saved'
          element={<SavedSection />}
        />

      </Routes>
    </>
  )
}

export default App