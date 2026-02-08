
import style from "./postDetails.module.css"
import Breadcrumb from './Breadcrumb';

export default function Hero({post}) {
    

    return (
        <section className="py-3 px-3 position-relative overflow-hidden">

            <div className='position-absolute start-0 top-0 w-100'>
                <div className={`position-absolute bg-black bg-opacity-50 w-100 h-100 start-0 top-0 ${style.layoutgradent}`}></div>

                <img className='w-100 object-fit-cover' src={post.image} alt={post.slug} />
            </div>
            
            <Breadcrumb category={post.category} />

            <div className="container-fluid container-lg position-relative d-flex flex-column justify-content-center align-items-start py-5">
                <div className='d-flex justify-content-start align-items-center gap-3'>
                    <button className='border-0 text-white py-3 px-4 fw-bold fa-sm rounded-pill bg-primary'>{post.category}</button>
                    <div> <i className='fa-regular fa-calendar fa-sm me-1'></i>{post.date}</div>
                    <div> <i className='fa-regular fa-clock fa-sm me-2'></i> {post.readTime}</div>
                </div>

                <h1 className={`py-4 ${style.headTitle}`}>{post.title}</h1>

                <div className={`${style.authorCard} d-flex justify-content-between align-items-center p-3 rounded-4`}>
                    <img className='rounded-circle object-fit-cover w-25 border p-1 bg-primary' src={post.author.avatar} alt={post.author.name} />
                    <div>
                        <h2 className='fs-5 fw-bold'>{post.author.name}</h2>
                        <p className='m-0 fa-xs text-dark-emphasis'>{post.author.role}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
