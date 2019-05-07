import React from 'react';
import {Container, Button, Icon} from 'semantic-ui-react';
import Menu from '../containers/Menu'

const FullProductCard = ({product}) => {
return (
    <div>
      <Menu />    
      <Container>
        <section className="productsSinglePage">
          <aside className="asideLeft">
            <p className="asideLeftMenu__headline">Каталог</p>
            <div className="asideLeftMenu">
              <p className="asideLeftMenu__title">
                Керамическая плитка
              </p>
              <div className="asideLeftMenu__filter">
                <a className="asideLeftMenu__filter_a" href=''>Для стен</a>
                <a className="asideLeftMenu__filter_a" href=''>Для пола</a>
              </div>

            </div>
          </aside>
          <main className="mainBlock">
            <div className="mainBlock__title">Плитка {product.title}</div>
            <img src={product.image} alt=""/>
          </main>
          <aside className="asideRight">
            <div className="productParameters">
              <p className="productParameters__headline">
                Коллекция Alyaska
              </p>
              <p className="productParameters__price">Цена за метр <b>{product.price}</b> руб.</p>
              <p className="productParameters__description">
                все представленные товары, находятся в наличии на складе и могут быть доставлены/отпралены вам в ближайшее время. Подробнее о доставке в ваш город
              </p>
            </div>
            
            <div className="productReservation">
              <input type="number" value="1" autofocus class="productReservation__input"/>
              <button className="productReservation__button">положить в корзину</button>
            </div>
            <div className="productDescription">
              <p className="productDescription__title"><b>Характеристики товара</b></p>
              <p className="productDescription__p">
              Полированный декор из керамогранита отличается большой прочностью, легкостью в укладке и повседневном уходе.
              Небольшие размеры делают его очень удобным, позволяя использовать даже на самых небольших площадях.
              </p>
              <p>Размер:<b> 250x400</b></p>
              <p>Страна:<b> Италия</b></p>
              <p>Поверхность:<b> глянцевая</b></p>
            </div>

          </aside>
        </section>  
      </Container>
    </div> 
)
}

export default FullProductCard