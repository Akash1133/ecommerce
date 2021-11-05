import './App.css';
import HOME from './components/home';
import NAV from './components/nav';
import FOOTER from './components/footer'
import PRODUCTPAGE from './singleproduct/productpage';
import ALLPRODUCT from './products/product'
import LOGIN from './account/login';
import SIGNUP from './account/signup';
import PRODUCT from './components/allproduct'
import CART from './cart/cart'

import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router basename="app">
    <div className="App">
       <NAV/>
       <div>
       <Switch>
       <Route exact path='/'>
       <HOME/>
       </Route>
       <Route exact path='/singleproduct/:id'>
       <PRODUCTPAGE/>
       </Route>
       <Route exact path='/login'>
       <LOGIN/>
       </Route>
       <Route exact path='/register'>
       <SIGNUP/>
       </Route>
       <Route exact path='/products'>
       <ALLPRODUCT/>
       </Route>
       <Route exact path='/product'>
       <PRODUCT/>
       </Route>
       <Route exact path='/cart'>
       <CART/>
       </Route>

       
       
       </Switch>
       </div>
       <FOOTER/>
       </div>
       </Router>
        
  );
}

export default App;
