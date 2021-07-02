import React from 'react';
import Shelves from '../components/Shelves';
import propTypes from 'prop-types';
const Home = (props) => {
    const books = props.books
    return (
        <div>
            <Shelves books={books} bookShelfHandler={props.bookShelfHandler} />
        </div>
    );

};
Home.propTypes = {
    books: propTypes.array.isRequired
}

export default Home;