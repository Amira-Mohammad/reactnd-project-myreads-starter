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
            console.log('resres', res);
            this.setState({
                searchResult: res
            })
        })
    }
    render() {
        const query = this.state.query;
        const searchResult = this.state.searchResult;

        if (searchResult) {
            var showingBooks = searchResult.length > 0 ? searchResult.map(book =>
                <Book book={book} bookShelfHandler={this.props.bookShelfHandler} />
                // <div className="book" key={book.id}>
                //     <div className="book-top">
                //         <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                //         <div className="book-shelf-changer">
                //             <select value={book.shelf} onChange={(e) => { this.props.bookShelfHandler(book, e.target.value) }}>
                //                 <option value="move" disabled>Move to...</option>
                //                 <option value="currentlyReading">Currently Reading</option>
                //                 <option value="wantToRead">Want to Read</option>
                //                 <option value="read">Read</option>
                //                 <option value="none">None</option>
                //             </select>
                //         </div>
                //     </div>
                //     <div className="book-title">{book.title}</div>
                //     <div className="book-authors">{book.authors}</div>
                // </div>
            ) : []
        }



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
                        {/* {showingBooks.map(book => {
                            return (
                                <Book book={book} />
                                // <div className="book" key={book.id}>
                                //     <div className="book-top">
                                //         <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                //         <div className="book-shelf-changer">
                                //             <select value={book.shelf} onChange={(e) => { this.props.bookShelfHandler(book, e.target.value) }}>
                                //                 <option value="move" disabled>Move to...</option>
                                //                 <option value="currentlyReading">Currently Reading</option>
                                //                 <option value="wantToRead">Want to Read</option>
                                //                 <option value="read">Read</option>
                                //                 <option value="none">None</option>
                                //             </select>
                                //         </div>
                                //     </div>
                                //     <div className="book-title">{book.title}</div>
                                //     <div className="book-authors">{book.authors}</div>
                                // </div>



                            )
                        })} */}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;