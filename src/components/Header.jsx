import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav style={{ display: "flex", gap: "20px" }}>
                <Link to="">Home</Link>
                <Link to="stagepage/1">Stage 1</Link>
                <Link to="stagepage/2">Stage 2</Link>
            </nav>
        </header>
    )
}