import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    function handleBtn() {
        setIsLogin(!isLogin);
    }
const online=useOnlinestatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" 
                    alt="Logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online status:{online ? "😁" : "🥴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                       <Link to="/about">About us</Link> 
                    </li>
                    <li>
                     <Link to="/contact">Contact us</Link>   
                    </li>
                    <li>
                    <Link to="/grocery">Grocery Store</Link> 
                    </li>
                    <li>Cart</li>
                    <button onClick={handleBtn}>
                        {isLogin ? 'Logout' : 'Login'}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;