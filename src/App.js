import './App.css';
import { Navbar } from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import { Donations } from './Components/Pages/Donations'
import { Lend } from './Components/Pages/Lend'
import {Pricing} from './Components/Pages/Pricing'
import {ContactUs} from './Components/Pages/ContactUs'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className='Contents'>
          <Switch>
            <Route path='/' exact component = {Home} />
            <Route path='/donate' exact component={Donations} />
            <Route path='/lend' exact component = {Lend} />
            <Route path='/pricing' exact component = {Pricing} />
            <Route path='/contact' exact component = {ContactUs}/>
        </Switch>
        </div>
        </Router>
    </div>
  );
}

export default App;
