
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Count from './components/Count';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ProductDetails from './components/Product-details';
import StroeProducts from './components/Products';

function App() {
  return (
    <div >
      <Router>
        <CssBaseline>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<StroeProducts />} />
            <Route path="/product/:id" element={<ProductDetails /> }/>
            <Route path="movies" element={<Movies />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path='/count' element={<Count />} />
            <Route path="/*" >404 not found</Route>
          </Routes>
        </CssBaseline>
      </Router>
    </div>
  );
}

export default App;
