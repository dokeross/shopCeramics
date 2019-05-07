import react from 'react';
import App from '../components/App';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';

import setProductsAction from '../actions/products'

const filterProducts = (arrProducts, filterBy) => {
  switch(filterBy) {
    case 'Дороже':
        return orderBy(arrProducts, 'price', 'desc')        
    case 'Дешевле':
        return orderBy(arrProducts, 'price', 'ask')
    case 'Популярные':
        return orderBy(arrProducts, 'stars', 'desc')
    default:
      return arrProducts
  }

}

const searchProducts = (arrProducts, searchBy) => 
  arrProducts.filter(product=> product.title.toLowerCase().indexOf(searchBy.toLowerCase()) >= 0 )


const mapStateToProps = ({products, filter}) => ({
    products: products.items && filterProducts(searchProducts(products.items, filter.searchBy), filter.filterBy),
    isReady: products.isReady,
  })
  
const mapDispatchToProps = (dispatch) => ({
  setProducts: (obj) => 
    dispatch(
      setProductsAction(obj)
    )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);