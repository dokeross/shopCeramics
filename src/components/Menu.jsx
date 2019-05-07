import React, { Component } from 'react';
import { Menu, Popup, Input } from 'semantic-ui-react';
import CartComponent from '../containers/CartComponent';


 const TopMenu = (props) => {
  
    const {itemsCart, quantityInCart} = props;
    return (
      <Menu>
        <Menu.Item name='browse' >
          <a href="/">Главная</a>
        </Menu.Item>
        
        <Menu.Menu position='right'>
            <Popup
                size='large'
                trigger={
                <Menu.Item name="cart" >
                    Корзина (<b>{quantityInCart}</b>)
                </Menu.Item>
                }
                wide='very'
                content =  {itemsCart.length >0 && itemsCart.map((itemCart, key) => (<CartComponent key={key} {...itemCart} />)) || 'В корзине нет товаров' }
                
                
                on='click'
            />
        </Menu.Menu>
      </Menu>
    )
}
export default TopMenu