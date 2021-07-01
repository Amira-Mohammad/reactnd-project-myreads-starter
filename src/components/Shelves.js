import React from 'react';
import Shelf from './Shelf';
import SearchBtn from './SearchBtn';

const Shelves = (props) => {
    const books = props.books
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = books.filter(book => book.shelf === "wantToRead")
    const read = books.filter(book => book.shelf === "read")
    console.log('booksbooks', books);
    console.log('currentlyReading', currentlyReading);
    console.log('wantToRead', wantToRead);
    console.log('read', read);
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

export default Shelves;