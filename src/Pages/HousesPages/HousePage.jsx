import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function HousePage() {
  const [houseData, setHouseData] = useState();
  const { houseId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://potterapi-fedeperin.vercel.app/en/houses?index=${houseId}`
      );
      console.log(result.data);
      setHouseData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>House Name: {houseData?.house}</h3>
      <h4>House Founder: {houseData?.founder}</h4>
      <h4>House Animal: {houseData?.animal}</h4>
      <Link to="/houses">go to Houses</Link>
    </div>
  );
}
