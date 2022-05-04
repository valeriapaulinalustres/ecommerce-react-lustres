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


  return (
    <div>
      <CartProvider>
        <WishProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
            <Route path='/categories/:categoryId' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishList' element={<WishList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<ErrorNotFound />} />
            <Route path='/categories/:categoryId/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </WishProvider>
      </CartProvider>
      <ToastContainer toastStyle={{ backgroundColor: "#A2D5AB", color: "white", textAlign: "center" }} />
    </div>
  );
}

export default App;
