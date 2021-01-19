import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #0490ad;
    width: 100%;

    border: 2px solid black;
`;

export const FormWrapper = styled.div`
    padding: 10px;
    height: 450px;    
    width: 500px;

    border: 2px solid green;
`;

export const IntroductionWrapper = styled.div`
    height: 400px;
    width: 750px;

    color: #FFF;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;

    border: 2px solid red;
`;
