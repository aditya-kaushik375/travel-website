import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Service from './components/Service'
import Booking from './components/Booking'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
)

export default App
