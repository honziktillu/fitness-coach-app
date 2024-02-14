import { Link } from "react-router-dom";

export function Notifications() {
  return (
    <>
      <p>Notifications</p>
      <ul>
        <li>New alert: Vojta je pejsek</li>
        <li>New alert: Vojta ma nekopara polstar</li>
        <li>New alert: Lorel borem</li>
        <li>New alert: Lorem porem</li>
        <li>New alert: Jasd</li>
        <li>New alert: Pqwepoi</li>
      </ul>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
