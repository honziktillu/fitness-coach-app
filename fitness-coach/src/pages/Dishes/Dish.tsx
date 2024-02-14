import { Link } from "react-router-dom";

export function Dish() {
  return (
    <>
      <p>Obrazek</p>
      <p>Jmeno jidla</p>
      <p>Popisek jidla</p>
      <p>Tabulka - hodnoty</p>
      <p>Upvote</p>
      <p>Downvote</p>
      <Link to={"/dishes"}>
        <p>Go back to dishes</p>
      </Link>
      <Link to={"/"}>
        <p>Go back to dashboard</p>
      </Link>
    </>
  );
}
