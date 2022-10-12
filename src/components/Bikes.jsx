import styled from 'styled-components'
// import {bikes} from '../data'
// import BikeType from "./BikeType";
import Group from "./Group 3.png";
import Marquee from "react-fast-marquee";


const bikes = [
    {
        'id': 1,
        'name': 'Hybrid Bikes',
        'img': Group,
        'about': "Rafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver"
    },
    {
        'id': 2,
        'name': 'Fixie Bikes',
        'img': Group,
        'about': "Rafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver"
    },
    {
        'id': 3,
        'name': 'Folding Bikes',
        'img': Group,
        'about': "Rafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver"
    },
    {
        'id': 4,
        'name': 'Mount Bikes',
        'img': Group,
        'about': "Rafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver"
    },
    {
        'id': 5,
        'name': 'City Bikes',
        'img': Group,
        'about': "Rafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver"
    }
]


const Bikes = () => {

    // const data = bikes.map(bike => (<BikeType key={bike.id} bike={bike} />))
    // console.log(data)
    return (
        <Container>
            <Title><h3>Other Type Of Bikes</h3></Title>
            <Body>
                {bikes.map(bike => {
                    return (
                        <Marquee gradientWidth={100}>
                            <Wrap>
                                <Img><img src={bike.img} alt='bikes'/></Img>
                                <P><p>{bike.name}</p></P>
                            </Wrap>
                         </Marquee>
                    )
                })}
            </Body>
        </Container>

    )

}

export default Bikes;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 90%;
margin-left: 10%;
//margin: 0 auto;
margin-top: 60px;
margin-bottom: 60px;
`
const Title = styled.div`
font-family: Mulish;
color: #7D7987;


`
const Body = styled.div`
margin: 0 auto;
display: flex;
width: 70%;
`
const Img = styled.div`
background-color: #F6F5F2;
width:12em
border: 1px solid black;
border-radius: 7%;
box-shadow: 10px 10px 50px rgba(0,0,0,.1);

`

const P = styled.div`
// background-color: #E5E5E5;
text-align: center;
color: #7D7987;
`

const Wrap = styled.div`
display: flex;
flex-direction: column;

`