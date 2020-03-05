import React from "react";

const Header = () => (
    <nav className="mb-5 navbar navbar-expand-lg navbar-light bg-dark row">
        <a href="/" className="navbar-brand">
            <img src="imgs/react.png" alt="Logo" className="img-fluid"/>
        </a>
        <button className="navbar-toggler" data-toggle="collapse" data-target="main_menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main_menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link text-light" href="/">Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-light" href="javascript:;">Produtos</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-light" href="javascript:;">GitHub</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-light" href="javascript:;">Contato</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;