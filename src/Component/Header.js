import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/foodvilla.png';
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
        <img
            src={Logo}
            alt="The image is not found"
            height="70"
            width="70"
        />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <li>cart</li>
                    <Link to = '/instamart'>
                        <li>Instamart</li>
                    </Link>
                </ul>
            </div>
            <h4 className="mt-3">
                {
                    useOnline() ? '🟢' : '🔴'
                }
            </h4>
            {
                isLoggedIn ? (
                    <button className="btn btn-success m-3"
                        onClick={() =>
                            setIsLoggedIn(false)
                        }>
                        Logout
                    </button>
                ) : (
                    <Link to='/signupform'>
                        <button className="btn btn-success m-3"
                            onClick={() =>
                                setIsLoggedIn(true)
                            }>
                            Login
                        </button>
                    </Link>
                )
            }
        </div>
    );
};

export default Header;
