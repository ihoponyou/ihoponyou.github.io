
function Footer() {
    return (
        <footer className="footer py-3">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-center mb-2">
                    <div className="flex-item px-3">
                        <i className="bi bi-discord" title="@ihoyou"></i>
                    </div>
                    <div className="flex-item px-3">
                        <a href="https://github.com/ihoponyou">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                    <div className="flex-item px-3">
                        <i className="bi bi-envelope-fill" title="noah.magcalas@gmail.com"></i>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center mb-2">
                    models & animations by me
                </div>
                <div className="d-flex flex-row justify-content-center">
                    © Noah Magcalas 2024. No Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
