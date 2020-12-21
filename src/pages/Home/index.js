import React from 'react';
import Head from '../../components/Top';
import {Container,Botao, Main, MainText, MainImg, Title, TextMain, } from "./style";

const Home = () => {
    return(
                <Container>
                    <Head />
                    <Main>
                        <MainText>
                            <Title>Next generation <br/> digitall banking</Title>
                            <TextMain>
                                Take your financial life online. Your Easybank account <br/>
                                will be a one-sstop-shot for spending, saving, <br/>
                                budgeting, ivesting, and mush more.
                             </TextMain>
                            <Botao>Request Invite</Botao>
                        </MainText>
                        <MainImg />
                    </Main>
                </Container>
    )
}

export default Home;