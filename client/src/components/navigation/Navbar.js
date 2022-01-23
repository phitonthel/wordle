import React, { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import NavItem from './NavItem';

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const currentRoute = useLocation()

  const routesList = [
    {
      link: '/shift',
      className: 'nav-link',
      name: 'Shift'
    },
    {
      link: '/wordle',
      className: 'nav-link',
      name: 'Wordle'
    },
    {
      link: '/about',
      className: 'nav-link',
      name: 'About'
    },
  ]

  routesList.forEach(route => {
    if (route.link == currentRoute.pathname) {
      route.className = 'nav-link active'
    }
  });

  const handleSearch = (e)=> {
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Search bar is in progress',
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <Link className="navbar-brand" to="/home">phitonthel Sandbox</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          {routesList.map((route, idx) => <NavItem key={idx} route={route} />)}

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Others
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/home">...</Link>
              <Link className="dropdown-item" to="/home">...</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/home">...</Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-primary my-2 my-sm-0" onClick={handleSearch}>Search</button>
        </form>
      </div>
    </nav>
  )
}