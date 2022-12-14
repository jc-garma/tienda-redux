import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../actionCreators';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

//En lugar de props directamente las dos que se necesitan { products, addToCart }
export const ProductList = ({ products, addToCart }) => {
    return (
      <div style={styles.products}>
        {products.map(product =>
          <div id={"#product-" + product.id} className="thumbnail product" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
  //2Connect recibe dos funciones:

  //2.1Evitamos tener el constructor y definir el estado, utilizamos para ello props
  const mapStateToProps = state => {
    return {
      products: state.products
    };
  };

  //2.2
  const mapDispatchToProps = dispatch => {
    return {
      //Metodos que necesitemos en el componente presentacional, en el html de render()
      addToCart(product) {
        dispatch(addToCart(product));
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps) (ProductList);
