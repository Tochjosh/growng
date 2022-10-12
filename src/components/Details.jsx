import styled from 'styled-components'
import Rider from "./rider.png";





const Details = () => {

    return (
        <Container>
            <Border>
                <LeftSide>
                <Img>
                    <img src={Rider} alt='bike'/>
                </Img>

                <Bottom>
                    <BottomLeft>
                        <p>Price</p>
                        <h3>$750</h3>
                    </BottomLeft>
                    <BottomRight>
                        <Button>Order</Button>
                    </BottomRight>
                </Bottom>
                </LeftSide>
                <RightSide>
                <h2>Hybrid Bikes</h2>
                <p>Rafalgar provides progressive and affordable healthcare,<br/> accessible on mobile and online for everyone. To us it's<br/> not just work. We take pride<br/> in the solutions we deliver</p>
                <Button>Learn More</Button>
                </RightSide>
            </Border>
        </Container>
    )
}

export default Details

const Container = styled.div`
margin: 0 auto;
//padding-right: 57em;
`
const Border = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1em;
`
const Img = styled.div`
`

const Bottom = styled.div`
border-top: 1px solid black;
display: flex;
justify-content: flex-start;
align-items: center;

`

const BottomLeft = styled.div`
   flex:0.4;
`

const BottomRight = styled.div`
flex: 0.5;
justify-self: flex-end;

button {
   
   margin-left: 6em;
}
`

const Button = styled.button`
border: 1px solid #FFBD37;
border-radius: 50px 50px 50px 50px;
`
const LeftSide = styled.div`
display: flex;
flex-direction: column;
box-shadow: 10px 10px 50px rgba(0,0,0,.1);
padding: 1em;
border-radius: 5%;

img {
}

button {
background-color: #FFBD37;
}
`

const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1em;

p {
color: #7D7987;
}



button {
background-color: white;
width: 50%;
height: 15%;
}

`