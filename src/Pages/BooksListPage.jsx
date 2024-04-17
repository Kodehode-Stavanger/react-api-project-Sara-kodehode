import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BooksListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/books"
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.map((book) => (
          <li key={book.number}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
