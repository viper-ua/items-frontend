import React from 'react';
import PropTypes from 'prop-types';
import { getJson } from './apiHost';

export class ItemLinkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
  }

  getItemProps(id) {
    if (this.state.details.description === undefined) {
      const pathToGet = '/items/' + id;
      getJson(pathToGet)
      .then(response => {
        this.setState({ details: {
          description: response.description,
          price: response.price
        }});
      });
    } else {
      this.setState({ details: {}});
    }
  }

  render() {
    return <ItemLink
      name={this.props.name}
      details={this.state.details}
      onClick={this.getItemProps.bind(this, this.props.itemId)}
    />
  }
} 

const ItemLink = (props) => {
  let itemProps = '';
  if (props.details.description !== undefined) {
    itemProps = (
      <p className="description">
        <i>{props.details.description}</i><br/>
        <b>Price:</b> {props.details.price}
      </p>
      )};
  return (
      <div>
        <a href="#Item" onClick={props.onClick}>
        {props.name}
        </a>
        {itemProps}
      </div>
  )
}

ItemLinkContainer.propTypes = {
  name: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired
};

ItemLink.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.shape({
    description: PropTypes.string,
    price: PropTypes.price
  }).isRequired,
  onClick: PropTypes.func.isRequired
};