import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
//import store from '../store';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';
const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

//4 En lugar de clases funciones. Es un Componente Presentacional, no maneja la lógica ni el estado
//  de eso se encarga el Componente Contenedor que crea react-redux por debajo con connect.

//5 Podemos en lugar de props pasarle directamente en lugar de props {cart, removeFromCart} y quitar props en el html directamente el nombre
const ShoppingCart = (props) => {
    return (
        <Panel header="Shopping Cart">
          <Table fill>
            <tbody>
            {props.cart.map(product =>
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className="text-right">${product.price}</td>
                  <td className="text-right"><Button bsSize="xsmall" bsStyle="danger"
                                                     onClick={() => props.removeFromCart(product)}><Glyphicon
                      glyph="trash"/></Button></td>
                </tr>
            )}
            </tbody>
            <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
            </tfoot>
          </Table>

        </Panel>
    );
}

//2Connect recibe dos funciones:

//2.1Evitamos tener el constructor y definir el estado, utilizamos para ello props
const mapStateToProps = state => {
  //Dentro props
  return {
    cart: state.cart
  };
}

//2.2
const mapDispatchToProps = dispatch => {
  //Dentro props
  return {
    //Metodos que necesitemos en el componente presentacional, en el html de render()
    //Le paso el product a eliminar
    removeFromCart(product) {
      //Actualizacion del store, genero un cambio. Mejora de lo anterior
      dispatch(removeFromCart(product));
    }
  };
}

//1
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart);
