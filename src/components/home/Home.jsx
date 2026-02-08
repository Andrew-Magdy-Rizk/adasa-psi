import Categories from './Categories'
import Contact from './Contact'
import Hero from './Hero'
import News from './News'
import SpecialBlogs from './SpecialBlogs'
export default function Home() {

  window.scrollTo(0, 0);
  
  return (
    <>
      <Hero />
      <SpecialBlogs />
      <Categories />
      <News />
      <Contact />
    </>
  )
}
