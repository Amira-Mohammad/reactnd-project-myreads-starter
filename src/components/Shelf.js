import React from 'react';
import Book from './Book'
const Shelf = (props) => {
    const booksSlef = props.books
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksSlef.map(book => {
                        return (
                            <li key={book.id}>
                                <Book book={book} bookShelfHandler={props.bookShelfHandler} />
                            </li>
                        )
                    })}

                </ol>
            </div>
        </div>
    );
};

export default Shelf;