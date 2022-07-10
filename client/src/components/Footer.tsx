import { Link } from 'react-router-dom';
import Contact from './Contact'
import s from './Styles/Footer.module.css'
import logo from '../media/logo1.png'
import { useSelector } from 'react-redux';




function Footer() {
  const spanish = useSelector((state: any) => state.spanish);
  return (
    <div className = {s.container}>
        <Link to = "/contact" className = {s.contact}>
            {spanish ? "Contactanos!" : "Contact us!"}
        </Link>
        <p>
          {spanish ? "Necesitas alguna " : "Do you need any "} <Link to = "/help" className={s.help}>{spanish ? "Ayuda?" : "Help?"}</Link>  
        </p>        
        <p>Powered by ©My-Pc</p>
        <img src = {logo} width="60px" height="60px"></img>
    </div>
  )
}

export default Footer