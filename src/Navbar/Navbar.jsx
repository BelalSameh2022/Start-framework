import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    useEffect(() => {
        window.addEventListener("scroll", function () {
            let nav = document.querySelector("nav");
            nav.classList.toggle("sticky", window.scrollY > 0)
        })
    }, [])


    return <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to='' className="navbar-brand fw-bolder fs-2 text-white">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item fw-bold me-2">
                            <NavLink to='about' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item fw-bold me-2">
                            <NavLink to='portfolio' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item fw-bold me-2">
                            <NavLink to='contact' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    </>
}
