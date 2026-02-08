import { useParams, useRoutes } from "react-router-dom"
import HeroBlog from "./HeroBlog"
import BlogList from "./BlogList"

function Blog() {

  window.scrollTo(0, 0);
  
  return (
    <>
    <HeroBlog/>
    <BlogList/>
    </>
  )
}

export default Blog