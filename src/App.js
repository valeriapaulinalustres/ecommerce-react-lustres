import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemList/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';
//para englobar la vista que cambiará continuamente
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ErrorNotFound from './components/Loading/ErrorNotFound';
//importar contexto
import {CartProvider} from './context/CartContext';
import Login from './components/Login/Login';


function App() {

  let nombre = "Juan";

  return (

    <div>
      
      <CartProvider>
      <NavBar greetingName={nombre} />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
          <Route path='/categories/:linkName' element={<ItemListContainer greeting={"Catálogo de productos"} />} />
          {/*El mismo element que home pero irá filtrado */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          {/*se lo llama a este para que le pase la prop de la data a su hijo itemDetail */}
          <Route path='*' element={<ErrorNotFound />} />
          <Route path='/categories/:linkName/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>

    </div>
  );
}

export default App;
