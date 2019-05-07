import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

import { Link } from 'react-router-dom';


const ItemCard = (props) => {
  const {book, addToCart} = props
  const id = book.id
  return (
  
    <Card>
    <Image src={book.image} />
    <Card.Content>
      <Card.Header>
        <Link to={`/product/${id}`}>
          {book.title}
        </Link>
      </Card.Header>
      <Card.Description>Краткое описание</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {book.price}
      </a>
    </Card.Content>
    < Button onClick={addToCart.bind(this, book)} >Добавить в корзину</Button>
  </Card>
)
}
export default ItemCard;