import './Contact.css'
import bg from './../assets/img/Contact.png'
import small from './../assets/img/ContactMobile.png'
import NavBar from '../components/NavBar/NavBar'
const Contact = () => {
    return (
        <div className='contact'>
            <NavBar />
            <img src={bg} alt="" className="big" />
            <img src={small} alt="" className="small" />
        </div>
    )
}

export default Contact