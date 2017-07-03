import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { selectBook }         from '../actions/index';
import { bindActionCreators } from 'redux'; // function to make action flow through reducers

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
    return this.props.books.map(book => {
      return (
        <li
        onClick={() => this.props.selectBook(book)}
        key={book.title} className="list-group-item">
          { book.title }
        </li>
      )
    });
  }
}

function mapStateToProps(state) {
  // Whatever is returned from this function will be props within BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
