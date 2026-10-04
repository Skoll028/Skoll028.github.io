export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        {/* Your navbar HTML content will go here */}
        <div className="container">
            <a className="navbar-brand fw-bold" href="#">
                <i className="bi bi-code-slash text-primary me-2"></i>
                Alexander Tatum</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Tech Stack</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://github.com/Skoll028" target="_blank"><i className="bi bi-github"></i> GitHub</a></li>
                    <li className="nav-item ms-lg-3">
                        <label className="visually-hidden" htmlFor="theme-toggle">Color theme</label>
                        <select className="form-select" id="theme-toggle" aria-label="Color theme">
                            <option value="auto">System</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}