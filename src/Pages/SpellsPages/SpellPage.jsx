import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SpellPage() {
  const [spellData, setSpellData] = useState();
  const { spellId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/spells?index=${spellId}`
      );
      setSpellData(result.data);
    };
    fetchData();
  }, []);
  return <div>{spellId}</div>;
}
