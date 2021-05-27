import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 15px 30px 15px;
    
`;

export const Title = styled.h1`
    padding: 0;
    margin: 15px 10px

`;

export const Img = styled.img`
    max-width: 60vw;
    border: 3px solid var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

export const FormGroup = styled.div` 
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;

`;

export const Input = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--quaternary);
    outline: 0;
    font-size: 1.3rem;
    color: var(--white);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }

    :focus {
        ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: var(--primary);
            font-weight:700;    
        }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, var(--primary),var(--secondary));
        border-image-slice: 1;
    }
    
    &:required,&:invalid { 
        box-shadow:none; 
    }

`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--quaternary);
`;  