import style from "./blog.module.css"
import BlogCard from "./BlogCard"
import data from "../../assets/posts.json"
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
export default function BlogList() {

    const categories = data.categories;
    const [currentcategory, setCurrentcategory] = useState("all");
    const [posts, setPosts] = useState(data.posts);
    const [typeView, setTypeview] = useState("gallary");
    const { search } = useLocation();
    const param = useParams();

    const handelChange = (e) => {

        const searchTerm = e.target.value;
        if (searchTerm !== "") {
            const afterfilter = data.posts.filter((post) => post.title.includes(searchTerm) || post.excerpt.includes(searchTerm));
            return setPosts(afterfilter);

        } else if (searchTerm === "" && currentcategory !== "all") {
            const afterfilter = data.posts.filter((post) => post.category == currentcategory);
            return setPosts(afterfilter);
        }

        setPosts(data.posts);

    }

    useEffect(() => {
        console.log(param);
        
        if (search) {
            setCurrentcategory(search)
        }
    }, []);

    useEffect(() => {

        if (currentcategory == "all") {
            return setPosts(data.posts);
        }
        const filterPosts = data.posts.filter((post) => post.category == currentcategory);
        setPosts(filterPosts);
    }, [currentcategory]);

    return (
        <section className="bg-black position-relative">

            <nav className={`position-sticky border-bottom border-dark p-3 bg-black ${style.navtop}`}>
                <div className="container-fluid container-lg d-flex gap-3 flex-column flex-md-row justify-content-between align-items-center">
                    <div className="position-relative">
                        <input onChange={handelChange} className={`${style.searchInput} form-control-lg flex-grow-1 d-inline-block flex-grow-1 bg-dark px-5 text-white bg-opacity-50 shadow-none`} type="search" name="search" placeholder="ابحث في المقالات..." />
                        <i className="fa-solid fa-search position-absolute ms-3 top-50 start-0 text-dark-emphasis translate-middle-y"></i>
                    </div>
                    <ul className={`${style.categoriesList} d-flex flex-md-wrap justify-content-center align-items-center gap-1 m-0`}>
                        <li onClick={() => setCurrentcategory("all")} className={`${currentcategory === "all" ? "btn-primary bg-primary border-0" : "text-white bg-dark border border-dark"} btn fs-6`}>جميع المقالات</li>
                        {categories.map((category) => <li onClick={() => setCurrentcategory(category.name)} key={category.name} className={`${currentcategory === category.name ? "btn-primary bg-primary border-0" : "text-white bg-dark border border-dark"} btn fs-6`}>{category.name}</li>)}
                    </ul>
                </div>
            </nav>

            <div className="container-fluid container-lg py-5">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-dark-emphasis">عرض <span className="fw-bold text-white">{posts.length}</span> مقالات {currentcategory !== "all" ? <span className="text-dark-emphasis">في <span className="text-primary fw-bold">{currentcategory}</span> </span> : ""}</p>
                    <div>
                        <div className="d-flex bg-dark bg-opacity-50 border border-dark rounded-3 p-1">
                            <div onClick={() => setTypeview("gallary")} className={`${typeView === "gallary" ? "bg-primary" : ""} p-2 rounded-3`}>
                                <i className={`${typeView !== "gallary" ? "text-dark-emphasis" : ""} fa-solid fa-expand`}></i>
                            </div>
                            <div onClick={() => setTypeview("list")} className={`${typeView === "list" ? "bg-primary" : ""} p-2 rounded-3`}>
                                <i className={`${typeView !== "list" ? "text-dark-emphasis" : ""} fa-solid fa-bars`}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-4 g-4 align-items-stretch h-100">
                    {posts.length > 0 ? posts.map((post) => <div key={post.id} className={`${typeView === "gallary" ? "col-md-6 col-lg-4" : "col-12"}  position-relative`}>
                        <BlogCard typeView={typeView} post={post} />
                    </div>) :
                        <div className="container-fluid container-lg py-5 d-flex flex-column gap-3 justify-content-center align-items-center">
                            <div className={`${style.faceIcon} rounded-circle d-flex justify-content-center align-items-center`}>
                                <i className="fa-regular fa-face-frown text-dark-emphasis"></i>
                            </div>
                            <h2 className="fw-bold fs-4">لا توجد مقالات</h2>
                            <p className="text-dark-emphasis">حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.</p>
                            <button onClick={() => setCurrentcategory("all")} className="btn btn-primary fw-bold bg-primary border-0 py-3 px-4 rounded-pill"><i className="fa-solid fa-repeat ms-2"></i> إعادة تعيين الفلاتر</button>
                        </div>
                    }
                </div>
            </div>




        </section>
    )
}
