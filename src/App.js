import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  let nombre = "Juan";

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={nombre}
      />
      <ItemDetailContainer/>
    </>

  );
}

export default App;
