import styled from 'styled-components';
import Bgdk from '../../images/bg-intro-desktop.svg';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`;


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
`;

export const Botao = styled.button`
    background-color: #31d35c;
    background-image: linear-gradient(135deg, #31d35c 0%, #2bb7da 100%);
    border: none;
    border-radius: 1.5rem;
    height: 2.4rem;
    width: 8rem;
    color: white;
    padding: 5px;
    font-size: .8rem;
`;

export const Main = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f3f4f6;
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    align-items: start;
    justify-content: center;
    padding-left: 130px;
`;

export const MainImg = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(${props => props.theme.lk}) !important;
    background-repeat: no-repeat;
    background-size: 170%;
    background-position: right 88% bottom 30%
`;

MainImg.defaultProps = {
    theme: {
        desk: "../../images/bg-intro-desktop.svg",
        mob: "../../images/bg-intro-mobile.svg",
        lk: Bgdk
    }
}

export const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.t1};
    font-weight: 300;
    text-align: center;
`;

Title.defaultProps = {
    theme: {
        t1: '#2d314d',
    }
}

export const TextMain = styled.p`
    font-size: 1rem;
    color: #9698a6;
    margin-top: -.4rem;
`;


