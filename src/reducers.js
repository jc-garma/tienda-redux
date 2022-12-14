//Pasarselo a state de products, estado más complejo
/*const initialState = {

}*/

//Para crear un store. El store llama al reducer para comunicar su estado actual y retorna el nuevo estado
//Reemplaza los productos y los carga en la lista
//Ya no retorna el estado completo, solo lo que va dentro de la llave products un array [], un trozo de estado

//Estado inicial [] antes estaba abajo del todo
const products = (state=[], action) => {
    if(action.type === "REPLACE_PRODUCTS"){
        return action.products;
    }
    return state;
};

const cart = (state=[], action) => {
    if (action.type === "ADD_TO_CART"){
        //Se devuelven varias cosas
        return state.concat(action.product);
    } else if(action.type === "REMOVE_FROM_CART"){
        return state.filter(product => product.id !== action.product.id);
    }
    return state;
};

export { products, cart };