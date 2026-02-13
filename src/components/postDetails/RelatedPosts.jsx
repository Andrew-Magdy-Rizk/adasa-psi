import { Link } from "react-router-dom";
import data from "../../assets/posts.json";
import BlogCard from "../blog/BlogCard";
import style from "./postDetails.module.css";

export default function RelatedPosts({ category }) {

  const relatedPosts = data.posts.filter((post) => post.category === category);

  // console.log(relatedPosts);


  return (
    <section>
      <div className="container-fluid container-lg py-5 px-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
        <h2 className="fw-bold fs-3 mb-3">مقالات قد تعجبك</h2>
        <p className="text-dark-emphasis fa-xs">استكشف المزيد من المحتوى المميز</p>
        </div>
          <Link className={`btn ${style.showMore} rounded-3`} to="/blog">عرض جميع المقالات <i className="fa-solid fa-arrow-left-long"></i></Link>
        </div>

        <div className="row g-4">
          {relatedPosts.slice(0, 3).map((post) => <div key={post.id} className="col-md-6 col-lg-4 position-relative">
            <BlogCard post={post} />
          </div>)}
        </div>
      </div>
    </section>
  )
}
