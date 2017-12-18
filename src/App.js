import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CategoriesContainer } from './Categories'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built on React</h1>
        </header>
        <p className="App-intro">
          <b>Simple client-server catalog</b>
        </p>
        <CategoriesContainer />
      </div>
    );
  }
}