import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


function CartWidget() {

    const { numberWidget } = useContext(CartContext);

    return (
        <div>           
            <ShoppingCartIcon />
            {numberWidget >0 && <span className="item_total">{numberWidget}</span>}
            
        </div>
    )
}
export default CartWidget;

/* && sirvió para if sin necesidad de else*/