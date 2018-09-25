import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        book: PropTypes.object.isRequired,
        onChangeBookshelf: PropTypes.func.isRequired
    }

    render() {
        const { books, book, onChangeBookshelf } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" alt="Book cover" src={book.backgroundImage} width={book.imageWidth} height={book.imageHeight} />
                    <div className="book-shelf-changer">
                        <select id="bookshelf-select" name="bookshelf-select" onChange={onChangeBookshelf.bind(this, books, book.id)}>
                            <option value="move">Move to...</option>
                            <option value="Currently Reading">Currently Reading</option>
                            <option value="Want To Read">Want To Read</option>
                            <option value="Read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
            </div>
        )
    }

}

export default Book
