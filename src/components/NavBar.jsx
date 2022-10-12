import logo from '../B.png';
import styled from 'styled-components';

const NavBar = () => {
    return (
    <Wrapper>
        <LeftSide>
            <div><img src={logo} className="logo" alt='logo'/></div>
            <h1>eBike</h1>
        </LeftSide>
        <RightSide>
            <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Bike Type</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </RightSide>
    </Wrapper>
 )}


export default NavBar;

const Wrapper = styled.div`
position: -webkit-sticky;
position: sticky;
top: 0;
height: 10vh;
z-index:1000;
width: 100%;
background-color: #E5E5E5;

`
const LeftSide = styled.div`
width: 20%;
display: flex;
flex: 1;
float: left;
height: 8vh;
padding: 0.5em;

div {
background-color: #FCB72B;
width: 4em;
height: 4em;
border-radius: 50%;
display: flex;
align-items: center;
}

h1 {
position: absolute;
left: 6%;
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 1.5em;
line-height: 30px;
color: #233348;
mix-blend-mode: normal;
}

div > img{
position: relative;
left: 40%;
}
`

const RightSide = styled.div`
border-right: none;

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 10vh;
  display: flex;
  float: right;
  align-items: center;

}

li {
 float: right;
 text-decoration: none;
}

a {
  display: block;
  padding: 0.8em;
  color: #233348;
  text-decoration: none;
}
`
