import React from 'react';
import styled from 'styled-components';
import Logosrc from '../images/logo.svg';
import {NavLink} from 'react-router-dom';

const Top = styled.div`
    height: 4.3rem;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;

const Botao = styled.button`
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
const Logo = styled.img`
    height: 20px;
    width: 100px;
    cursor: pointer;

`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

`;

const MenuLi = styled.li`
    padding-left: .7rem;
    color: #9698a6;
    font-weight: 300;
    font-size: .9rem;
    cursor: pointer;

`;


const Head = () => {
    return(
        <Top>
            <Logo src={Logosrc} />
            <Menu>
                <NavLink to="/" className="navlink"><MenuLi>Home</MenuLi></NavLink>
                <NavLink to="/about" className="navlink"><MenuLi>About</MenuLi></NavLink>
                <MenuLi>Contact</MenuLi>
                <MenuLi>Blog</MenuLi>
                <MenuLi>Carrers</MenuLi>
                </Menu>
            <Botao>Request Invite</Botao>
        </Top>
    )
}

export default Head;


