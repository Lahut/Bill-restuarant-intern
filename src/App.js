import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Categorys from './Components/Categorys';
import SubCategory from './Components/SubCategory';
import OrderButton from './Components/OrderButton';

function App() {
  return (
    <Router>
      <div className="App">
        <OrderButton/>
          <Switch>
            <Route exact path='/' component={Categorys} />
            <Route exact path='/subcategory/:category' component={SubCategory} />        
          </Switch>
      </div>
    </Router>
  );
}

export default App;
