import React from 'react'; 
import ApiImg from '../../images/icon-api.svg';
import BankingImg from '../../images/icon-online.svg';
import BudgetingImg from '../../images/icon-budgeting.svg';
import OnboardingImg from '../../images/icon-onboarding.svg';
import Head from '../../components/Top';
import {Container , AboutTitle, AboutText, Services} from "./style";
import Card from '../../components/Card';

const About = () => {
    return(
        
        <Container>
            <Head />
            <AboutTitle> Why choose Easybank? </AboutTitle>
            <AboutText>We leverage Open Banking to turn your bank account int your financial hub. <br/> 
                Control your finances like never before.
            </AboutText>
            <Services>
                <Card linkimg={BankingImg} title="Online Baking" text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the word" />
                <Card linkimg={BudgetingImg} title="Simple Budgeting " text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the word" />
                <Card linkimg={OnboardingImg} title="Fast Onboarding" text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the word" />
                <Card linkimg={ApiImg} title="Open API" text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the word" />
            </Services>
        </Container>
    )
}

export default About;