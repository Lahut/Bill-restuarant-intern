import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Categorys from './Components/Categorys';
import SubCategory from './Components/SubCategory';
import OrderButton from './Components/OrderButton';
import Menu from './Components/Menu';

//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';
import { loadCategorys } from './Redux/actions/OrderActions';


function App() {
  useEffect(() => {
    store.dispatch(loadCategorys());
  },[]);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <OrderButton/>
            <Switch>
              <Route exact path='/' component={Categorys} />
              <Route exact path='/subcategory/:category' component={SubCategory} />
              <Route exact path='/subcategory/menu/:name' component={Menu} />         
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
