import React from 'react';
import propTypes from 'prop-types';
import Shelf from './Shelf';
import SearchBtn from './SearchBtn';

const Shelves = (props) => {
    const books = props.books
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = books.filter(book => book.shelf === "wantToRead")
    const read = books.filter(book => book.shelf === "read")

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Shelf books={currentlyReading} title={"Currently reading"} bookShelfHandler={props.bookShelfHandler} />
                <Shelf books={wantToRead} title={"Want to read"} bookShelfHandler={props.bookShelfHandler} />
                <Shelf books={read} title={"Read"} bookShelfHandler={props.bookShelfHandler} />
            </div>
            <SearchBtn />
        </div>
    );
};
Shelves.propTypes = {
    books: propTypes.array.isRequired,
    bookShelfHandler: propTypes.func.isRequired,
}
export default Shelves;