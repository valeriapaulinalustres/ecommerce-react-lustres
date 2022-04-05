//rfce
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';



/*
ASÍ FUNCIONABA ANTES

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

function ItemDetailContainer() {

   
    //console.log(id)
   

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






function ItemDetailContainer(product) {
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [productsdetail, setProductsdetail] = useState([])


    //promesa para obtener el array, con setTimeout para simular delay 
const getItem = new Promise((res, rej) => {
    setTimeout(() => {
        if (product == 0) {
            rej("no hay productos disponibles")
        } else {
            res(product)
            setProductsdetail(product)
        }
    }, 8000);
});

   
    //console.log(id);
   

    useEffect(() => {
        getItem.then((product) => {
            console.log(product)
           
            console.log(productsdetail)
            if (id) {
                const filteredItems = product.filter(el => el.id === parseInt(id));
                 console.log(filteredItems);
                setItem(filteredItems)
                setLoading(false)
            } else {
                console.log("error");
                //setItem(item);
            }
        })
            .catch(() => {
                console.log("error")
            })
    }, [id]);
//    console.log(item);








    return (
        <h2>hayk</h2>
    )
}

export default ItemDetailContainer

/*
<div>
            <h2>ItemDetailContainer</h2>
            <div>
                {loading
                    ? (<Loading />)
                    : (<ItemDetail item={item}/>)
                }
            </div>
        </div>
        */