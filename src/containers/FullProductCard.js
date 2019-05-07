import React from 'react';
import FullProductCard from '../components/FullProductCard';
import { connect } from 'react-redux';

const mapStateToProps = ({products}, ownProps) => ({
    product: products.items.find((item) => item.id === Number(ownProps.match.params.id))
})

export default connect(mapStateToProps) (FullProductCard)