import { useEffect, useState } from 'react';
import Loading from "../../components/Loading/Loading.js";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import { db } from "../../firebase/firebase.js";
import { collection, doc, getDoc } from "firebase/firestore";
import CartContext from '../../context/CartContext';
import WishContext from '../../context/WishContext';
import { useContext } from 'react';


function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [item, setItem] = useState([]);

    const { cargarCarritoDeLocalStorage } = useContext(CartContext);
    const { cargarDeseosDeLocalStorage } = useContext(WishContext);

    document.addEventListener('DOMContentLoaded', () => {
        cargarCarritoDeLocalStorage();
        cargarDeseosDeLocalStorage()
    })

    useEffect(() => {
        const productsCollection = collection(db, "ItemCollection");
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
            .then((result) => {
                const product = result.data();
                const productConId = { ...product, id }
                setItem(productConId);
            })
            .catch(() => {
                console.log("error")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            {loading
                ? (<Loading />)
                : (<ItemDetail item={item} />)
            }
        </div>
    )
}

export default ItemDetailContainer




