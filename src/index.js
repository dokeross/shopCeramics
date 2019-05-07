import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './containers/App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import createStore from './store';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import ItemCard from './containers/ItemCard';
import FullProductCard from './containers/FullProductCard';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/product/:id" exact component = {FullProductCard} />
      </Switch>
      </div> 
    </Router> 
  </Provider>,
  
  document.getElementById('root')
);


