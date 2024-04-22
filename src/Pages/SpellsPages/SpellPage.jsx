import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SpellPage() {
  const [spellData, setSpellData] = useState();
  const { spellId } = useParams();
  console.log(
    `https://potterapi-fedeperin.vercel.app/en/spells?index=${spellId}`
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/spells?index=${spellId}`
      );

      console.log(result.data);
      setSpellData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h4>Spell: {spellData.spell}</h4>
      <h4>Use: {spellData.use}</h4>
    </div>
  );
}
