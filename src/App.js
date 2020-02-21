import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import PortfolioDetail from './Portfolio/Detail'
import Posts from './Posts'
import Contact from './Contact'
import Footer from './Footer'

const App = (props) => {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path="/portfolio/detail/:id" component={PortfolioDetail} />
        <Route exact path='/posts' component={Posts} />
        {/* <Route path='/contact' render={() => <Contact choices={['For', 'Against', 'Neither']} />} /> */}
        <Route path="/contact" component={Contact} choices={['For', 'Against', 'Neither']} />
      </Switch>
      <Footer />
    </div>
  );

};

export default App;
