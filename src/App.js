import React, { Component } from 'react';
import Project from './components/ProjectComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Home from './components/HomeComponent';
import { PROJECTS } from './shared/projects.js';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';
import { BrowserRouter } from 'react-router-dom';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props){
super(props);
this.state = {
  projects:PROJECTS
};
  }
  
  render()
  {
    const HomePage = () =>
    {
      return(
<Home />
      );
    }
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
  <Switch>
    <Route path="/home" component={HomePage} />
    <Route exact  path="/project" component={() => <Project projects={this.state.projects} />} />
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/home" />
  </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
}
export default App;
