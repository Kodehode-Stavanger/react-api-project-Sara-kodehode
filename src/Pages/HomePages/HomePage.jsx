import { Link, Outlet } from "react-router-dom";
import style from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div>
      <h1 id={style.homepageh1}>Harry Potter</h1>
      <nav>
        <Link to="/characters" className={style.childrenlink}>
          Characters
        </Link>
        <br />
        <Link to="/books" className={style.childrenlink}>
          Books
        </Link>
        <br />
        <Link to="/houses" className={style.childrenlink}>
          Houses
        </Link>
        <br />
        <Link to="/spells" className={style.childrenlink}>
          Spells
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
