import style from "./listPagesStyle.module.css";
import ReactLoading from "react-loading";
export default function Spinner({ type, color }) {
  return (
    <div className={style.spinnerContainer}>
      <ReactLoading type={type} color={color} height={150} width={150} />
    </div>
  );
}
