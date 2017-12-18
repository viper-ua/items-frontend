import React from 'react';
import PropTypes from 'prop-types';
import { getJson } from './apiHost';
import { CategoryLinkContainer } from './CategoryLink';

export class CategoriesContainer extends React.Component {
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
    return <Categories list={this.state.list} />
  }
}

const Categories = (props) => {
  const categoryList = props.list.map(
    (category) => (
      <li key={category.id}>
        <CategoryLinkContainer
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

Categories.propTypes = {
  list: PropTypes.array.isRequired
};