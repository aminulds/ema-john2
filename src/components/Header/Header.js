import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
    return (
        <div>
            <header className="logo text-center">
                <img  src={logo} alt="" />
            </header>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <a class="nav-link active text-white" aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/review">Order Review</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/manage">Inventory Management</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2 input-search" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;