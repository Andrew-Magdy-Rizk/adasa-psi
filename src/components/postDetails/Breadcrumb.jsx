import { Link } from 'react-router-dom'
import style from "./postDetails.module.css"

export default function Breadcrumb({category}) {
  return (
    <>
    <nav className={`position-relative bg-black bg-opacity-50 px-3 py-2 rounded-pill mt-4 ms-4 ${style.nav}`} style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                        <Link to={"/"}>
                            <i className='fa-solid fa-home'></i>
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={"/blog"}>
                            المدونة
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={"#"} className='text-primary'>
                            {category}
                        </Link>
                    </li>
                </ol>
            </nav>
    </>
  )
}
