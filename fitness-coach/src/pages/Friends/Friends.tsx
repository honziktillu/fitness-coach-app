import { Link } from "react-router-dom";

export function Friends() {
  return (
    <>
      <p>Friends</p>
      <input type="text" placeholder="Hledat přítele" />
      <button>Vyhledat</button>
      <ul>
        <li>
          <p>Ikonka</p>
          <p>Petr Pavel</p>
          <Link to="/friend">
            <p>Přejít</p>
          </Link>
        </li>
        <li>
          <p>Ikonka</p>
          <p>Vojta Kdo</p>
          <Link to="/friend">
            <p>Přejít</p>
          </Link>
        </li>
      </ul>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
