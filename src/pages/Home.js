import React from 'react';
import Shelves from '../components/Shelves'
const Home = (props) => {
    const books = props.books
    return (
        <div>
            <Shelves books={books} bookShelfHandler={props.bookShelfHandler} />
        </div>
    );
};

export default Home;