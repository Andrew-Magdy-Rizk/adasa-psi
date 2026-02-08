
import style from "./home.module.css"
import { Link } from "react-router-dom"
export default function SpecialBlogCard({post}) {
    
    return (
        <Link to={`/blog/${post.slug}`}>
            <div className={`position-absolute text-white fw-bold rounded-pill ${style.favTag}`}><i className="fa-solid fa-star text-white"></i>مميز</div>
            <div className={`${style.BlogCard} row flex-column flex-lg-row overflow-hidden rounded-4`}>
                <div className="col-lg-6 rounded-4 p-0">
                    <div className="overflow-hidden h-100"><img className={`object-fit-cover w-100 h-100`} src={post.image} alt={post.name} /></div>
                </div>
                <div className="col-lg-6 bg-dark bg-opacity-75 p-5 p-lg-4 d-flex flex-column">
                    <div className="d-flex gap-2 justify-content-start align-items-center">
                        <span className={`rounded-pill d-inline-block ${style.typeBlog}`}>{post.category}</span>
                        <span className="d-inline-block text-dark-emphasis fa-sm"><i className="fa-regular fa-clock text-dark-emphasis"></i> {post.readTime}</span>
                    </div>
                    <h3 className="fs-4 mt-3 fw-bolder">{post.name}</h3>
                    <p className="text-dark-emphasis">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <div className={`${style.avaImg} position-relative`}>
                                <img className="object-fit-cover rounded-circle" src={post.author.avatar} alt={post.author.name} />
                                <div className={`rounded-circle position-absolute ${style.tagImg}`}></div>
                            </div>
                            <div>
                                <h4 className="fw-bold fs-6">{post.author.name}</h4>
                                <p className="text-dark-emphasis fa-sm">{post.author.role}</p>
                            </div>
                        </div>
                        <div className={`fw-bold ${style.showMore}`}><span>اقرأ المقال</span> <i className="fa-solid fa-arrow-left-long"></i></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
