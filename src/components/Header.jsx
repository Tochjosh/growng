import styled from "styled-components";
import Group from "./lady.png";




const Header = () => {
    return (
        <Container>
            <LeftSide>
                <H1>Your Bike <br/>Electric Update</H1>
                <P>Trafalgar provides progressive and affordable<br/> healthcare, accessible on mobile and online<br/> for everyone</P>
                <ButtonForm>
                    <Form>
                    <form className="form">
                        <Input>
                            <input type="text" placeholder="Search Bike Or Anything" name="search" style={{color: "#C2CFE0"}}/>
                            <button type="submit">Find</button>
                        </Input>
                    </form>
                    </Form>
                </ButtonForm>
            </LeftSide>
            <RightSide>
                <Img>
                    <img src={Group} alt='lady icon'/>
                </Img>
            </RightSide>

        </Container>
    )
}

export default Header;

const Container = styled.div`
display: flex;
margin: 7em;
padding-left: 7em
`

const RightSide = styled.div`

`

const LeftSide = styled.div`
display: flex;
flex-direction: column;
padding: 2.5em;
justify-content: space-between;
font-family: 'mulish';

`

const H1 = styled.h1`
color: #233348;

`

const P = styled.p`
color: #7D7987;
`

const ButtonForm = styled.div`
`

const Img = styled.div`

`

const Form = styled.div`
border: 1px solid #7D7987;
border-radius: 50px 50px 50px 50px;

form {
display: flex;
justify-content: center;
gap: 0.5em;
}
`

const Input = styled.div`
width: 60%;
padding: 0.45em;
padding-right:6em;
position: relative;

input {
padding-right: 0.5em;
border: none;
outline: none;
width: 100%;
}

button {
padding: 0.5em 2.2em;
background-color: #FFBD37;
color: black;
font-family: mulish;
font-weight: bold;
border: none;
position: absolute;
left: 17.5em;
top: 0.15em;
border-radius: 50px 50px 50px 50px;
cursor: pointer;
`

const Button = styled.div`
float: left;
width: 30%;
padding: 0.2em;
flex: 0.3;


}

`