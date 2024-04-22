import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../singleitemStyle.module.css";
export default function BookPage() {
  const [bookData, setBookData] = useState();
  const { bookId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/books?index=${bookId}`
      );

      setBookData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className={style.itemPageContainer}>
      <h3 className={style.itemPageTitle}>Book title: {bookData?.title}</h3>
      <h4 className={style.itemPageSubtitle}>
        Release Date: {bookData?.releaseDate}
      </h4>
      <h4 className={style.itemPageSubtitle}>Pages: {bookData?.pages}</h4>
      <Link className={style.itemPageLink} to="/books">
        Back to Books
      </Link>
    </div>
  );
}
