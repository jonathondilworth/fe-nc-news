import './App.css'
import Nav from './components/Nav';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Footer from './components/Footer';
import Article from './components/Article';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import Login from './components/Login';

function App() {

  // our default user is: tickle122
  const [currentUser, setCurrentUser] = useState('tickle122');

  return (
    <UserContext.Provider value={{currentUser: currentUser, setCurrentUser: setCurrentUser}}>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/topics/:topic' element={<Topics />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </UserContext.Provider>
  )
}

export default App
