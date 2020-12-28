import styled from 'styled-components';



export const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

`;


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column !important;
    align-items: center !important;
    background-color: #f3f4f6;
    
`;

export const Articles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

`;



export const Title = styled.h1`
    font-size: 3rem;
    color: ${props => props.theme.t1};
    font-weight: 300;
    text-align: start;
    margin-left: 8rem;
    
`;

Title.defaultProps = {
    theme: {
        t1: '#2d314d',
    }
}

