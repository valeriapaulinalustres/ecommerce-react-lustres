//rfce
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


/*

const data = {
    id: 1,
    title: "Gardenia",
    price: 200,
    stock: 5,
    description: "Lorem ipsum ....",
    pictureUrl: "https://media.istockphoto.com/photos/gardenia-jasminoides-picture-id501234446?b=1&k=20&m=501234446&s=170667a&w=0&h=HYv2_quh3SdIyqgd4tGEgfu9mOirCTWEgI9Yc6bepN4="
}
*/
/*
//array de productos
const data = [
    { id: 1, title: "Gardenia", price: 500, pictureUrl: "https://media.istockphoto.com/photos/gardenia-jasminoides-picture-id501234446?b=1&k=20&m=501234446&s=170667a&w=0&h=HYv2_quh3SdIyqgd4tGEgfu9mOirCTWEgI9Yc6bepN4=", category: "perennes", description: "lorem...", stock: 5 },
    { id: 2, title: "Hortensia", price: 700, pictureUrl: "https://cdn.pixabay.com/photo/2019/07/06/18/06/flowers-4320891__340.jpg", category: "perennes", description: "lorem...", stock: 5 },
    { id: 3, title: "Zinnia", price: 200, pictureUrl: "https://cdn.pixabay.com/photo/2018/07/05/19/01/tin-3518967__340.jpg", category: "anuales", description: "lorem...", stock: 5 },
    { id: 4, title: "Rosa", price: 600, pictureUrl: "https://cdn.pixabay.com/photo/2017/03/05/01/10/roses-2117370__340.jpg", category: "perennes", description: "lorem...", stock: 5 }

]

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
*/
function ItemDetailContainer() {

    
    const [item, setItem] = useState([]);
    const [loadings, setLoadings] = useState(true);
   const [allproducts, setAllproducts] = useState([]);
   const { id } = useParams()
   console.log(id)
   const [error, setError] = useState([])
//console.log(products)


const url= "https://fakestoreapi.com/products"

const getItem = async (url) =>{
    try{
        const response = await fetch (url);
        const data = await response.json();
        setAllproducts(data);
        console.log(data);
       //se supone que en el estado están 
        if (id) {
            const filteredItem = allproducts.filter(el => el.id === parseInt(id));
            //  console.log(filteredItem)
            //  console.log(parseInt(id));
           
            setItem(filteredItem)
            setLoadings(false)
            console.log("entró x el if");
            console.log(filteredItem);};
        
    }
    catch {
        setError(true)
    }
   finally {
    setLoadings(false);
   }
   
}

useEffect(() => {
  getItem(url)

const getIte = async () =>{
    
        const respons = await getItem();
       
        setAllproducts(respons);
        console.log(respons);
       //se supone que en el estado están 
        if (id) {
            const filteredItem = allproducts.filter(el => el.id === parseInt(id));
            //  console.log(filteredItem)
            //  console.log(parseInt(id));
           
            setItem(filteredItem)
            setLoadings(false)
            console.log("entró x el if");
            console.log(filteredItem);
        }
    }
        
 
}, [url,id])




/*

    useEffect(() => {

      
       console.log(allproducts);
            if (id) {
                const filteredItem = allproducts.filter(el => el.id === parseInt(id));
                //  console.log(filteredItem)
                //  console.log(parseInt(id))
               
                setItem(filteredItem)
                setLoadings(false)
                console.log("entró x el if");
                console.log(filteredItem);
            } else {
              // setItem(item);
              console.log("error en idc")
            }
        
    }, [id]);
  

*/


    return (
        <div>
            <h2>ItemDetailContainer</h2>
            <div>
                {loadings
                    ? (<Loading />)
                    : (<ItemDetail item={item}/>)
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer