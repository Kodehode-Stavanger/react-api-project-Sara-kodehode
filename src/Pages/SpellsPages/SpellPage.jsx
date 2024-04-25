import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "../singleitemStyle.module.css";
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

        setSpellData(result.data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);
  if (error) return <NotFoundPage msg={error} />;
  return (
    <div className={style.itemPageContainer}>
      <h3 className={style.itemPageTitle}>Spell: {spellData?.spell}</h3>
      <h4 className={style.itemPageSubtitle}>Use: {spellData?.use}</h4>
      <Link className={style.itemPageLink} to="/spells">
        Back to Spells
      </Link>
    </div>
  );
}
