import React from 'react';
import {Input, Menu} from 'semantic-ui-react';

const Filter = ({changeFilter, filterBy, changeSearch}) => {
    const filterValue = filterBy;
    return (
      <Menu secondary>
            <Menu.Item name='Все' active={filterValue === 'Все'} onClick={changeFilter.bind(this, 'Все')} />
            <Menu.Item name='Дороже' active={filterValue === 'Дороже'} onClick={changeFilter.bind(this, 'Дороже')} />
            <Menu.Item name='Дешевле' active={filterValue === 'Дешевле'} onClick={changeFilter.bind(this, 'Дешевле')} />
            <Menu.Item name='Популярные' active={filterValue === 'Популярные'}  onClick={changeFilter.bind(this, 'Популярные')}/>
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' onChange= {(e) => changeSearch(e.target.value)} placeholder='Search...'  />
            </Menu.Item>
            <Menu.Item
                name='logout'
                
            />
            </Menu.Menu>
      </Menu>
    )
}

export default Filter;