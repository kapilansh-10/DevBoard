import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <h2>DevBoard</h2>
            <div style={styles.links}>
                <Link to="/" style={styles.link}>Dashboard</Link>
                <Link to="/tasks" style={styles.link}>Tasks</Link>
                <Link to="/notes" style={styles.link}>Notes</Link>
                <Link to="/profile" style={styles.link}>Profile</Link>
                <Link to="/login" style={styles.link}>Login</Link>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#282c34",
        color: "white"
    },
    links: {
        display: "flex",
        gap: "1rem"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontWeight: "bold"
    }
}