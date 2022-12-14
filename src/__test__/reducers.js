import { products, cart } from '../reducers';

describe('products', () => {
    it('returns the initial state', () => {
        expect(products(undefined, {})).toEqual([]); //Llamamos a la funcion reductora products y le pasemos undefined devuelve []
    });

    it('receives products', () => {
        const productList = [
            { id: 1, name: "Product 1", price: 100, image: "" }
        ];

        expect(
            products([], { type: "REPLACE_PRODUCTS", products: products })
        ).toEqual(productList); //Llamamos a la funcion reductora correspondiente y le pasamos productList
    })
});