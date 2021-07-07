import React, { Component } from 'react';
import Book from '../components/Book'
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
class Search extends Component {
    state = {
        query: '',
        searchResult: []
    }
    UpdateQuery = (query) => {

        this.setState({
            query: query
        })
        BooksAPI.search(query).then((res) => {
            this.setState({
                searchResult: res
            })
        })
    }
    render() {
        const query = this.state.query;
        const searchResult = this.state.searchResult;
        const booksWithStatusObject = {}
        this.props.books.forEach(el => {
            booksWithStatusObject[el.id] = el
        })
        if (searchResult) {
            var showingBooks = searchResult.length > 0 ? searchResult.map((book, i) => {

                if (book && booksWithStatusObject[book.id]) {
                    return <Book booksWithStatus={booksWithStatusObject[book.id]['shelf']} key={i} book={book} bookShelfHandler={this.props.bookShelfHandler} />
                } else {
                    return <Book booksWithStatus={null} key={i} book={book} bookShelfHandler={this.props.bookShelfHandler} />
                }
            }
            ) : []
        }

        // const query = this.state.query;
        // const searchResult = this.state.searchResult;

        // if (searchResult) {
        //     var showingBooks = searchResult.length > 0 ? searchResult.map(book =>
        //         <Book book={book} bookShelfHandler={this.props.bookShelfHandler} key={book.id} />
        //     ) : []
        // }
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.UpdateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;