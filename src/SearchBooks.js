import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import escapeStringRegExp from 'escape-string-regexp'


class SearchBooks extends Component {

    state = {
        query: '',
        foundBooks: [],
        resultsFound: true,
    }

    submitQuery = (foundBooks, newQuery) => {
        if (newQuery) {
            this.setState({ query: newQuery })

        } else {
            this.setState({
                query: newQuery,
                foundBooks: [],
                resultsFound: false})
            return
        }

        const match = escapeStringRegExp(newQuery)

        BooksAPI.search(match)
            .then((value) => {
                if (value.error) {
                    this.setState({resultsFound: false})
                } else {
                    this.setState({resultsFound: true})
                    let tempBooks = value.map((book) => {
                        let newBook = {
                            id: '',
                            title: '',
                            isbn: '',
                            author: [],
                            backgroundImage: '',
                            bookshelf: ''
                        }
                        newBook.id = book.id
                        newBook.title = book.title
                        if (book.industryIdentifiers[0].identifier) {
                            newBook.isbn = book.industryIdentifiers[0].identifier
                        }
                        if (book.authors) {
                            newBook.author = book.authors.slice(0)
                        } else {
                            newBook.author = "Unknown"
                        }
                        if (book.imageLinks) {
                            newBook.backgroundImage = book.imageLinks.thumbnail
                        } else {
                            newBook.backgroundImage = 'icons/cover-not-found.jpg'
                        }
                        return (newBook)
                    })
                    this.setState({foundBooks: tempBooks})
                }

            }) //end of BooksAPI search then
            .catch ((err)  => {
                console.log(err)
            })

    } // end of submitQuery method

    render () {
        const { query, foundBooks, resultsFound } = this.state

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
                            placeholder="Search for books"
                            value={query}
                            onChange={(evt) => this.submitQuery(foundBooks, evt.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results" id="search-results">
                    {!resultsFound && <p>No search results have been found.</p>}
                    <Bookshelf
                        bookshelf="Search Results"
                        currentBooks={foundBooks}
                        onChangeBookshelf = {this.props.onChangeBookshelf}
                    />
                </div>
            </div>

        )
    }
}

export default SearchBooks
