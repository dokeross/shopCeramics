import React from 'react';
import * as cartActions from '../actions/cart';
import CartComponent from '../components/CartComponent';
import {connect} from 'react-redux';

const removeFromCart = cartActions.removeFromCart;
const mapStateToProps = ({cart}, {id}) => ({
    countIteminCart: cart.itemsCart.reduce((count, item) => count + (item.id === id ? 1 : 0 ), 0)
})

const mapDispatchtoProps = (dispatch) => ({
    removeFromCart: (obj) => 
        dispatch(
            removeFromCart(obj)
        )
    
})

export default connect(mapStateToProps, mapDispatchtoProps) (CartComponent)