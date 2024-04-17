import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function CharacterPage() {
  const [characterData, setCharcterData] = useState();
  const { characterId } = useParams();

  return <div>{characterId}</div>;
}
