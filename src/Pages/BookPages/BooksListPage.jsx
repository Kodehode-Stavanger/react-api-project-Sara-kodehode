import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
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
