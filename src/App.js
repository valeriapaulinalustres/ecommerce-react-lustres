import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemList/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
import WishList from './components/wishList/WishList';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ErrorNotFound from './components/Loading/ErrorNotFound';
import { CartProvider } from './context/CartContext';
import { WishProvider } from './context/WishContext';
import Login from './components/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  let nombre = "Juan";

  return (
    <div>
      <CartProvider>
        <WishProvider>
          <NavBar greetingName={nombre} />
          <Routes>
            <Route path='ecommerce-react-lustres/' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
            <Route path='ecommerce-react-lustres/categories/:categoryId' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
            <Route path='ecommerce-react-lustres/cart' element={<Cart />} />
            <Route path='ecommerce-react-lustres/wishList' element={<WishList />} />
            <Route path='ecommerce-react-lustres/login' element={<Login />} />
            <Route path='ecommerce-react-lustres/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<ErrorNotFound />} />
            <Route path='ecommerce-react-lustres/categories/:categoryId/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </WishProvider>
      </CartProvider>
      <ToastContainer toastStyle={{ backgroundColor: "#A2D5AB", color: "white", textAlign: "center" }} />
    </div>
  );
}

export default App;
