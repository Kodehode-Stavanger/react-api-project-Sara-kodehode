import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SpellsListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/spells"
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Spells</h1>
      <ul>
        {data.map((spell) => (
          <li key={spell.index}>
            <Link to={`/spells/${spell.index}`}>{spell.spell}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
