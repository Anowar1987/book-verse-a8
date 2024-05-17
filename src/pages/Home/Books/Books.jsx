import { useEffect, useState } from "react";
import Book from '../../../pages/Home/Books/Book'
// import Book from "../Book/Book";

const Books = () => {
const [books, setBooks] = useState([]);

useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));

}, [])

    return (
        <div>
            <div>
            <h2 className="mt-20 text-4xl text-center font-bold">Books</h2>
        </div>
        <div className="ml-32 mr-32 grid grid-cols-3 gap-6">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
        </div>
        </div>
        
    );
};

export default Books;