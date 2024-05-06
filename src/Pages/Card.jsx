import style from "./listPagesStyle.module.css";
export default function Card({ name, img, emoji }) {
  return (
    <div className={style.cardContainer}>
      <img className={style.cardImage} src={img} />
      <h4 className={style.cardName}>{name}</h4>
      <h3>{emoji}</h3>
    </div>
  );
}
