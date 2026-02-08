import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import { useState } from 'react'
import Style from "./navbar.module.css"
export default function Navbar({active, setActive}) {

    const [background, setBackground] = useState(Style.backgroundHeaderTop);
    const location = useLocation();

    window.onscroll = () => {
        if (scrollY > 50) {
            setBackground(Style.backgroundHeaderScroll)
        } else {
            setBackground(Style.backgroundHeaderTop)
        }
    }
    
    return (
        <header className="fixed-top">
            <nav className={`navbar navbar-expand-lg ${background}`} >
                <div className="container">
                    <Link onClick={() => setActive("home")} className={`navbar-brand d-flex gap-3 justify-content-center align-items-center ${Style.scale}`} to="/">
                        <img loading='eager' className={`${Style.image} w-100 object-fit-contain`} src={logo} alt="Logo" />
                        <div>
                            <span>عدسة</span>
                            <p className={`fw-light m-0 d-none d-sm-block ${Style.colorPrimary} ${Style.textSmall}`}>عالم التصوير الفوتوغرافي</p>
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`d-lg-none navbar-nav gap-3 mt-3 justify-content-center p-3 mx-auto mb-2 mb-lg-0 rounded-4 border border-dark`}>
                            <li  className={`nav-item rounded-4 py-1 px-3 bg-opacity-10 ${active == "home" && !location.pathname.includes("blog") ? Style.linkActiveMobile : ""}`}>
                                <Link onClick={() => setActive("home")} className="nav-link text-secondary active" aria-current="page" to="/">الرئيسية</Link>
                            </li>
                            <li  className={`nav-item rounded-4 py-1 px-3 ${active.includes("blog") || location.pathname.includes("blog") ? Style.linkActiveMobile : ""}`}>
                                <Link onClick={() => setActive("blog")} className="nav-link text-secondary" aria-current="page" to="/blog">المدونة</Link>
                            </li>
                            <li  className={`nav-item rounded-4 py-1 px-3 ${active == "about" ? Style.linkActiveMobile : ""}`}>
                                <Link onClick={() => setActive("about")} className="nav-link text-secondary" aria-current="page" to="/about">من نحن</Link>
                            </li>
                            <div className='d-flex d-lg-none w-100 text-center justify-content-center align-items-center gap-3'>
                                <Link onClick={() => setActive("blog")} className={`rounded-pill fw-bold w-100 py-3 ${Style.btnBlog}`} to="/blog">ابدأ القراءة</Link>
                            </div>
                        </ul>
                        <ul className={`d-none d-lg-flex navbar-nav gap-3 justify-content-center p-2 mx-auto mb-2 mb-lg-0 rounded-pill border border-dark`}>
                            <li  className={`nav-item rounded-pill fa-sm px-3 py-2 ${active == "home" && !location.pathname.includes("blog") ? Style.linkActive : ""}`}>
                                <Link onClick={() => setActive("home")} className="nav-link text-secondary active" aria-current="page" to="/">الرئيسية</Link>
                            </li>
                            <li  className={`nav-item rounded-pill fa-sm px-3 py-2 ${active.includes("blog") || location.pathname.includes("blog") ? Style.linkActive : ""}`}>
                                <Link onClick={() => setActive("blog")} className="nav-link text-secondary" aria-current="page" to="/blog">المدونة</Link>
                            </li>
                            <li  className={`nav-item rounded-pill fa-sm px-3 py-2 ${active == "about" ? Style.linkActive : ""}`}>
                                <Link onClick={() => setActive("about")} className="nav-link text-secondary" aria-current="page" to="/about">من نحن</Link>
                            </li>
                        </ul>
                        <div className='d-none d-lg-flex justify-content-center align-items-center gap-3'>
                            <div className={`rounded-4 ${Style.icon} d-none d-md-block`}>
                                <i className={`fa-solid fa-search text-dark-emphasis`}></i>
                            </div>
                            <Link onClick={() => setActive("blog")} className={`rounded-pill fw-bold w-100 ${Style.btnBlog}`} to="/blog">ابدأ القراءة</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </header>

    )
}
