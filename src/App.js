import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
//para englobar la vista que cambiará continuamente
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import ErrorNotFound from './components/ErrorNotFound';
//importar contexto
import {CartProvider} from './context/CartContext'


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
