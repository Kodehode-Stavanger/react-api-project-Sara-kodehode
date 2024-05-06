import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Card";
import style from "../listPagesStyle.module.css";
import Spinner from "../Spinner";
export default function CharactersListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios(
          "https://potterapi-fedeperin.vercel.app/en/characters"
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
  if (loading) return <Spinner type="spin" color="dark blue" />;
  return (
    <div className={style.listPagesContainer}>
      <h1 className={style.listPagesH1}>Characters</h1>
      <ul className={style.listPagesUl}>
        {data.map((character) => (
          <li className={style.listPagesLi} key={character?.index}>
            <Link
              className={style.listPagesLink}
              to={`/characters/${character?.index}`}
            >
              <Card name={character?.fullName} img={character?.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
