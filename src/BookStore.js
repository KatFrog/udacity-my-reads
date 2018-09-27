import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BookStore extends Component {

    state = {
        bookshelf: ['Currently Reading', 'Want To Read', 'Read'],
        books: [
            {
              id: 0,
              title: "To Kill A Mockingbird",
              isbn: '978-0062428554',
              author: ["Harper Lee"],
              backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
              bookshelf: 'Currently Reading'

            },
            {
              id: 1,
              title: "Ender's Game",
              isbn: '978-0765394866',
              author: ['Orson Scott Card'],
              backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
              bookshelf: 'Currently Reading'

            },
            {
              id: 2,
              title: "1776",
              isbn: '978-0743226714',
              author: ['David McCullough'],
              backgroundImage: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
              bookshelf: 'Want To Read'

            },
            {
              id: 3,
              title: "Harry Potter and the Sorcerer's Stone",
              isbn: '978-0786222728',
              author: ['J.K. Rowling'],
              backgroundImage: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api',
              bookshelf: 'Want To Read'

            },
            {
              id: 4,
              title: "The Hobbit",
              isbn: '978-0618968633',
              author: ['J.R.R. Tolkien'],
              backgroundImage: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
              bookshelf: 'Read'

            },
            {
              id: 5,
              title: "Oh, the Places You'll Go!",
              isbn: '978-0679847366',
              author: ['Dr. Seuss'],
              backgroundImage: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api',
              bookshelf: 'Read'

            },
            {
              id: 6,
              title: "The Adventures of Tom Sawyer",
              isbn: '978-1559937443',
              author: ['Mark Twain'],
              backgroundImage: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api',
              bookshelf: 'Read'

            },
            {
              id: 7,
              title: "Hamlet",
              isbn: 'HARVARD:HN38EQ',
              author: ['William Shakespeare'],
              backgroundImage: 'http://books.google.com/books/content?id=qFUkLT44s4EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              bookshelf: 'Read'
            }
        ]
    }

    changeBookshelf = (changedBook, evt) => {
        evt.persist();
        this.setState(function(prevState) {
            let changed = prevState.books.filter(next => next['id'] === changedBook.id)
                return {
                    prevState: changed[0]['bookshelf'] = evt.target.value
                }
            }
        )

    }

    addBook = (book, evt) => {
        evt.persist();
        book.bookshelf = evt.target.value
        book.id = this.state.books.length
        this.setState(function(prevState) {
            return ( {
                books: prevState.books.concat([ book ])
            })
        })
    }

    render() {
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
                        />
                    )}
                />
            </div>
        ) // end of return()
    } //end of render()
} // end of class declaration


export default BookStore