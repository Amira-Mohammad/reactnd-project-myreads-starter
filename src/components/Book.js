import React from 'react';

const Book = (props) => {
    const book = props.book;
    const booksStatus = props.booksWithStatus;
    return (
        <div className="book" key={book.id}>
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book && book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => { props.bookShelfHandler(book, e.target.value) }}>


                        <option className={booksStatus && booksStatus === 'currentlyReading' ? 'checked' : 'unchecked'}
                            value="currentlyReading"
                            disabled={booksStatus && booksStatus === 'currentlyReading' ? true : false}>
                            Currently Reading
                        </option>
                        <option
                            value="wantToRead"
                            className={booksStatus && booksStatus === 'wantToRead' ? 'checked' : 'unchecked'}
                            disabled={booksStatus && booksStatus === 'wantToRead' ? true : false}
                        >Want to Read
                        </option>
                        <option
                            value="read"
                            className={booksStatus && booksStatus === 'read' ? 'checked' : 'unchecked'}
                            disabled={booksStatus && booksStatus === 'read' ? true : false}
                        >Read
                        </option>
                        <option value="none"
                            className={booksStatus && booksStatus === '' ? 'checked' : 'unchecked'}
                            disabled={booksStatus && booksStatus === '' ? true : false}
                        >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    );
};

export default Book;