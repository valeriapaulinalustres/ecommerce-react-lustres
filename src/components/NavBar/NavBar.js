import marca from '../../img/lupinos.jpg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import * as mdb from 'mdb-ui-kit';
//para poder usar context trae estas dos importaciones:
import { useContext } from 'react';
import CartContext from '../../context/CartContext';



function NavBar({ greetingName }) {

   //trae cosas desde el context
   const { usuario } = useContext(CartContext);

    const categories = [
        { categoryName: "Interior", route: "categories/interior", id: 1 },
        { categoryName: "Anuales", route: "categories/anuales", id: 2 },
        { categoryName: "Perennes", route: "categories/perennes", id: 3 },
        { categoryName: "Cactus", route: "categories/cactus", id: 4 }
    ]


    return (
        <div className='container-navbar'>
            <div className="navbar-contenedor">
                <div>
                    <NavLink to="/" className="navbar-contenedor-marca">
                        <img className="marca" src={marca} alt="marca del vivero 'Los Lupinos'" />
                        <h1 className='marca-nombre' >Los Lupinos</h1>
                    </NavLink>
                </div>
            
              {usuario.nombre
              ? <h2>Bienvenido {usuario.nombre}</h2>
            : (<NavLink to="/login"><button className='button'>Login</button></NavLink>)
              }

            
                
                <NavLink to="/cart" className="cartWidgetContainer"><CartWidget /></NavLink>
            </div>
            <nav>
                {categories.map((element, index) => {
                    return (<NavLink to={element.route} className="navbar-link" key={index}>{element.categoryName}</NavLink>)
                })}
            </nav>
        </div>
    )
}

export default NavBar;
