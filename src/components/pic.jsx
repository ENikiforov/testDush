import logo from "../img/Logo.svg";
import './pic.css'

const Logo =()=>{
    return(
        <div className='logoContainer'>
            <div className='logo'>
                <img src={logo} alt='img'/>
            </div>
        </div>
    )
}
export default Logo