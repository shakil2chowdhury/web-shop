import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Header from '../Header/Header';
import './Home.css'

const getBooks = [
    {
        id: 1,
        bookName: "Captain America",
        bookAuthor: "Antik Mahmud",
        bookPrice: "10",
        bookImage: "https://c8.alamy.com/comp/T27DD2/italy-1973-first-edition-of-marvel-comic-books-cover-of-captain-america-T27DD2.jpg" 
    },
    {
        id: 1,
        bookName: "Captain America",
        bookAuthor: "Antik Mahmud",
        bookPrice: "10",
        bookImage: "https://c8.alamy.com/comp/T27DD2/italy-1973-first-edition-of-marvel-comic-books-cover-of-captain-america-T27DD2.jpg" 
    },
    {
        id: 1,
        bookName: "Captain America",
        bookAuthor: "Antik Mahmud",
        bookPrice: "10",
        bookImage: "https://c8.alamy.com/comp/T27DD2/italy-1973-first-edition-of-marvel-comic-books-cover-of-captain-america-T27DD2.jpg" 
    },
    {
        id: 1,
        bookName: "Captain America",
        bookAuthor: "Antik Mahmud",
        bookPrice: "10",
        bookImage: "https://c8.alamy.com/comp/T27DD2/italy-1973-first-edition-of-marvel-comic-books-cover-of-captain-america-T27DD2.jpg" 
    }
]

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center mt-4 mb-4">Buy Comics Book Only 10 Taka</h1>
            <div className="book-list">
                {
                    getBooks.map(book => <Book book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default Home;