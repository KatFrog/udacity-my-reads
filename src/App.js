import React from 'react'
import { Router } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from 'ListBooks'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

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

      </div>
    )
  }
}

export default BooksApp
