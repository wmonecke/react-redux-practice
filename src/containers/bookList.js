import React, { Component } from 'react';
import { connect }          from 'react-redux';

// A container is a react component that has a direct connection to the state managed by redux.
// Its like a component with super powers, that is able to get the state from redux

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }

  renderList() {
    return this.props.books.map( book => {
      return (
        <li key={book.title} className="list-group-item">
          { book.title }
        </li>
      )
    });
  }
}

function mapStateToProps(state) {
  // Whatever is returned from this function will be props within BoolList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList)
