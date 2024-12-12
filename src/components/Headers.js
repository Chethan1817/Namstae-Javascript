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
        <div className="flex justify-between shadow-lg bg-pink-50">
            <div className="w-56">
                <img 
                    className="logo" 
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" 
                    alt="Logo"
                />
            </div>
            <div className="felx items-center ">
                <ul className="flex  p-4 m-4">
                    <li className="px-4">
                        online status:{online ? "😁" : "🥴"}
                    </li>
                    <li className="px-4" >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4"> 
                       <Link to="/about">About us</Link> 
                    </li>
                    <li className="px-4" >
                     <Link to="/contact">Contact us</Link>   
                    </li>
                    <li className="px-4" >
                    <Link to="/grocery">Grocery Store</Link> 
                    </li>
                    <li className="px-4">Cart</li>
                    <button onClick={handleBtn}>
                        {isLogin ? 'Logout' : 'Login'}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;