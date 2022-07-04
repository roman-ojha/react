import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

/*
  -> to install botstrap we have to go to offical page of npm
    ->https://www.npmjs.com/
  -> and we have to search for 'bootstrap' 
  -> and you have to install using terminal int the environment directory
    -> npm install bootstrap
  -> if you will see:
    -> "bootstrap": "^5.0.1",
    -> inside the package.json then you bootstrap is successfully downloaded
  -> now we have to import 'bootstrap' component, there are a lot of component in website you can see like
    -> ex: bootstrap.min.css
  -> you can go to node_modules folder and search for path
    -> node_modules/bootstrap/dist/css/
*/
const App = () => {
  return (
    <>
      <button className="btn btn-primary">Hollo world</button>
      {/* ---------------------------------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>

      <label htmlFor="basic-url" className="form-label">
        Your vanity URL
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          https://example.com/users/
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>

      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
    </>
  );
};

export default App;
