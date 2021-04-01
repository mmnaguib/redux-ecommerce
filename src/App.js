import './App.css';
import Home from './Pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './utils/ScrollToTop';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Shirts from './Pages/ShirtsPage';
import Shoes from './Pages/ShoesPage';
import HeadPhones from './Pages/HeadPhonesPage';
import About from './Pages/AboutPage';
import Cart from './Pages/CartPage';
import Contact from './Pages/ContactPage';
import Footer from './components/Footer/Footer'
import Error from './Pages/ErrorPage';
import SingleProduct from './Pages/SingleProductPage';
import AllProducts from './Pages/AllProductsPage';
function App() {
  return (
    <Router>
    <ScrollToTop />
    <Navbar />
    <CartSidebar />
    <Sidebar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/shirts">
        <Shirts />
      </Route>
      <Route exact path="/shoes">
        <Shoes />
      </Route>
      <Route exact path="/headphones">
        <HeadPhones />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/products">
        <AllProducts />
      </Route>
      <Route exact path="/products/:id" children={<SingleProduct />} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
