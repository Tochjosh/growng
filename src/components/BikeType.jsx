import styled from  'styled-components';

const BikeType = (bike) => {
    return (
        <Container>
            <Wrap>
                <Img><img src={bike.img} alt='bikes'/></Img>
                <P><p>{bike.name}</p></P>
            </Wrap>
        </Container>
    )
}

export default BikeType;

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Wrap = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`

const Img = styled.div`

`

const P = styled.div`

`