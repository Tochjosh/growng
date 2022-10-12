import styled from 'styled-components';
import man from './preview 1.png'


const Stories = () => {
    return (
        // <Container>
            <Wrapper>
                <Top>
                    <h3>What our customers are saying</h3>
                </Top>
                <Bottom>
                    <BottomLeft>
                        <Img>
                            <img src={man} alt='man'/>
                        </Img>
                        <h4>Edward Newgate</h4>
                        <p>Pro-Cycler</p>
                    </BottomLeft>
                    <BottomRight>
                        <p>
                            Dummy test patient engagement app and <br/>web portal allow you to access information<br/> (no tedious form long calls <br/>or administrative hassles) and security
                        </p>
                    </BottomRight>
                </Bottom>
            </Wrapper>
        // </Container>
    )
}

export default Stories;

const Container = styled.div`
margin: 0 auto;
align-items: center;
//padding-right: 75em;

`

const Wrapper = styled.div`
background-color: #FCB72B;
padding: 0.5em;
width: 50%;
height: 70%;
border-radius: 2%;
margin: 0 auto;
margin-top: 4rem;
margin-bottom: 4rem;
 @media only screen and (max-width: 600px) {
    width: 90%;
 }
`

const Top = styled.div`

h3 {
text-align: center;
text-family: Mulish;
color: white;
}
`

const Bottom = styled.div`
display: flex;
margin: 1em;
`

const  BottomLeft = styled.div`
h4 {
color: white;
text-family: Mulish;
text-align: center;
}

p {
color: white;
text-family: Mulish;
text-align: center;
}

`

const BottomRight = styled.div`
margin: 3em;
display: flex;
justify-content: space-between;
color: white;
`

const Img = styled.div`

img {
border-radius: 100%;
border: 3px solid white;
}

`