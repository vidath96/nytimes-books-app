import React from 'react';
import { Link } from "react-router-dom";

const Books = props => (
    <div className="container">
      <div className="row">
      { props.books.map((book) => {
        return (
          <div key={book.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
            <div className="book__box">
              <img className="recipe__box-img" src={book.book_image} alt={book.title}/>
              <div className="book__text">
                <h5 className="book__title">
                  { book.title.length < 50 ? `${book.title}` : `${book.title.substring(0, 25)}...` }
                </h5>
                <p className="book__subtitle">Author: <span>{ book.author }</span></p>
                <p className="book__subtitle">Publisher: <span>{ book.publisher }</span></p>
              </div>
              <Link to={{ pathname: `/Book/${book.primary_isbn10}`, state: { book : book.title } }}>
                <button className="book_buttons btn btn-primary">View More</button>
              </Link>&nbsp;
              <a href={book.amazon_product_url}><input type="button" className="btn btn-warning" value="Buy on Amazon"/></a>       
            </div>
          </div>
        );
      })}
      </div>
    </div>
);

export default Books;