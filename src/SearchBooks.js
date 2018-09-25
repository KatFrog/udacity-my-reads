import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import ListBooks from './ListBooks'
import escapeStringRegExp from 'escape-string-regexp'


class SearchBooks extends Component {

    state = {
        query: ''
    }

    updateQuery = (newQuery) => {
        this.setState({ query: newQuery })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    submitQuery = (foundBooks, query) => {
        const match = escapeStringRegExp(query)
        BooksAPI.search(query).then((value) =>
            console.log(value)
        )
    }

    render () {
        const { query } = this.state
        let foundBooks = []

        return (
            <div className="search-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">

                      <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(evt) => this.updateQuery(evt.target.value)}
                        />
                        <button type="submit" className='search-submit' onClick={() => this.submitQuery(foundBooks, query)}>Submit</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default SearchBooks

// <div className="search-books-results">
//     <ol className="books-grid">
//         {foundBooks.map((book) => {
//             return (<li key={book.id} id={book.id}>
//                 <Book
//                     books={books}
//                     book={book}
//                     onChangeBookshelf={this.props.onChangeBookshelf}
//                 />
//             </li>)
//         })}
//     </ol>
// </div>
