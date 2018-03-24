// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// Containers
import App from './App';

// Store
import reducers from 'store/reducers'
import {receivePolygons} from 'store/actions/Map'

// Workers?
import registerServiceWorker from './registerServiceWorker';

// Sample 
import sample_polygons from 'sample/Polygons'

// Styles
import './index.css';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)

store.dispatch(receivePolygons(sample_polygons))


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
