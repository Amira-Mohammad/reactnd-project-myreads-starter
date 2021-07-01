import React from 'react'
import Home from './pages/Home';
import Search from './pages/Search';
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  async componentDidMount() {

    const books = await BooksAPI.getAll()
    this.setState({ books });

  }

  bookShelfHandler = (book, shelf) => {

    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(data => {
        this.setState({
          books: data
        })
      })
    })


  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home books={this.state.books} bookShelfHandler={this.bookShelfHandler} />
          </Route>
          <Route path="/search" >
            <Search books={this.state.books} bookShelfHandler={this.bookShelfHandler} />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default BooksApp
