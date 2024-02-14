import { Link } from "react-router-dom";

export function Friend() {
  return (
    <>
      <p>Friend</p>
      <p>Profilovka</p>
      <p>Jmeno</p>
      <p>Badges</p>
      <p>banner</p>
      <p>status</p>
      <p>status - kratke slovo - info</p>
      <p>bio</p>
      <p>seznam pratel</p>
      <Link to={"/friends"}><p>Go back to friendlist</p></Link>
      <Link to={"/"}><p>Go back to dashboard</p></Link>
    </>
  );
}
