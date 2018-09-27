import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BookStore extends Component {
    state = {
        bookshelf: [
            {
                internalName: 'currentlyReading', // internal value
                title: 'Currently Reading', // external value
            },
            {
                internalName: 'wantToRead',
                title: 'Want To Read',
            },{
                internalName: 'read',
                title: 'Read',
            },
        ],
        books: [],
    }

    formatBookInfo = (book) => {
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
        if (book.shelf) {
            newBook.bookshelf = book.shelf
        } else {
            newBook.bookshelf = "wantToRead"
        }
        return(newBook)
    }

    getBooks = () => {
        BooksAPI.getAll().then ((value) => {
            if (value.error) {
                console.log(value.error)
            } else {
                let tempBooks = value.map((book) => {
                    let nextBook = this.formatBookInfo(book)
                    return (nextBook)
                })
                this.setState({books: tempBooks})
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    changeBookshelf = (changedBook, evt) => {
        evt.persist();
        this.setState(function(prevState) {
            let changed = prevState.books.filter(next => next['id'] === changedBook.id)
            BooksAPI.update(changedBook.id, evt.target.value)
                return {
                    prevState: changed[0]['bookshelf'] = evt.target.value
                }
            }
        )

    }

    addBook = (book, evt) => {
        evt.persist();
        book.bookshelf = evt.target.value
        BooksAPI.update(book, evt.target.value).then((value) => {
            console.log('success')
        }).catch((err) => {
            console.log("update failed")
        })
        this.setState(function(prevState) {
            return ( {
                books: prevState.books.concat([ book ])
            })
        })
    }

    render() {
        this.getBooks()
        return (
            <div className="app">
                <Route exact path="/"
                    render={ () => (
                        <ListBooks
                            books={this.state.books}
                            bookshelves={this.state.bookshelf}
                            onChangeBookshelf={this.changeBookshelf}
                        />
                    )}
                />
                <Route path="/search"
                    render={ () => (
                        <SearchBooks
                            onChangeBookshelf={this.addBook}
                            onFormatBook={this.formatBookInfo}
                        />
                    )}
                />
            </div>
        ) // end of return()
    } //end of render()
} // end of class declaration


export default BookStore
