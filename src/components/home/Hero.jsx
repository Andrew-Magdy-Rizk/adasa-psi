import style from "./home.module.css"

export default function Hero() {
    return (
        <section className={`position-relative overflow-hidden py-5`}>
            <div className={style.hero}></div>
            <div className={style.gradentPrimary}></div>
            <div className={style.gradentSecondary}></div>
            <div className="position-relative container mx-auto">
                <div className="d-flex justify-content-center align-items-center my-4">
                    <div className={`${style.welcomeMsg} rounded-pill`}>
                        <span className={style.animate1}></span><span className={style.animate2}></span>مرحباً بك في عدسة
                    </div>
                </div>
                <h1 className={`${style.headTitle} text-center`}>اكتشف <span className={`${style.colorSecondary}`}>فن</span> <br /> التصوير الفوتوغرافي</h1>
                <p className="text-center fs-4 text-dark-emphasis my-4">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />التصوير.</p>
                <div className="d-flex flex-column flex-md-row gap-3 btn-outline-secondary justify-content-center text-center">
                    <button className={`btn ${style.btnBlogColor} fw-bold text-white rounded-pill py-3 px-4`}>استكشتف المقالات<i className="fa-solid fa-arrow-left"></i></button>
                    <button className={`btn ${style.btnInfoColor} btn-outline-secondary fw-bold text-white rounded-pill py-3 px-4 me-2`}> <i className="fa-solid fa-circle-info me-2"></i> اعرف المزيد </button>
                </div>
                <div className="row g-3 my-5 w-75 mx-auto">
                    <div className="col-md-6 col-lg-3">
                        <div className={`d-flex gap-1 flex-column justify-content-center align-items-center p-2 rounded-4 ${style.card}`}>
                            <i className={`${style.iconPrimaryColor} fa-solid fa-newspaper`}></i>
                            <h3 className={`${style.secondaryColor}`}>50+</h3>
                            <p className="fa-xs text-dark-emphasis">مقالة</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`d-flex gap-1 flex-column justify-content-center align-items-center p-2 rounded-4 ${style.card}`}>
                            <i className={`${style.iconPrimaryColor} fa-solid fa-users`}></i>
                            <h3 className={`${style.secondaryColor}`}>+10ألف</h3>
                            <p className="fa-xs text-dark-emphasis">قارئ</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`d-flex gap-1 flex-column justify-content-center align-items-center p-2 rounded-4 ${style.card}`}>
                            <i className={`${style.iconPrimaryColor} fa-solid fa-folder-open`}></i>
                            <h3 className={`${style.secondaryColor}`}>4</h3>
                            <p className="fa-xs text-dark-emphasis">تصنيفات</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`d-flex gap-1 flex-column justify-content-center align-items-center p-2 rounded-4 ${style.card}`}>
                            <i className={`${style.iconPrimaryColor} fa-solid fa-pen-nib`}></i>
                            <h3 className={`${style.secondaryColor}`}>6</h3>
                            <p className="fa-xs text-dark-emphasis">كاتب</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
