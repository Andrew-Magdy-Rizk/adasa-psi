import { Link } from "react-router-dom"
import style from "../home/home.module.css"
import blogStyle from "./blog.module.css"

export default function BlogCard({ post, typeView }) {
    
    return (
        <Link to={`/blog/${post.slug}`}>
            <div className={`position-absolute text-white fw-bold rounded-pill bg-black ${blogStyle.tag}`}>{post.category}</div>
            <div className={`${blogStyle.BlogCard} h-100 w-100 d-flex ${typeView === "list" ? "flex-row" : 'flex-column'} bg-dark bg-opacity-75 overflow-hidden rounded-4`}>
                <div className="rounded-4 p-0">
                    <div className="overflow-hidden h-100"><img className={`object-fit-cover w-100 h-100`} src={post.image} alt={post.title} /></div>
                </div>
                <div className="bg-dark bg-opacity-75 p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex gap-2 justify-content-start align-items-center">
                        {/* <span className={`rounded-pill d-inline-block ${style.typeBlog}`}>إضاءة</span> */}
                        <span className="d-inline-block text-dark-emphasis fa-sm"><i className="fa-regular fa-clock text-dark-emphasis"></i> {post.readTime}</span>
                        <i className="fa-solid fa-circle fa-2xs text-dark-emphasis"></i>
                        <span className="d-inline-block text-dark-emphasis fa-sm">{post.date}</span>
                    </div>
                    <h3 className="fs-4 mt-3 fw-bolder">{post.title}</h3>
                    <p className="text-dark-emphasis">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto border-top border-secondary pt-3">
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <div className={`${style.avaImg} position-relative`}>
                                <img className="object-fit-cover rounded-circle" src={post.author.avatar} alt={post.author.name} />
                                {/* <div className={`rounded-circle position-absolute ${style.tagImg}`}></div> */}
                            </div>
                            <div>
                                <h4 className="fw-bold fs-6">{post.author.name}</h4>
                                <p className="text-dark-emphasis fa-sm">{post.author.role}</p>
                            </div>
                        </div>
                        <div className={`fw-bold rounded-circle align-middle ${blogStyle.navBlog}`}>&gt;</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
