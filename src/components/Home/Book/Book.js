import React from 'react';

const Book = ({book}) => {
    return (
        <div className="card" style={{width: '10rem'}}>
            <img src={book.bookImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{book.bookName}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Grab Now</a>
            </div>
        </div>
    );
};

export default Book;