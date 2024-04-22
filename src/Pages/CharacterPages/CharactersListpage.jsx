import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../listPagesStyle.module.css";
export default function CharactersListPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://potterapi-fedeperin.vercel.app/en/characters"
        );
        setData(result.data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {" "}
      {error ? (
        <h1>{error} </h1>
      ) : (
        <div className={style.listPagesContainer}>
          <h1 className={style.listPagesH1}>Characters</h1>
          <ul className={style.listPagesUl}>
            {data.map((character) => (
              <li className={style.listPagesLi} key={character.index}>
                <Link
                  className={style.listPagesLink}
                  to={`/characters/${character.index}`}
                >
                  {character.fullName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
