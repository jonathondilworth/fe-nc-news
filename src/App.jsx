import './App.css'
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/topics' element={<Topics />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
