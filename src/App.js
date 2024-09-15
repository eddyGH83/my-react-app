import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleRedirect_home = () => { navigate('/home'); };
  const handleRedirect_contact = () => { navigate('/contact'); };
  const handleRedirect_about = () => { navigate('/about'); };

  return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>   
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/features" element={<div>Features Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;