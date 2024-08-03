
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="https://ihoponyou.github.io/">
                        <img src={`${process.env.PUBLIC_URL}/logo.gif`} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://ihoponyou.github.io/#about">about me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://ihoponyou.github.io/#websites">cool websites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://ihoponyou.github.io/#stories">cool stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://ihoponyou.github.io/#hobbies">hobbies</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">portfolio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
