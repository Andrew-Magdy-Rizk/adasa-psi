import { Link } from "react-router-dom"
import style from "./home.module.css"
import SpecialBlogCard from "./SpecialBlogCard"
import data from "../../assets/posts.json"
export default function SpecialBlogs() {
    return (
        <section className={`${style.bgSectionGradent} py-5`}>
            <div className="container-fluid container-lg mx-auto px-4">
                <div className="d-flex align-items-center my-4">
                    <div className={`${style.welcomeMsg} rounded-pill`}>
                        <span className={style.animate1}></span><span className={style.animate2}></span>مميز
                    </div>
                </div>
                <h2 className={`${style.head2} fs-1 fw-bold`}>مقالات مختارة</h2>
                <div className="d-flex justify-content-between align-items-center my-4">
                    <p className="text-dark-emphasis">محتوى منتقى لبدء رحلة تعلمك</p>
                    <Link className={`btn ${style.btnBlogs} rounded-3`} to="/blog">عرض الكل <i className="fa-solid fa-arrow-left-long"></i></Link>
                </div>

                <div className="row gy-4">

                    {data.posts.slice(0, 3).map((post) => <div key={post.id} className="col-12 position-relative">
                        <SpecialBlogCard post={post} />
                    </div>)}

                </div>
            </div>
        </section>
    )
}
