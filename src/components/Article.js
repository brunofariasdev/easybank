import React from 'react';
import styled from 'styled-components';

const Article = (props) => {
    return (
        <Card>
            <Image style={{
                backgroundImage: `url(${props.image})`
            }} />
            <Content>
                <Author>by: {props.author}</Author>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
            </Content>
        </Card>
    )
}
const Description = styled.p`
    font-size: .6rem;
    text-align: start;
    word-break: break-word;
    max-width: inherit;
    padding-right: 3px;
    color: #9698a6;
`;

const Title = styled.h2`
    color: black;
    font-weight: 300;
    text-align: start;
    padding-right: .2rem;
    font-size: .8rem;
`;


const Content = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start ;
    padding: 0 .5rem ;
`;
const Author = styled.h5`
    font-size: .6rem;
    color: #9698a6;
`;
 
const Image = styled.div`
    height: 50%;
    width: 100%;
    border-radius:  .7rem .7rem 0 0 ; 
`;

const Card = styled.div`
    height: 20rem;
    width: 260px;
    display: flex;
    flex-direction: column;
    border-radius: .7rem;
    background-color: #fff;
    margin: 2rem;

`;


export default Article;