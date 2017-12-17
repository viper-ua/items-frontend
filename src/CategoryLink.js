import React from 'react';
import { getJson } from './apiHost';
import { ItemLink } from './ItemLink';

export class CategoryLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  getCategoryItems(id) {
    let categoryItems = [];
    if (this.state.list.length === 0) {
      const pathToGet = '/categories/' + id;
      getJson(pathToGet)
      .then(response => {
        categoryItems = response[1];
        this.setState({ list: categoryItems });
      })
    } else {
      this.setState({ list: categoryItems });
    }
  }

  render() {
    return <CategoryLinkDisplay 
      categoryName={this.props.categoryName}
      list={this.state.list}
      onClick={this.getCategoryItems.bind(this, this.props.categoryId)}
    />
  }
}

const CategoryLinkDisplay = (props) => {
  const itemsList = props.list.map(
    (item) => (
      <li key={item.id}>
        <ItemLink name={item.name} itemId={item.id} />
      </li>
    ));
  return (
        <div>
          <a href="#Category" onClick={props.onClick}>
          {props.categoryName}
          </a>
          <ul className="items-list">{itemsList}</ul>
        </div>
    )
} 