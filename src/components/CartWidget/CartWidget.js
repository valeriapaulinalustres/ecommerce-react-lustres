import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../../context/CartContext.js';
import './CartWidget.css';



function CartWidget() {

    const { numberWidget } = useContext(CartContext);

    return (
        <div>           
            <ShoppingCartIcon className='cart-icon'/>
            {numberWidget >0 && <div className="cart-circle"><h4>{numberWidget}</h4></div>}
            
        </div>
    )
}
export default CartWidget;

/* && sirvió para if sin necesidad de else*/
