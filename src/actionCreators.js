import axios from 'axios';

// Funciones que retornan una acción
const loadProducts = () => {
    /*const products = [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
    ];*/
    //Retorna una funcion anonina que haga una llamada asincrona
    return dispatch => {
        return axios.get("http://localhost:3001/products")
            .then(response => {
                console.log(response.data);
                dispatch({ type: "REPLACE_PRODUCTS", products: response.data });
            });
    };
};

const addToCart = product => {
    return {
        type: "ADD_TO_CART",
        product: product
    };
};

const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product: product
    };
};

//Para que sean visibles los metodos fuera con import
export { loadProducts, addToCart, removeFromCart };


