import btn from './../../assets/img/book-btn.svg'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero" >
        <div className="text">
          <h1>Fay for Arabic</h1>
          <p>Get introduced to our exclusive collection of books to learn Arabic and Quraan in the best way possible </p>
        </div>
        <div className="books">
          <div className="book">
            <p className="bookTitle">Al-Bayan 1</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Al-Bayan 2</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Al-Bayan 3</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Al-Bayan 4</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Al-Bayan 5</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Al-Bayan 6</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Simplified instructions 1</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Simplified instructions 2</p>
            <button><img src={btn} alt="" /></button>
          </div>
          <div className="book">
            <p className="bookTitle">Simplified instructions 3</p>
            <button><img src={btn} alt="" /></button>
          </div>
        </div>
    </div>
  )
}

export default Hero