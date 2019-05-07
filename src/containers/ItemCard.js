import React from 'react';
import { connect } from 'react-redux';
import ItemCard from '../components/ItemCard';
import * as cartActions from '../actions/cart';

const addToCart = cartActions.addToCart;
const mapStateToProps = ({products}) => ({
    products: products
})

const mapDispatchToProps = (dispatch)=> ({
    addToCart: (product)=> 
        dispatch(
            addToCart(product)
        )
})


export default connect(mapStateToProps, mapDispatchToProps) (ItemCard)
