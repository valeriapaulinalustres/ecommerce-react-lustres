import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function CartWidget() {
    return (
        <div>           
            <ShoppingCartIcon />
            <span className="item_total">4</span>
        </div>
    )
}
export default CartWidget;