import styled from "styled-components";

const BicycleKits = ({name, img, price}) => {
    return (

        <Container>
            <H3>{name}</H3>
            <Img>
                <img src={img} alt='bike'/>
            </Img>
            <Bottom>
                <RightSide>
                    <P>Price</P>
                    <H3>{price}</H3>
                </RightSide>
                <LeftSide>
                    <Button>Order</Button>
                </LeftSide>
            </Bottom>
        </Container>
    )
}

export default BicycleKits;

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding-left: 1.4em;
// background-color: blue;

`

const H3 = styled.h3`

`

const Bottom = styled.div`
display: flex;
background-color: green;
margin: 0 auto;
width: 100%;

button {

}
`

const RightSide = styled.div`
float: right;

`

const LeftSide = styled.div`
float: left;
`

const P = styled.p`

`

const Img = styled.div`

`

const Button = styled.button`
display: flex;
width: 100%;
justify-content: center;
background-color: #FFC44B;
border-radius: 50px 50px 50px 50px;
`
