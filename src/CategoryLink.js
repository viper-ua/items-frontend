import React from 'react';
import PropTypes from 'prop-types';
import { getJson } from './apiHost';
import { ItemLinkContainer } from './ItemLink';

export class CategoryLinkContainer extends React.Component {
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
    return <CategoryLink 
      categoryName={this.props.categoryName}
      list={this.state.list}
      onClick={this.getCategoryItems.bind(this, this.props.categoryId)}
    />
  }
}

const CategoryLink = (props) => {
  const itemsList = props.list.map(
    (item) => (
      <li key={item.id}>
        <ItemLinkContainer name={item.name} itemId={item.id} />
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

CategoryLinkContainer.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired
}

CategoryLink.propTypes = {
  categoryName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
}