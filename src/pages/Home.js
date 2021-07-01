import React from 'react';
import Shelves from '../components/Shelves';
import PropTypes from 'prop-types';
const Home = (props) => {
    const books = props.books
    return (
        <div>
            <Shelves books={books} bookShelfHandler={props.bookShelfHandler} />
        </div>
    );

};
Home.PropTypes = {
    books: PropTypes.array.isRequired
}

export default Home;