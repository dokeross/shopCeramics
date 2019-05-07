import React from 'react';
import { List, Image, Button } from 'semantic-ui-react'

const CartComponent = (props) => {

    const {removeFromCart, id, title, image, countIteminCart} = props;
    return (
    
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
            <Button basic size='mini' icon='close' color='google plus' onClick={removeFromCart.bind(this, id)} />
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title} ({countIteminCart} шт.)</List.Content>
        </List.Item>
    </List>


    // <Card>
    //     <Card.Content>
    //     <Image floated='left' size='mini' src={image} />
    //     <Card.Header>{title}</Card.Header>({countIteminCart} шт.)
    //     <Card.Meta>200 р.
    //     <Button size='mini' attached='left' color='red' floated='right'  onClick={removeFromCart.bind(this, id)}>Удалить</Button>
    //     </Card.Meta>
        
    //     </Card.Content>
    // </Card>
    )
}
export default CartComponent;