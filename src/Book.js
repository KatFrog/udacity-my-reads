import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeBookshelf: PropTypes.func.isRequired
    }

    render() {
        const { book, onChangeBookshelf } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <img className="book-cover" alt="Book cover" src={book.backgroundImage}
                     />
                    <div className="book-shelf-changer">
                        <select id="bookshelf-select" name="bookshelf-select" onChange={onChangeBookshelf.bind(this, book)}>
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want To Read</option>
                            <option value="read">Read</option>
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
