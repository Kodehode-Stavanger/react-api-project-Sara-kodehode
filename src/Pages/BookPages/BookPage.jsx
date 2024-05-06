import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../singleitemStyle.module.css";
import NotFoundPage from "../NotFoundPage";
export default function BookPage() {
  const [bookData, setBookData] = useState();
  const [error, setError] = useState();
  const { bookId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://potterapi-fedeperin.vercel.app/en/books?index=${bookId}`
        );
        console.log(result.data);
        setBookData(result.data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  if (error) return <NotFoundPage msg={error} />;
  return (
    <div className={style.itemPageContainer}>
      <h3 className={style.itemPageTitle}>Book title: {bookData?.title}</h3>
      <h4 className={style.itemPageSubtitle}>
        Release Date: {bookData?.releaseDate}
      </h4>
      <h4 className={style.itemPageSubtitle}>Pages: {bookData?.pages}</h4>
      <img src={bookData?.cover} alt={bookData?.title} />
      <Link className={style.itemPageLink} to="/books">
        Back to Books
      </Link>
    </div>
  );
}
