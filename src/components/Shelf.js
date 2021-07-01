import React from 'react';
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
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => { props.bookShelfHandler(book, e.target.value) }} >
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currentl  Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        )
                    })}

                </ol>
            </div>
        </div>
    );
};

export default Shelf;