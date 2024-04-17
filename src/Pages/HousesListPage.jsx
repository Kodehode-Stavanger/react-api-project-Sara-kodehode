import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HousesListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://potterapi-fedeperin.vercel.app/en/houses"
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Houses</h1>
      <ul>
        {data.map((house) => (
          <li key={house.index}>{house.house}</li>
        ))}
      </ul>
    </div>
  );
}
