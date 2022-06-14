import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SingleProduct from './pages/SingleProduct'
import ProductList from './pages/ProductList'
import NotFound from './components/NotFound'

function App() {
	
  return (
    <Router>
      <Routes>
       <Route path='/home'  element={<Home />} />
         <Route path='/productlist'  element={<ProductList />} />
         <Route path='/singleproducct' element={<SingleProduct />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register'  element={<Register />} />
         <Route path='/' exact element={<Cart />} />
       <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;