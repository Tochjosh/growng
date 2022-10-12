import logo from '../B.png';
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
              <Container>
                  <Center>
                  <LeftSide>
                    <LogoName>
                        <Img><h2>B</h2></Img>
                        <Ebike><h3>eBike</h3></Ebike>
                    </LogoName>
                    <MiddleLeft>
                        <p>Trafalgar provides progressive and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</p>
                    </MiddleLeft>
                      <div className="bottom">
                          <Copyright> &copy;2022 copyright <AllRight>All rights reserved</AllRight> </Copyright>
                      </div>
                  </LeftSide>
                  <RightSide>
                      <LeftRight>
                          <h3>Company</h3>
                          <ul className="list-inline">
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Bike Type</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                          </ul>
                      </LeftRight>
                      <RightRight>
                          <h3>Help</h3>
                          <ul className="list-inline">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Support</a></li>
                            <li><a href="#">Instructions</a></li>
                            <li><a href="#">How It Works</a></li>
                          </ul>
                      </RightRight>
                  </RightSide>
                  </Center>
              </Container>

            </>
)}

export default Footer

const Container = styled.div`
left: 0;
bottom: 0;
width: 100%;
min-height: 30vh;
background-color: #FFC44B;
color: white;
display: flex
flex-wrap: wrap;

`

const LeftSide = styled.div`
div > img{
position: relative;
left: 4%;
}

text-align: left;
padding: 2em;
display: flex;
flex-direction: column;
flex: 0.4;
`
const Copyright = styled.div`
display: flex;
flex-direction: row
flex-wrap: wrap;
align-items: flex-start;
`

const AllRight = styled.span`
margin-left: 10px
`
const RightSide = styled.div`
flex: 0.4;
gap:2em;
display: flex;
align-items: center;
padding: 2em;

a {
  display: block;
  color: #fff;
  text-decoration: none;
}

ul {
    list-style: none;
    padding-left: 0;
    
}
li {
padding-bottom: 0.5em;
}

@media (max-width: 600px) {
    display: none;
    margin-bottom: 1rem;
}
`

const MiddleLeft =  styled.div`
text-align: left;
`

const LogoName = styled.div`
display: flex;
gap: 1.5em;
align-items: center;
`

const LeftRight = styled.div`
display: flex;
flex-direction: column;

h1 {

}

a {
display: flex;
flex-direction: column;
align-items: flex-start;
text-decoration: none;
}

a {

}
`

const RightRight = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;

a {
display: flex;
text-decoration: none;
}
`

const Center = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Ebike = styled.div`
`
const Img = styled.div`
width: 3em;
height: 3em;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
border-radius: 50%;

h2 {
padding: 0.7em;
color: #FFC44B;
}
`