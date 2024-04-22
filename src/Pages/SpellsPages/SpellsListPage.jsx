import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
export default function SpellsListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/spells"
      );

      setData(result.data);
    };
    fetchData();
  }, []);
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
