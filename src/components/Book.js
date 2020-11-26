import React from 'react';
import { Link } from "react-router-dom";

const API_KEY = "AgaC4xNLSyedv8rp7IcYbkTVieGSTRoC";

class Book extends React.Component {
  state = {
    activeBook: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.book;
    const isbn = this.props.match.params.id;
    const req = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?primary_isbn10=${isbn}&title=${title}&api-key=${API_KEY}`);
    
    const res = await req.json();
    for(var i=0; i<=res.results.books.length;i++){
    const valid = res.results.books[i]?.title===title;
    if(valid){
    this.setState({ activeBook: res.results.books[i]});
    console.log(this.state.activeBook);
    }
    }
  }
  render() {
    const nbook = this.state.activeBook;
    return (
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">The New York Times Best Selling Books</span>
            <Link to="/">
            <button className="active-book__button btn btn-success">Go Home</button>
            </Link>
        </nav>
      <div className="container">
        { this.state.activeBook.length !== 0 &&
        
          <div className="book_box2">
              <div className="row">
            <div className="col-md-4">
                <img className="active-book__img" src={nbook.book_image} alt={nbook.title}/>
            </div>
            <div className="col-md-8">
                <h3 className="active-book__title">{ nbook.title }</h3>
                <h4 className="active-book__author">Author: </h4>
                <span>{ nbook.author }</span>
                <h5 className="active-book__contributor">Contributor: </h5>
                <span>{ nbook.contributor }</span>
                <h5 className="active-book__publisher">Publisher: </h5>
                <span>{ nbook.publisher }</span>
                <h5 className="active-book__isbnone">ISBN 10: </h5>
                <span>{ nbook.primary_isbn10 }</span>
                <h5 className="active-book__isbntwo">ISBN 13: </h5>
                <span>{ nbook.primary_isbn13 }</span>
                <h4 className="active-book__rank"> Rank: 
                <span>{ nbook.rank }</span></h4>
                <h4 className="active-book__description"> Description: </h4> 
                <span>{ nbook.description }</span><br></br><br></br>
                <a href={nbook.amazon_product_url}><input type="button" className="btn btn-warning" value="Buy on Amazon"/></a>
            </div>
          </div>
        </div>
        }
      </div>
      </div>
    );
  }
};

export default Book;