import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function BookPage() {
  const [bookData, setBookData] = useState();
  const { bookId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/books?index=${bookId}`
      );
      console.log(result.data);
      setBookData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Book title: {bookData?.title}</h3>
      <h4>Release Date: {bookData?.releaseDate}</h4>
      <h4>Pages: {bookData?.pages}</h4>
      <Link to="/books">Back to Books</Link>
    </div>
  );
}
