import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
    static propTypes = {
        bookshelves: PropTypes.arrayOf(PropTypes.object).isRequired,
        books: PropTypes.arrayOf(PropTypes.object).isRequired,
        onChangeBookshelf: PropTypes.func.isRequired
    }
    render() {
        const { bookshelves, books, onChangeBookshelf } = this.props
        let filteredBooks = []
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    {bookshelves.map((bookshelf) => {
                        filteredBooks = books.filter((book) => book.bookshelf === bookshelf.internalName)
                        return (
                            <Bookshelf
                                key={bookshelf.internalName}
                                bookshelf={bookshelf.title}
                                currentBooks={filteredBooks}
                                onChangeBookshelf={onChangeBookshelf}
                            />
                        )
                    })}
                    <Link
                        to='/search'
                        className="open-search-link"
                    >Add a book</Link>
                </div>
            </div>
        )
    }

}

export default ListBooks
