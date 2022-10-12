import styled from 'styled-components';
import man from './preview 1.png'


const Stories = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <h1>What customers are saying</h1>
                </Top>
                <Bottom>
                    <BottomLeft>
                        <Img>
                            <img src={man} alt='man'/>
                        </Img>
                        <h3>Edward Newgate</h3>
                        <h5>Pro-Cycler</h5>
                    </BottomLeft>
                    <BottomRight>
                        <p>
                            Dummy test patient engagement app and <br/>web portal allow you to access information<br/> (no tedious form long calls <br/>or administrative hassles) and security
                        </p>
                    </BottomRight>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Stories;

const Container = styled.div`
margin: 0 auto;
`

const Wrapper = styled.div`

`

const Top = styled.div`

`

const Bottom = styled.div`

`

const  BottomLeft = styled.div`

`

const BottomRight = styled.div`

`

const Img = styled.div`

`