# MyReads Project

This is a project for Udacity's Front-End Nanodegree program. The aim of this project was to practice writing apps with React (the project [rubric](https://review.udacity.com/#!/rubrics/918/view)).  Udacity provided [starter code](https://github.com/udacity/reactnd-project-myreads-starter) with a basic React structure.  To finish the project:
- I moved the information about the current books into a JSON file.
- I created components for the various logic parts of the app with the following flow:

                                      BookStore
                                    /           \
                           ListBooks            SearchBooks
                                    \            /
                                      Bookshelf
                                          |
                                        Book

- I use the following third-party components:
  - react-router - To select which component needs to be shown depending on the URL
  - react-select - To create a select element compatible with React
  - prop-types - To type check props
  - escape-string-regex - To protect the input field of the search from malicious users
- BookStore manages the state, passing the data to ListBooks and SearchBooks.  It also holds the functions to retrieve and format books.
- I save the state to local storage, so that the page looks the same after a refresh.

## Description
My Reads allows you to search for books using specific search terms (found in SEARCH_TERMS.md).  The books are stored in one of three bookshelves:  
 - Currently Reading
 - Want to Read
 - Read
 
 The backend is provided by and run by Udacity.

## To Use My Reads

To use this application you need to:

1. Download or clone this repository.
2. Change directories into the downloaded/cloned code.
3. Run the command "npm install".
4. Run the command "npm start".
