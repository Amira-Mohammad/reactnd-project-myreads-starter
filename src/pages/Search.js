import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
class Search extends Component {
    state = {
        query: ''
    }


    UpdateQuery = (query) => {
        this.setState({
            query: query
        })
        BooksAPI.search(query).then(() => {
            BooksAPI.search()
        })
    }
    render() {
        const query = this.state.query;
        const books = this.props.books;
        const showingBooks = query === '' ? books : books.filter((b) => (
            b.title.toLowerCase().includes(query.toLowerCase())
        ))
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.UpdateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map(book => {
                            return (
                                <div className="book" key={book.id}>
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => { this.props.bookShelfHandler(book, e.target.value) }}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            )
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;