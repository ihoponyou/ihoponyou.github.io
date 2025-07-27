
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="d-flex justify-content-center w-100">
                    <div>
                    <a className="navbar-brand" href="https://ihoponyou.github.io/">
                        <img src={`${process.env.PUBLIC_URL}/logo.gif`} alt="" />
                    </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
