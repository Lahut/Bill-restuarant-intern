import { createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import OrderReducers from './reducers/OrderReducers';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    Order: OrderReducers
});

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store ;