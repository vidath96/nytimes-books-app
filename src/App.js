import React, { Component } from 'react';
import './App.css';
import Books from "./components/Books";

const API_KEY = "AgaC4xNLSyedv8rp7IcYbkTVieGSTRoC";

class App extends Component {

  state = {
    books:[]
  }
  
  componentDidMount = async () => {
    const api_call = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
    const data = await api_call.json();

    this.setState({books : data.results.books});
    console.log(this.state.books);
  }

  render() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">The New York Times Best Selling Books</span>
      </nav>
      <Books books={this.state.books} />
    </div>
  );
  }
}

export default App;
