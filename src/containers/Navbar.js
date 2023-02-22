import '../containers/styles.css';

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            PCMakyr Official
        </a>
        <ul>
            <li>
                <a href="/pricing">PC pricing</a>
            </li>
            <li>
                <a href="/customer support">Customer Support</a>
            </li>
            <li>
                <a href="/about">About Us</a>
            </li>
            <li>
                <a href="/GET YOURS TODAY">GET YOURS TODAY!</a>
            </li>
        </ul>
    </nav>
}