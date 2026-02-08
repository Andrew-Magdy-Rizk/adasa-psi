import style from "./blog.module.css"

export default function HeroBlog() {
    return (
        <>
            <section className={`position-relative overflow-hidden py-5`}>
                <div className={style.hero}></div>
                <div className={style.gradentPrimary}></div>
                <div className={style.gradentSecondary}></div>
                <div className="position-relative container mx-auto">
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <div className={`${style.welcomeMsg} rounded-pill text-primary`}>
                            <span className={style.animate1}></span><i className="fa-regular fa-newspaper text-primary ms-1"></i>مدونتنا
                        </div>
                    </div>
                    <h1 className={`${style.headTitle} text-center`}>اكتشف <span className={`${style.colorSecondary}`}>مقالاتنا</span></h1>
                    <p className="text-center fs-5 text-dark-emphasis my-4">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
                </div>
            </section>
        </>
    )
}
