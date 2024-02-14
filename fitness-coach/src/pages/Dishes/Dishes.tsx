import { Link } from "react-router-dom";

export function Dishes() {
  return (
    <>
      <h2>Dishes</h2>
      <p>Filtr</p>
      <ul>
        <Link to={"/dish"}>
          <li>
            <p>Obrazek</p>
            <p>Jmeno jidla</p>
            <p>Prejit</p>
          </li>
        </Link>
        <li>
          <p>Obrazek</p>
          <p>Jmeno jidla</p>
          <p>Prejit</p>
        </li>
        <li>
          <p>Obrazek</p>
          <p>Jmeno jidla</p>
          <p>Prejit</p>
        </li>
      </ul>
      <Link to={"/"}>
        <p>Go back to dashboard</p>
      </Link>
    </>
  );
}
