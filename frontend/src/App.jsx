import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import Home from './pages/Home/index'
import Listing from './pages/Listing';
import Footer from './components/footer/footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/listing" element={<Listing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
