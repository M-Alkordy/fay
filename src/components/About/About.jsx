import './About.css'
import logo from './../../assets/img/full-logo.png'
const About = () => {
    return (
        <div className='about'>
            <h1>About Us</h1>
            <div className="container">
                <div className="left">
                    <p>This website is dedicated for an author  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    <h2>Goals</h2>
                    <p>This book aims to help readers master the pronunciation of the Arabic alphabet in order to reach an advanced level in Arabic reading with proper pronunciation in preparation for reading Al-Quran.</p>
                    <button>Read more</button>
                </div>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default About