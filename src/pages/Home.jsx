import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/NavBar/NavBar"
import bg from './../assets/img/LandingPageBig.png'
import small from './../assets/img/LandingPageMobile.png'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
    <NavBar />
    <Hero />
    <About />
    <img src={bg} alt="" className="big" />
    <img src={small} alt="" className="small" />
    </div>
  )
}

export default Home