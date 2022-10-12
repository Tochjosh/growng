import styled from 'styled-components';
import Header from "./Header";
import Marquee from "react-fast-marquee";
import Bikes from "./Bikes";
import Bike from "./bike.png";
import Details from "./Details";
import Stories from "./Stories";

const kits = [
    {
        'id': 1,
        'name': 'Universal eBike Kit',
        'img': Bike,
        'price': '$750',
    },
    {
        'id': 2,
        'name': 'Brampton eBike Kit',
        'img': Bike,
        'price': '$750',
    },
    {
        'id': 3,
        'name': 'Additional eBike Kit',
        'img': Bike,
        'price': '$250',
    }
]


const Body = () => {
    // const data = kits.map( kit => (<BicycleKit key={kit.id} kit={kit}/>))
    return (
        <Wrapper>
            <Wrap>
                <Header/>
                <OuterBorder>
                <Marquee gradientWidth={150} style={
                    {   paddingBottom: "0.6em",
                        // paddingLeft: "2em",
                        display: 'flex',
                        justifyContent: 'space-around',
                        speed: "60",
                        // gap: '2em',
                        border: '1em',
                        fontFamily: 'Mulish',
                        width: '50%',
                        }}>

                    {kits.map(kit => {
                        return (
                            <Container>
                               <Border>
                                <H3>{kit.name}</H3>
                                <Img>
                                    <img src={kit.img} alt='bike'/>
                                </Img>
                                   <hr/>
                                <Bottom>
                                    <LeftSide>
                                        <P>Price</P>
                                        <H3>{kit.price}</H3>
                                    </LeftSide>
                                    <RightSide>
                                        <Button>Order</Button>
                                    </RightSide>
                                </Bottom>
                                </Border>
                            </Container>
                        )
                    })}
                </Marquee>
                </OuterBorder>
                <Bikes/>
                <Details/>
                <Stories/>
            </Wrap>
        </Wrapper>
)}

export default Body

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-left: 10em;

`

const Wrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
padding: 1em;
`



const Container = styled.div`
display: flex;
flex-direction: column;
padding: 1.4em;
justify-content: space-between;
border-radius: 5%;
font-family: Mulish;
color: #7D7987;
margin-left: 1em;

h3 {
font-family: Mulish;
}

`

const H3 = styled.h3`

`

const Bottom = styled.div`
display: flex;
margin: 0 auto;
width: 100%;

button {

}
`

const RightSide = styled.div`
float: right;
display: flex;
flex-direction: column;
flex: 1;
justify-content: flex-end;
padding: 2em;
padding-top: 1.5em;
padding-right: 1.5em;
padding-bottom: 1.5em;
top: 0;
width: 20%;

`

const LeftSide = styled.div`
float: left;
display: flex;
flex-direction: column;
`

const P = styled.p`

`

const Img = styled.div`
img {

}
`

const Button = styled.button`
padding:1em 2em;
background-color: #FFC44B;
border-radius: 50px 50px 50px 50px;
border: none;

`
const Border = styled.div`
border: 1px solid black;
padding: 0.5em;
border-radius: 5%;
background-color: #F6F5F2;
`

const OuterBorder = styled.div`
 width: 100%;

`