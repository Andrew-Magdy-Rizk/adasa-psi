import { Link } from "react-router-dom"
import style from "./footer.module.css"
export default function Footer({ setActive }) {
    return (
        <footer className="border-top border-dark">
            <div className="container px-4 pt-5">
                <div className="row g-4 py-3">
                    <div className="col-md-6 col-lg-3">
                        <div>
                            <h2 className="mb-3"><span className={`d-inline-block fw-bold fs-5 px-3 py-2 rounded-4 ms-2 ${style.backgroundLogo}`}>ع</span><span className="d-inline-block fw-bold fs-5">عدسة</span></h2>
                            <p className="text-dark-emphasis my-4 w-75">مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
                            <div className={`d-flex gap-2 ${style.icons}`}>
                                <div className="p-2  rounded-3">
                                    <a href="https://x.com/adasah" target="_blank">
                                        <i className="fa-brands fa-lg fa-x-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-2  rounded-3">
                                    <a href="https://github.com/adasah" target="_blank">
                                        <i className="fa-brands fa-lg fa-github"></i>
                                    </a>
                                </div>
                                <div className="p-2  rounded-3">
                                    <a href="divnkedin.com/company/adasah" target="_blank">
                                        <i className="fa-brands fa-lg fa-linkedin"></i>
                                    </a>
                                </div>
                                <div className="p-2  rounded-3">
                                    <a href="https://www.youtube.com/@adasah" target="_blank">
                                        <i className="fa-brands fa-lg fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div>
                            <h2 className="text-white fs-5"><span className={style.line}></span>استكشف</h2>
                            <ul className="navbar-nav gap-3 my-4 p-0">
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("home")} className="text-dark-emphasis" to="/">الرئيسية</Link>
                                </li>
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("blog")} className="text-dark-emphasis" to="/blog">المدونة</Link>
                                </li>
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("about")} className="text-dark-emphasis" to="/about">من نحن</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div>
                            <h2 className="text-white fs-5"><span className={style.line}></span>التصنيفات</h2>
                            <ul className="navbar-nav gap-3 my-4 p-0">
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("blog")} className="text-dark-emphasis" to="/">إضاءة</Link>
                                </li>
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("blog")} className="text-dark-emphasis" to="/blog">بورتريه</Link>
                                </li>
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("blog")} className="text-dark-emphasis" to="/about">مناظر طبيعية</Link>
                                </li>
                                <li className={style.links}>
                                    <span>&gt;</span>
                                    <Link onClick={() => setActive("blog")} className="text-dark-emphasis" to="/about">تقنيات</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div>
                            <h2 className="text-white fs-5"><span className={style.line}></span>ابقى على اطلاع</h2>
                            <p className="text-dark-emphasis my-3">
                                اشترك للحصول على أحدث المقالات والتحديثات.
                            </p>
                            <input required type="email" placeholder="أدخل بريدك الإلكتروني" className={`form-control rounded-4 ${style.input}`} />
                            <button type="button" className={`btn ${style.btnPrimary} fw-bold w-100 mt-3 rounded-pill`}>اشترك</button>
                        </div>
                    </div>
                </div>
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center border-top border-dark p-4">
                <div className="text-dark-emphasis text-center">
                    &copy; 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.
                </div>
                <div className="d-flex gap-3">
                    <a className={`text-dark-emphasis ${style.privacyLink}`} href="#">سياسة الخصوصية</a>
                    <a className={`text-dark-emphasis ${style.privacyLink}`} href="#">شروط الخدمة</a>
                </div>
            </div>
            </div>
        </footer>
    )
}
