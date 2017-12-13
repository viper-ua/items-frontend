import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const apiHost = 'http://localhost:3000';

function getJson(urlToGet) {
  return fetch(urlToGet)
  .then(response => { if (response.ok) {
    let jsonResponse = response.json();
    return jsonResponse;
    }},
    response => [{id: 0, name: `Error: ${response.message}`},
                [{id: 0, name: `Error: ${response.message}`}]])
};

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built on React</h1>
        </header>
        <p className="App-intro">
          To get started, push <b>Load Categories</b> button below.
        </p>
      </div>
    );
  }
}

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  getCategories() {
    const urlToGet = apiHost + '/categories';
    getJson(urlToGet)
    .then(response => {
      let categories = []
      console.log(response);
      categories = response.map(
        (category) => (
          <li key={category.id}>
            <CategoryLink categoryName={category.name} categoryId={category.id} />
          </li>
        ));
      this.setState({ list: categories })
    });
  }
  
  render() {
    let buttonText = '>> Load Categories <<'
    return (
      <div>
        <button onClick={this.getCategories.bind(this)}>
        {buttonText}
        </button>
        <ul className="categories-list">{this.state.list}</ul>
      </div>
    )
  }
}

class CategoryLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  getCategoryItems(id) {
    let categoryItems = [];
    if (this.state.list.length === 0) {
      const urlToGet = apiHost + '/categories/' + id;
      getJson(urlToGet)
      .then(response => {
        categoryItems = response[1].map(
          (item) => (
            <li key={item.id}>
              <ItemLink name={item.name} itemId={item.id} />
            </li>
          ));
        this.setState({ list: categoryItems });
      });
    } else {
      this.setState({ list: categoryItems });
    }
  }

  render() {
    return (
        <div>
          <a href="#Category" onClick={this.getCategoryItems.bind(this, this.props.categoryId)}>
          {this.props.categoryName}
          </a>
          <ul className="items-list">{this.state.list}</ul>
        </div>
    )
  }
} 

class ItemLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  getItemProps(id) {
    let itemProps = [];
    if (this.state.list.length === 0) {
      const urlToGet = apiHost + '/items/' + id;
      getJson(urlToGet)
      .then(response => {
        itemProps = (
            <li>
              <i>{response.description}</i><br/>
              <b>Price:</b> {response.price}
            </li>
          );
        this.setState({ list: itemProps });
      });
    } else {
      this.setState({ list: itemProps });
    }
  }

  render() {
    return (
        <div>
          <a href="#Item" onClick={this.getItemProps.bind(this, this.props.itemId)}>
          {this.props.name}
          </a>
          <ul className="description">{this.state.list}</ul>
        </div>
    )
  }
} 