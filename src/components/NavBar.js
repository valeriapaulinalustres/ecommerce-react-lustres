import marca from './lupinos.jpg';
import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (


        <nav>
            <div className="navbar-contenedor">
                <div>
                    <a className="navbar-contenedor-marca " href="#" >
                        <img className="marca" src={marca} alt="marca del vivero 'Los Lupinos'" />
                        <h1 className='marca-nombre' >Los Lupinos</h1>
                    </a>

                </div>
                <div>
                    <ul className="navbar-contenedor-links">
                        <li className="navbar-li">
                            <a className="navbar-link" href="#" >Productos</a>
                        </li>
                        <li className="navbar-li">
                            <a className="navbar-link" href="#" >Servicios</a>
                        </li>
                        <li className="navbar-li">
                            <a className="navbar-link" href="#" >Contacto</a>
                        </li>
                    </ul>
                </div>

                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
//navbar navbar-expand-lg navbar-light bg-light 