import { Link } from "react-router-dom";


export function Achievements() {

    return (
        <>
            <p>Achievements</p>
            <input type="text" placeholder="Search"/>
            <button>Search</button>
            <p>Šoupací karty do stran. Každá karta lze otevřít. Po otevření se zobrazí pro danou kartu kategorie Beginner, Medium, Extreme.</p>
            <h2>Beginner</h2>
            <ul>
                <li>
                    <p>Beginner: First session!</p>
                    <p>Description: Start your first session!</p>
                    <p>Status: Unlocked</p>
                </li>
            </ul>
            <h2>Medium</h2>
            <ul>
                <li>
                    <p>Medium: Šubas Champion</p>
                    <p>Description: Eat 5 Paninis in a row!</p>
                    <p>Status: Unlocked</p>
                </li>
            </ul>
            <h2>Extreme</h2>
            <ul>
                <li>
                    <p>Extreme: Champion of pull-ups</p>
                    <p>Description: Do 28 pull-ups in a row!</p>
                    <p>Status: Locked</p>
                </li>
            </ul>
            <Link to={"/"}><p>Go back to dashboard</p></Link>
        </>
    )
}