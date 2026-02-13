import { Link } from "react-router-dom";
import style from "./postDetails.module.css"
export default function Content({ post }) {

  const content = post.content.split("\n\n");
  const titles = content.filter((title) => title.includes("##"));

  // console.log(post);


  return (
    <section className="py-5">
      <div className="container-fluid container-lg">
        <div className="row gx-lg-4 gy-4 align-items-start flex-column flex-lg-row flex-lg-row-reverse position-relative">
          <div className={`col-12 col-lg-4 ${style.sidebar}`}>
            <div className="border border-dark rounded-4 p-4 bg-dark bg-opacity-50 mb-4">
              <h2 className="fw-bold fs-5"><span className={`${style.iconList} d-inline-block p-2 rounded-3 me-2`}> <i className="fa-solid fa-list fa-sm text-primary" ></i></span> محتويات المقال</h2>
              <ul className={`${style.list} d-flex gap-3 flex-column py-3`}>
                {titles.map((title, idx) =>
                  <li key={title} className="text-dark-emphasis"><span className="d-inline-block bg-dark bg-opacity-75 rounded-3 me-2 text-dark-emphasis">{idx + 1}</span>{title.split("## ")}</li>
                )}
              </ul>
            </div>
            <div className="border border-dark rounded-4 p-4 bg-dark bg-opacity-50 mb-4">
              <div className="d-flex gap-3">
                <div className="rounded-4 bg-black w-100 p-3 text-center">
                  <i className="fa-regular fa-clock fa-lg text-primary mb-4"></i>
                  <h3 className="fs-6 mb-2">{post.readTime}</h3>
                  <p className="text-dark-emphasis fa-xs">وقت القراءة</p>
                </div>
                <div className="rounded-4 bg-black w-100 p-3 text-center">
                  <i className="fa-regular fa-calendar fa-lg text-primary mb-4"></i>
                  <h3 className="fs-6 mb-2">{post.date}</h3>
                  <p className="text-dark-emphasis fa-xs">تاريخ النشر</p>
                </div>
              </div>
            </div>
            <div className="border border-dark rounded-4 p-4 bg-dark bg-opacity-50 mb-4">
              <div className="d-flex flex-column text-center gap-3">
                <div className={`${style.mailIcon} mx-auto p-3 rounded-4`}>
                  <i className="fa-solid fa-envelope text-primary fa-xl"></i>
                </div>
                <h4 className="fs-5">لا تفوّت جديدنا</h4>
                <p className="text-dark-emphasis fa-sm">اشترك للحصول على أحدث المقالات</p>
                <Link to="/blog">
                <button className="btn p-3 fw-bold rounded-4 text-white fw-bold bg-primary">تصفح المذيد</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            {content.map((con) => con.includes("##") ?
              <div key={con} className="mt-5 mb-3">
                <span className={`d-inline-block py-2 px-1 rounded-3 ${style.iconHeadTitle} me-3`}><i className="fa-solid fa-camera text-primary fa-2xl"></i></span>
                <h2 className="d-inline-block align-middle">{con.split("## ")}</h2>
              </div>
              :
              <p key={con} className="text-dark-emphasis">{con}</p>
            )}
            <div className="mt-5 mb-4 p-4 bg-dark bg-opacity-50 rounded-4">
              <h3 className="fw-bold fs-6"><span className={`${style.iconList} d-inline-block p-2 rounded-3 me-2`}> <i className="fa-solid fa-tags fa-sm text-primary" ></i></span> الوسوم</h3>
              <ul className={`${style.list} p-0 m-0 d-flex gap-2`}>
                {post.tags.map((tag) => 
                <li key={tag} className="px-3 py-2 mt-2 rounded-pill bg-dark bg-opacity-75 text-dark-emphasis">#{tag}</li>
                )}
              </ul>
            </div>
            <div className="mt-4 p-4 bg-dark bg-opacity-50 rounded-4 d-flex justify-content-between align-items-center">
              <h3 className="fw-bold fs-6 m-0"><span className={`${style.iconList} d-inline-block p-2 rounded-3 me-2`}> <i className="fa-solid fa-share-nodes fa-sm text-primary" ></i></span> شارك المقال</h3>
              <ul className={`${style.list} p-0 m-0 d-flex gap-2`}>
                <li className={`${style.mediaLink} p-3 rounded-3 bg-dark bg-opacity-75 text-dark-emphasis`}><i className="fa-brands fa-x-twitter text-dark-emphasis align-middle"></i></li>
                <li className={`${style.mediaLink} p-3 rounded-3 bg-dark bg-opacity-75 text-dark-emphasis`}><i className="fa-brands fa-linkedin-in text-dark-emphasis align-middle"></i></li>
                <li className={`${style.mediaLink} p-3 rounded-3 bg-dark bg-opacity-75 text-dark-emphasis`}><i className="fa-brands fa-whatsapp text-dark-emphasis align-middle"></i></li>
                <li className={`${style.mediaLink} p-3 rounded-3 bg-dark bg-opacity-75 text-dark-emphasis`}><i className="fa-solid fa-link text-dark-emphasis align-middle"></i></li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-dark bg-opacity-50 rounded-4 d-flex gap-3 align-items-center">
              <div className="col-2 rounded-3 overflow-hidden p-1 bg-primary">
                <img className="w-100 object-fit-cover rounded-3" src={post.author.avatar} alt={post.title} />
              </div>
              <div className="flex-1">
                <span className="text-primary fa-xs">كاتب المقال</span>
                <h3 className="fs-5">{post.author.name}</h3>
                <p className="text-dark-emphasis fa-xs">{post.author.role}</p>
                <p className="text-dark-emphasis fa-sm mt-4">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
