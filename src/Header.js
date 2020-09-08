import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
    <nav className="header">      
    {/*logo on the left -> img */}
    <Link to="/">
    <img 
        className="header-logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
    />
    </Link>

    {/* Search box */}
    <div className="header-search">
       
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon"/> 

    </div>

    {/* 3 Links */}
    <div className="header-nav">
        {/* SignIn */}
        <Link to={!user && "/login"} className="header-link header-image">     {/*href will refresh the page this will not that is the main advantage of "LINK"*/}
           <div onClick={login} className="header-option">        
                <span className="header-optionLineOne">Hello,{user?.email} </span>
                <span className="header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>  
        </Link>

        {/*Returns and Orders*/}
        <Link  className="header-link">     
           <div className="header-option">        
                <span className="header-optionLineOne">Returns</span>
                <span className="header-optionLineTwo">&amp; Orders</span>
            </div>  
        </Link>

        {/*Your Prime*/}
        <Link  className="header-link">     
           <div className="header-option">        
                <span className="header-optionLineOne">Try</span>
                <span className="header-optionLineTwo">Prime </span>
            </div>  
        </Link>

        {/*Basket or Cart option*/}
        <Link to="/checkout" className="header-link">
            <div className="header-optionBasket">
                {/*Shopping Basket icon*/}
                < ShoppingCartOutlinedIcon />
                {/*Number of items in the basket*/}
<               span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
            </div>
        </Link>
    </div>

    </nav>
    );    
}

export default Header;
