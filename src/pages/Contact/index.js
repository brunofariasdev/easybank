import React from 'react';
import Head from '../../components/Top';
import Article from '../../components/Article';
import {Container , Title, Main, Articles} from "./style";
import foto from '../../images/image-currency.jpg';
const Home = () => {
    return(
                <Container>
                    <Head/>
                    <Main>
                        <Title>Latest Article</Title>
                        <Articles>
                            
                            <Article author="Claire Robinson" image={foto} title="Receive money in any currency with no fees" desc="The Word is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in ..."/>
                            <Article author="Claire Robinson" image={foto} title="Receive money in any currency with no fees" desc="The Word is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in ..."/>
                            <Article author="Claire Robinson" image={foto} title="Receive money in any currency with no fees" desc="The Word is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in ..."/>
                            <Article author="Claire Robinson" image={foto} title="Receive money in any currency with no fees" desc="The Word is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in ..."/>

                        </Articles>
                    </Main>
                        
                </Container>
    )
}

export default Home;