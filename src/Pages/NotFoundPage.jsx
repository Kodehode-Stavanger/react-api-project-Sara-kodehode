import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404</h1>;<Link to="/">Go to home page</Link>;
    </div>
  );
}