import {NavLink, withRouter} from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import './Header.css';
function Header() {
    const goToLogin = () => {
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src= {logo} style={{height: '40px'}} alt="not logo found"/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/introduction">Docs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/components">Componentes</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-primary" type="button" onClick= {goToLogin}>Login</button>
            </form>
          </div>
        </div>
      </nav>
    );
}
export default withRouter(Header);