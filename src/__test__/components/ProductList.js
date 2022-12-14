import React from 'react';
import { render, mount } from 'enzyme'; //probar de forma aislada con el shallow
import configureStore from 'redux-mock-store';
import ConnectedProductList from '../../components/ProductList'; //Por defecto

const mockStore = configureStore();

//Pruebas de renderizado component ProductList
it('renders no products when store is empty', () => {
    const store = mockStore({ products: [] });

    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find(".product").length).toBe(0); //Assert
});

it('renders products', () => {
    const store = mockStore({
        products: [{ id: 1, name: "Hola Mundo", price: 100, image: "" }]
    });

    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find(".product").length).toBe(1); //Assert esperamos 1 product el que le pasamos
});

it('adds a product to the shopping cart', () => {
    const store = mockStore({
        products: [{ id: 1, name: "Hola Mundo", price: 100, image: "" }]
    });

    const wrapper = mount(<ConnectedProductList store={store}/>); //Para simular un click
    wrapper.find("#product-1 button").simulate('click'); //Assert

    const actions = store.getActions(); //Obtener las acciones de la prueba y verificar
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe("ADD_TO_CART");
    expect(actions[0].product).not.toBeNull(); //El producto no es nulo
});
