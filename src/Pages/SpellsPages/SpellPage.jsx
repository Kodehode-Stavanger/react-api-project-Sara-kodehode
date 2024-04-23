import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SpellPage() {
  const [spellData, setSpellData] = useState();
  const { spellId } = useParams();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://potterapi-fedeperin.vercel.app/en/spells?index=${spellId}`
        );

        console.log(result.data);
        setSpellData(result.data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  if (error) return <NotFoundPage msg={error} />;
  return (
    <div>
      <h4>Spell: {spellData.spell}</h4>
      <h4>Use: {spellData.use}</h4>
    </div>
  );
}
