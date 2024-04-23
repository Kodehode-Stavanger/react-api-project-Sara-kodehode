import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
import Spinner from "../Spinner";

export default function HousesListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://potterapi-fedeperin.vercel.app/en/houses"
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
      <h1 className={style.listPagesH1}>Houses</h1>
      <ul className={style.listPagesUl}>
        {data.map((house) => (
          <li className={style.listPagesLi} key={house.index}>
            <Link className={style.listPagesLink} to={`/houses/${house.index}`}>
              {house.house}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
