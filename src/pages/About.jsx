
import NavBar from "../components/NavBar/NavBar"
import bg from './../assets/img/About.png'
import small from './../assets/img/AboutMobile.png'
import './About.css'

const About = () => {
  return (
    <div className="about">
    <NavBar />
    <img src={bg} alt="" className="big" />
    <img src={small} alt="" className="small" />
    </div>
  )
}

export default About