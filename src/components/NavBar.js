import marca from './lupinos.jpg';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="contenedor-marca">
                    <img className="marca" src={marca} alt="marca del vivero 'Los Lupinos'" />
                    <h1><a className="navbar-brand" href="#" >Los Lupinos</a></h1>
                </div>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-navBar">
                        <li className="nav-item li-navBar">
                            <a className="nav-link active" href="#" >Productos</a>
                        </li>
                        <li className="nav-item li-navBar">
                            <a className="nav-link active" href="#" >Servicios</a>
                        </li>
                        <li className="nav-item li-navBar">
                            <a className="nav-link active" href="#" >Contacto</a>
                        </li>
                    </ul>



                    
                </div>
                <ShoppingCartIcon />

            </div>


        </nav>






    )
}

export default NavBar;