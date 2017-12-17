import React from 'react';
import PropTypes from 'prop-types';
import { getJson } from './apiHost';
import { CategoryLink } from './CategoryLink';

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    const pathToGet = '/categories';
    getJson(pathToGet)
    .then(response => {
      this.setState({ list: response })
    });
  }
  
  render() {
    return <CategoriesDisplay list={this.state.list} />
  }
}

const CategoriesDisplay = (props) => {
  const categoryList = props.list.map(
    (category) => (
      <li key={category.id}>
        <CategoryLink
          categoryName={category.name}
          categoryId={category.id}
        />
      </li>
    ));
  return (
      <div style={{ textAlign: 'left' }}>
        <ul className="categories-list">{categoryList}</ul>
      </div>
    )
}

CategoriesDisplay.propTypes = {
  list: PropTypes.array.isRequired
};