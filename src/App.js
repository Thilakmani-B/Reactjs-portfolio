import React from 'react';
import Project from './components/ProjectComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="#">Thilakmani</NavbarBrand>
        </div>
      </Navbar>
      <Project />
    </div>
  );
}

export default App;
