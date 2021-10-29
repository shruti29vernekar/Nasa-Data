import react from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div className="navbar">
            <ul>
                <Link className="Link" to="/">Take me Home</Link>
            </ul>
        </div>
    );
}