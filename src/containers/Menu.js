import React from 'react';
import {connect} from 'react-redux';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => ({
    itemsCart: uniqBy(cart.itemsCart, o => o.id),
    quantityInCart: cart.itemsCart.length
})

export default connect(mapStateToProps)(Menu)