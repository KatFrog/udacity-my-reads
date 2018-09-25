import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        bookshelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeBookshelf: PropTypes.func.isRequired
    }

    render() {
        const { bookshelf, books } = this.props
        let currentBooks = books.filter(book => book.bookshelf === bookshelf)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" id="bookshelf">
                        {currentBooks.map((book) => {
                            return (<li key={book.id} id={book.id}>
                                <Book
                                    books={books}
                                    book={book}
                                    onChangeBookshelf={this.props.onChangeBookshelf}
                                />
                            </li>)
                        })}
                    </ol>
                </div>
            </div>
        )
  }
}

export default Bookshelf
