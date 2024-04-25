import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
import Spinner from "../Spinner";
export default function SpellsListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://potterapi-fedeperin.vercel.app/en/spells"
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
      <h1 className={style.listPagesH1}>Spells</h1>
      <ul className={style.listPagesUl}>
        {data.map((spell) => (
          <li className={style.listPagesLi} key={spell.index}>
            <Link className={style.listPagesLink} to={`/spells/${spell.index}`}>
              {spell.spell}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
