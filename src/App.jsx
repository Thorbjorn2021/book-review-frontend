import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import api from './api/axiosConfig';

function App() {

  const [books, setBooks] = useState();

  useEffect(() => {
    getBooks();
  }, []);

  
  const getBooks = async () => {
    try {

      const response = await api.get("api/v1/books");
      setBooks(response.data);

    } catch (error) {
      console.log(error)
      
    }
    console.log(books)
  }

  return (
    <div className='App'>

    </div>
    /*
    <div>
    
      <h2>Book REST API</h2>
       <p>
        {data.title}
       </p>
       <img src={data.thumbnail}></img>
      <p>
        Categories: {data.categories}
      </p>
      <p>Published: {data.published_year}</p>
    </div>
    * */
  )


}


export default App
