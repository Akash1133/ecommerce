import './App.css';
import HOME from './components/home';
import NAV from './components/nav';
import FOOTER from './components/footer'
import PRODUCTPAGE from './singleproduct/productpage';
import ALLPRODUCT from './products/product'
import LOGIN from './account/login';
import SIGNUP from './account/signup';

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
       <Route exact path='/singleproduct'>
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
       
       
       </Switch>
       </div>
       <FOOTER/>
       </div>
       </Router>
        
  );
}

export default App;
