import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
import Spinner from "../Spinner";
export default function BooksListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://potterapi-fedeperin.vercel.app/en/books"
        );

        setData(result.data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);
  if (error) return <NotFoundPage msg={error} />;
  if (loading) return <Spinner type="spin" color="black" />;
  return (
    <div className={style.listPagesContainer}>
      <h1 className={style.listPagesH1}>Books</h1>
      <ul className={style.listPagesUl}>
        {data.map((book) => (
          <li className={style.listPagesLi} key={book.number}>
            <Link className={style.listPagesLink} to={`/books/${book.number}`}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
