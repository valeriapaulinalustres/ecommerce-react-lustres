//rfce
import { useEffect, useState } from 'react';
import Loading from "./Loading";
import ItemDetail from "./ItemDetail";



const data = {
    id: 1,
    title: "Gardenia",
    price: 200,
    stock: 5,
    description: "Lorem ipsum ....",
    pictureUrl: "https://media.istockphoto.com/photos/gardenia-jasminoides-picture-id501234446?b=1&k=20&m=501234446&s=170667a&w=0&h=HYv2_quh3SdIyqgd4tGEgfu9mOirCTWEgI9Yc6bepN4="
}



//promesa para obtener el array, con setTimeout para simular delay 
const getItem = new Promise((res, rej) => {
    setTimeout(() => {
        if (data == 0) {
            rej("no hay productos disponibles")

        } else {
            res(data)
            console.log(data);
    
        }

    }, 2000);
});







function ItemDetailContainer() {


    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        getItem.then((item) => {
            setLoading(false)
            setItem(item);
        })
            .catch(() => {
                console.log("error")
            })
    }, []);






  return (
    <div>
        <h2>ItemDetailContainer</h2>

        <div>
        {loading
            ?(<Loading/>)
        : (<ItemDetail item={item} />)
        }
        </div>
        
       </div>
  )
}

export default ItemDetailContainer