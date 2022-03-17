import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {

  let nombre = "Juan";

  return (
    <>
      <NavBar />
      <ItemListContainer
        greeting={nombre}
      />
    </>

  );
}

export default App;
