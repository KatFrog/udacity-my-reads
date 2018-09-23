import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'


class ListBooks extends Component {
    static propTypes = {
        bookshelves: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired
     }


    render() {
        const { bookshelves, books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf
                        bookshelf={bookshelves[0]}
                        books={books}
                    />
                    <Bookshelf
                        bookshelf={bookshelves[1]}
                        books={books}
                    />
                    <Bookshelf
                        bookshelf={bookshelves[2]}
                        books={books}
                    />
                </div>
            </div>
        )
    }

}

export default ListBooks
