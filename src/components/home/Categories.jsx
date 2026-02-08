import { Link } from "react-router-dom"
import style from "./home.module.css"
export default function Categories() {
    return (
        <section className="bg-dark bg-opacity-50">
            <div className='container-fluid container-lg py-5 mx-auto'>
                <div className="d-flex align-items-center justify-content-center my-4">
                    <div className={`${style.welcomeMsg} rounded-pill`}>
                        <span className={style.animate1}></span><span className={style.animate2}></span>التصنيفات
                    </div>
                </div>
                <h2 className={`${style.headTitle2} text-center`}>استكشف حسب الموضوع</h2>
                <p className="fs-6 text-dark-emphasis text-center">اعثر على محتوى مصمم حسب اهتماماتك</p>
                <div className="row g-3 py-4">
                    <div className="col-6 col-lg-3">
                        <Link to="blog?category=اضاءة">
                        <div className={`${style.categoryCard} h-100 d-flex justify-content-between align-items-center bg-dark bg-opacity-50 rounded-4 p-4`}>
                            <div>
                                <span className={`${style.catIcon} p-2 rounded-3 border d-inline-block mb-3`}><i className="fa-solid fa-gear fa-lg"></i></span>
                                <h3 className="fs-4">اضاءة</h3>
                                <p className="fa-xs text-dark-emphasis mt-2">3 مقالة</p>
                            </div>
                            <div>
                                <span className="px-3 py-2 fw-bold text-dark rounded-circle">&gt;</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Link to="blog?category=بورتريه">

                            <div className={`${style.categoryCard} d-flex h-100 justify-content-between align-items-center bg-dark bg-opacity-50 rounded-4 p-4`}>
                                <div>
                                    <span className={`${style.catIcon} p-2 rounded-3 border d-inline-block mb-3`}><i className="fa-solid fa-user fa-lg"></i></span>
                                    <h3 className="fs-4">بورتريه</h3>
                                    <p className="fa-xs text-dark-emphasis mt-2">3 مقالة</p>
                                </div>
                                <div>
                                    <span className="px-3 py-2 fw-bold text-dark rounded-circle">&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Link to="blog?category=مناظر طبيعية">
                            <div className={`${style.categoryCard} d-flex h-100 justify-content-between align-items-center bg-dark bg-opacity-50 rounded-4 p-4`}>
                                <div>
                                    <span className={`${style.catIcon} p-2 rounded-3 border d-inline-block mb-3`}><i className="fa-solid fa-mountain-sun fa-lg"></i></span>
                                    <h3 className="fs-4">مناظر طبيعية</h3>
                                    <p className="fa-xs text-dark-emphasis mt-2">2 مقالة</p>
                                </div>
                                <div>
                                    <span className="px-3 py-2 fw-bold text-dark rounded-circle">&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Link to="blog?category=تقنيات">
                            <div className={`${style.categoryCard} d-flex h-100 justify-content-between align-items-center bg-dark bg-opacity-50 rounded-4 p-4`}>
                                <div>
                                    <span className={`${style.catIcon} p-2 rounded-3 border d-inline-block mb-3`}><i className="fa-solid fa-sliders fa-lg"></i></span>
                                    <h3 className="fs-4">تقنيات</h3>
                                    <p className="fa-xs text-dark-emphasis mt-2">5 مقالة</p>
                                </div>
                                <div>
                                    <span className="px-3 py-2 fw-bold text-dark rounded-circle">&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-3">
                        <Link to="blog?category=معدات">
                            <div className={`${style.categoryCard} d-flex h-100 justify-content-between align-items-center bg-dark bg-opacity-50 rounded-4 p-4`}>
                                <div>
                                    <span className={`${style.catIcon} p-2 rounded-3 border d-inline-block mb-3`}><i className="fa-solid fa-toolbox fa-lg"></i></span>
                                    <h3 className="fs-4">معدات</h3>
                                    <p className="fa-xs text-dark-emphasis mt-2">3 مقالة</p>
                                </div>
                                <div>
                                    <span className="px-3 py-2 fw-bold text-dark rounded-circle">&gt;</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
