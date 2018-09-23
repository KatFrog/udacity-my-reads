import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Book from './Book'

class Bookshelf extends Component {
    static propTypes = {
        bookshelf: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.object).isRequired
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
                            return (<li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <img className="book-cover" alt="Book cover" src={book.backgroundImage} width={book.imageWidth} height={book.imageHeight} />
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want To Read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-author">{book.author}</div>
                                </div>
                            </li>)
                        })}
                    </ol>
                </div>
            </div>
        )
  }
}

export default Bookshelf
