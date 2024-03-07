
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Products } from './pages/Products/Products'
import { Navbar } from './components/custom/Navbar'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { Cart } from './pages/Cart/Cart'

function App() {

  return (
    <>
      <div >
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/abc" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        {/* <Dashboard /> */}
        {/* <Products /> */}
      </div>
    </>
  )


}

export default App
