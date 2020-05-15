import React, { Component } from 'react';
import Project from './components/ProjectComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { PROJECTS } from './shared/projects.js';

class App extends Component {
  constructor(props){
super(props);
this.state = {
  projects:PROJECTS
};
  }
  
  render()
  {
  return (
    <div className="App">
      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="#">Thilakmani</NavbarBrand>
        </div>
      </Navbar>
      <h1>Projects I have made</h1>
      <Project projects={this.state.projects}/>
    </div>
  );
}
}
export default App;
