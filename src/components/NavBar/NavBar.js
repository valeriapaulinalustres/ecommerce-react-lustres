import marca from '../../img/lupinos.jpg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

function NavBar({ greetingName }) {
    const { usuario, logout } = useContext(CartContext);

    const categories = [
        { categoryName: "Interior", route: "categories/interior", id: 1 },
        { categoryName: "Anuales", route: "categories/anuales", id: 2 },
        { categoryName: "Perennes", route: "categories/perennes", id: 3 },
        { categoryName: "Cactus", route: "categories/cactus", id: 4 }
    ]

    const handleLogout = () => {
        logout()
    }

    return (
        <div className='container-navbar'>
            <div className="navbar-contenedor">
                <div>
                    <NavLink to="/" className="navbar-contenedor-marca">
                        <img className="marca" src={marca} alt="marca del vivero 'Los Lupinos'" />
                        <h1 className='marca-nombre' >Los Lupinos</h1>
                    </NavLink>
                </div>
                <div className='navbar-contenedor-login-cart'>
                    {usuario.nombre
                        ? <div className='navbar-contenedor-nombre-salir'><h2>Bienvenido {usuario.nombre}</h2><button className='button' onClick={handleLogout}>Salir</button></div>
                        : (<NavLink to="/login"><button className='button'>Login</button></NavLink>)
                    }
                    <NavLink to="/wishList" className="cartWidget-container heart">❤️</NavLink>
                    <NavLink to="/cart" className="cartWidget-container"><CartWidget /></NavLink>
                </div>
            </div>
            <nav>
                {categories.map((element, index) => {
                    return (
                        <NavLink
                            to={element.route}
                            className="navbar-link"
                            key={index}
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                        color: '#fff',
                                        background: '#A2D5AB',
                                        borderRadius: 8,
                                        paddingLeft: 6,
                                        paddingRight: 6,
                                    }
                                    : {
                                        color: '#39AEA9',
                                        background: '#ffffff'
                                    }
                            }>{element.categoryName}
                        </NavLink>)
                })}
            </nav>
        </div>
    )
}

export default NavBar;
