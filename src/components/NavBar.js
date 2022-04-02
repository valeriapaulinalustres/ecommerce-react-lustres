import marca from './lupinos.jpg';
import './NavBar.css';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';



function NavBar({ greetingName }) {

    const categories = [
        { categoryName: "Interior", route: "categories/interior", id: 1 },
        { categoryName: "Anuales", route: "categories/anuales", id: 2 },
        { categoryName: "Perennes", route: "categories/perennes", id: 3 },
        { categoryName: "Cactus", route: "categories/cactus", id: 4 }
    ]

    return (
        <div>
            <div className="navbar-contenedor">
                <div>
                    <NavLink to="/" className="navbar-contenedor-marca">
                        <img className="marca" src={marca} alt="marca del vivero 'Los Lupinos'" />
                        <h1 className='marca-nombre' >Los Lupinos</h1>
                    </NavLink>
                </div>
                <h2>Bienvenido {greetingName}</h2>
                <nav>
                    {categories.map((element) => {
                        return (<NavLink to={element.route} className="navbar-link">{element.categoryName}</NavLink>)
                    })}
                </nav>
                <NavLink to="/cart"><CartWidget /></NavLink>
            </div>
        </div>
    )
}

export default NavBar;
//navbar navbar-expand-lg navbar-light bg-light 