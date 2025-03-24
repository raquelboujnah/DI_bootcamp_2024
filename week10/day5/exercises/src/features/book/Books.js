import { useBookSelector, useBookDispatch } from './hooks';
import {useEffect} from 'react'

const Books = () => {
    const books = useBookSelector()
    const filterBooks = useBookDispatch() 
    
    return (
        <>
            <h2>Books</h2>
            <select onChange={(e) => {filterBooks(e.target.value)}}>
                <option value={'genre'}>Filter by genre</option>
                <option value={'Fiction'}>Fiction</option>
                <option value={'Dystopian'}>Dystopian</option>
                <option value={'Classic'}>Classic</option>
                <option value={'Romance'}>Romance</option>
                <option value={'Fantasy'}>Fantasy</option>
            </select>
            {books.map(book => {
                return (
                    <div key={book.id}>
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                )
            })}
        </>
    );
};

export default Books;