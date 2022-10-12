import styled from "styled-components";
import Group from "./lady.png";
import './header.css'




const Header = () => {
    return (
        <div className='container1'>
            <div className='container-leftSide'>
                <h1>Your Bike <br/>Electric Update</h1>
                <P>Trafalgar provides progressive and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</P>
                <div className='cover'>
                    <input className='form-input' type="text" placeholder="Search Bike Or Anything" name="search" style={{color: "#C2CFE0"}}/>
                    <button className='proceed' type="submit">Find</button>
                </div>
            </div>
            <div className='container-rightSide'>
                <div className='image'>
                    <img src={Group} alt='lady icon'/>
                </div>
            </div>

        </div>
    )
}

export default Header;



const H1 = styled.h1`
color: #233348;

`

const P = styled.p`
color: #7D7987;
`
