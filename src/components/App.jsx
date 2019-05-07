import React, { Component } from 'react';
import '../App.css';
import ItemCard from '../containers/ItemCard';
import axios from 'axios';
import Menu from '../containers/Menu';
import { Container, Card } from 'semantic-ui-react';
import Filter from '../containers/Filter';



class App extends Component {

componentWillMount(){
  const {setProducts} = this.props;
  axios.get('/books.json').then(({data}) =>{
    setProducts(data);
  })
}

  render() {
    const {products, isReady} = this.props;
    console.log(this.props)
    return (

      <Container>
        <Menu />
        <Filter />
      <Card.Group itemsPerRow={4}>  
        {
          !isReady ? (
            <b>Загрузка...</b>
          ) : (
            products.map((book, key) => (
              <ItemCard key = {key} book = {book} /> 
            ))
          )  
        } 
      </Card.Group>  
      </Container> 
    );
  }
}


export default App;