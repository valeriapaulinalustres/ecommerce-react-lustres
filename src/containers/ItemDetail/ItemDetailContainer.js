//rfce
import { useEffect, useState } from 'react';
import Loading from "../../components/Loading/Loading.js";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {data} from '../../mocks/data';
import './itemDetailContainer.css';
//firebase
import {db} from "../../firebase/firebase.js";
import {collection, doc, getDoc} from "firebase/firestore"




//promesa para obtener el array, con setTimeout para simular delay 
const getItem = new Promise((res, rej) => {
    setTimeout(() => {
        if (data == 0) {
            rej("no hay productos disponibles")
        } else {
            res(data)
        }
    }, 2000);
});

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [productsdetail, setProductsdetail] = useState([])
   
    //console.log(id)
   
useEffect(() => {
  const productsCollection = collection(db, "ItemCollection");
  const refDoc = doc(productsCollection,id);
  getDoc(refDoc)
  .then((result)=>{

const product = result.data();
//console.log(product);

const productConId = {...product, id}




      setItem(productConId);
      //mostrar el producto seleccionado:
//console.log(productConId);
  })
  .catch(() => {
    console.log("error")
})
.finally(()=>{
    setLoading(false)
})
}, [id])



/*
HARDCODEADO

    useEffect(() => {
        getItem.then((item) => {
            if (id) {
                const filteredItems = item.filter(el => el.id == id);
                //  console.log(filteredItems)
                setItem(filteredItems)
                setLoading(false)
            } else {
                setItem(item);
            }
        })
            .catch(() => {
                console.log("error")
            })
    }, [id]);
//    console.log(item);

*/




/*
//INTENTO DE QUE FUNCIONE CON API REST

function ItemDetailContainer() {
    const url = "https://fakestoreapi.com/products"
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [productsdetail, setProductsdetail] = useState([])


    //console.log(id);
    const getItems = async (url) => {
             
        const response = await fetch(url);
        const data = await response.json();
        setProductsdetail(data)
       
    }

    useEffect(() => {

        fetch (url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProductsdetail(data)
        })
       
        
            getItems(url)
       
            if (id) {
                const filteredItems = productsdetail.filter(el => el.id === parseInt(id));
                 console.log(filteredItems);
                setItem(filteredItems)
                setLoading(false)
            } else {
                console.log("error");
                //setItem(item);
            }
        },
        
            
     [id, url]);
//    console.log(item);






*/

    return (
        <div>
            <div>
                {loading
                    ? (<Loading />)
                    : (<ItemDetail item={item}/>)
                }
            </div>
        </div>
        
    )
}

export default ItemDetailContainer



 
            