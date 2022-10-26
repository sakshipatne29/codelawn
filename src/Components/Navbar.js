
function Navbar() {
    return (
        <>
            <nav className="p-2 navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">CodeLawn</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;