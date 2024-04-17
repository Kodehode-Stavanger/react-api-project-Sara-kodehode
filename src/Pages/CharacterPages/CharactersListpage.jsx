import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharactersListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/characters"
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {data.map((character) => (
          <li key={character.index}>
            <Link to={`/characters/${character.index}`}>
              {character.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
