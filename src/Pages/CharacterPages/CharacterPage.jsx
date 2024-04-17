import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function CharacterPage() {
  const [characterData, setCharcterData] = useState();
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/characters?index=${characterId}`
      );
      console.log(result.data);
      setCharcterData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Full Name: {characterData?.fullName}</h3>
      <h4>Birth date: {characterData?.birthdate}</h4>
      <h4>Hogwarts House: {characterData?.hogwartsHouse}</h4>
      <Link to="/characters">Back to Characters</Link>
    </div>
  );
}
