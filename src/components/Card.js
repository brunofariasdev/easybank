import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return(
        <Container>
            <Img src={props.linkimg} />
            <CardTitle> {props.title} </CardTitle>
            <Text> {props.text} </Text>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;
const Img = styled.img`
    width: 3.8rem;
    height: 3.4rem;
    padding: .2rem;


`;

const CardTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 200;
    color: #2d314d;
    padding: .2rem;
`;

const Text = styled.p`
    font-size: .9rem;
    padding: .2rem;
    color: #9698a6;

`;

export default Card;