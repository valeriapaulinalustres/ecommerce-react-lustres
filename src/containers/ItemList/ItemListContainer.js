import { useEffect, useState } from 'react';

import ItemList from '../../components/ItemList/ItemList.js';
import Loading from '../../components/Loading/Loading.js';
import { useParams } from 'react-router-dom';
import { ProductionQuantityLimits } from '@mui/icons-material';
import {data} from '../../mocks/data.js'



//promesa para obtener el array, con setTimeout para simular delay 
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        if (data == 0) {
            rej("no hay productos disponibles")
        } else {
            res(data)
            //    console.log(data);
        }
    }, 2000);
});

export function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //para atrapar el id de la categoría/link cliqueada
    const { linkName } = useParams()
    //   console.log(linkName)

    useEffect(() => {

        promise.then((products) => {
            // console.log (products[2].category)
            if (linkName) {
                const filteredProducts = products.filter(product => product.category === linkName)
                //console.log(filteredProducts);
                setProducts(filteredProducts);
                setLoading(false)
            } else {
                setLoading(false)
                setProducts(products);
            }
        })
            .catch(() => {
                console.log("error")
            })
    }, [linkName]);

    











/*
//INTENTO DE QUE FUNCIONE CON API REST
export function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [notFiltered, setNotFiltered] = useState([])
    
    //para atrapar el id de la categoría/link cliqueada
    const { linkName } = useParams()
    //   console.log(linkName)

    const url = "https://fakestoreapi.com/products"

    const getItems = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
            setFiltered(data);
           

        }
        catch {
            setError(true)
        }
        finally {
            setLoading(false);
        }

    }

   


    useEffect(() => {
        getItems(url)


    }, [])

    useEffect(() => {
       
        if (linkName) {
            const filteredProducts = products.filter(product => product.category === linkName)
            //console.log(filteredProducts);
            setFiltered(filteredProducts);
            console.log(filteredProducts);
            setLoading(false);
            console.log("correcto");
        } else {
            setLoading(false);
            setNotFiltered(products);
            console.log("error hoy")
        }
 
    }, [linkName])



    //función que pasa a su hijo ItemCount para el evento del botón "agregar al carrito"
    const onAdd = (counter) => {
        console.log(counter);
    }
*/






    return (
        <>
            <div>
                <h2>{greeting}: {linkName}</h2>
                
                {loading
                    ? (<Loading />)
                   
                        : (<ItemList filtered={products} />)

                }

            </div>
            
        </>
    )
}
/*
 : error
                        ? <span>error</span>*/