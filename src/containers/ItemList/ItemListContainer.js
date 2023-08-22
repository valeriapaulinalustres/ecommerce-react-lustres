import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList.js';
import Loading from '../../components/Loading/Loading.js';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import CartContext from '../../context/CartContext';
import WishContext from '../../context/WishContext';
import { useContext } from 'react';


export default function ItemListContainer({ greeting }) {
    const { cargarCarritoDeLocalStorage } = useContext(CartContext);
    const { cargarDeseosDeLocalStorage } = useContext(WishContext);

    document.addEventListener('DOMContentLoaded', () => {
        cargarCarritoDeLocalStorage();
        cargarDeseosDeLocalStorage()
    })

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "ItemCollection");
        const q = categoryId !== undefined ? query(productsCollection, where("category", "==", categoryId)) : productsCollection;
        getDocs(q)
            .then((result) => {
                //console.log(result)
                const docs = result.docs
                const lista = docs.map(producto => {
                    //para traer el id generado automáticamente:
                    const id = producto.id;
                    //se agrega ese id a las propiedades del objeto producto
                    const product = {
                        id,
                        ...producto.data()
                    }
                    return product;
                })
                setProducts(lista)
                console.log(lista)
            })
            .catch(() => {
                console.log("error")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]);

    return (
        <>
            <div>
                <h2>{greeting}: {categoryId}</h2>
                {loading
                    ? (<Loading />)
                    : (<ItemList filtered={products} />)
                }
            </div>
        </>
    )
}
