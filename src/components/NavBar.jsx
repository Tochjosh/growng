import logo from '../B.png';
import styled from 'styled-components';
import './navbar.css'

const NavBar = () => {
    return (
    <div className='wrapper'>
        <div className='leftSide'>
            <div className='leftsideInner'><img src={logo} className="logo" alt='logo'/></div>
            <h1>eBike</h1>
        </div>
        <div className='rightSide'>
            <ul>
                <li className='list'><a href="#">Product</a></li>
                <li className='list'><a href="#">Bike Type</a></li>
                <li className='list'><a href="#">About Us</a></li>
                <li className='list'><a href="#">Testimonials</a></li>
                <li className='list'><a href="#">Contact</a></li>
                <span style={{fontSize: '2rem'}} className="material-symbols-outlined burger">menu</span>
            </ul>

        </div>

    </div>
 )}


export default NavBar;


