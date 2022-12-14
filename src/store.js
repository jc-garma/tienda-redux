import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'; //Middleware
import  * as reducers from './reducers'; //Importa lo exportado en reducers en un objeto reducers, abajo

//Cada vez que haya un dispatch lanza la función logger
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action) //Termine llamando al reducer
    console.log('next state', store.getState()) //Nuevo estado
    return result
}
//Todo lo que este relacionado con la llave cart: lo maneja la función reductora
export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk));

