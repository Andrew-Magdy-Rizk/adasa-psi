import Content from "./Content";
import Hero from "./Hero";
import data from "../../assets/posts.json";
import { useParams } from "react-router-dom";
import RelatedPosts from "./RelatedPosts";

export default function PostDetails() {

    const { slug } = useParams();

    const post = data.posts.find((post) => post.slug === slug);
    window.scrollTo(0, 0);



    return (
        <>
            <Hero post={post} />
            <Content post={post} />
            <RelatedPosts category={post.category}/>
        </>
    )
}
