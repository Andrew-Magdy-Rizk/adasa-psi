import { Link } from "react-router-dom"
import style from "./home.module.css"
import BlogCard from "../blog/BlogCard"
import data from "../../assets/posts.json"
export default function News() {
    return (
        <section>
            <div className="container-fluid container-lg py-5 px-4">
                <div className="d-flex align-items-center justify-content-start my-4">
                    <div className={`${style.welcomeMsg} rounded-pill`}>
                        <span className={style.animate1}></span><span className={style.animate2}></span>الأحدث
                    </div>
                </div>
                    <h2 className={`${style.headTitle2}`}>أحدث المقالات</h2>
                    <div className="d-flex justify-content-between align-items-center my-4">
                        <p className="text-dark-emphasis">محتوى جديد طازج من المطبعة</p>
                        <Link className={`btn ${style.btnBlogs} rounded-3`} to="/blog">عرض جميع المقالات <i className="fa-solid fa-arrow-left-long"></i></Link>
                    </div>

                    <div className="row g-4">
                        {data.posts.slice(3, 6).map((post) => <div key={post.id} className="col-md-6 col-lg-4 position-relative">
                        <BlogCard post={post} />
                    </div>)}
                    </div>
            </div>
        </section>
    )
}
