import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/"
                    render={ () => (
                        <ListBooks />
                    )}
                />
                <Route path="/search"
                    render={ () => (
                        <SearchBooks />
                    )}
                />
            </div>
        ) // end of return()
    } //end of render()
} // end of class declaration

export default BooksApp
