import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";

export default function HousesListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/houses"
      );

      setData(result.data);
    };
    fetchData();
  }, []);
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
