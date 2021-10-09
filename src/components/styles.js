import styled from "styled-components";

const Title = styled.h1`
    font-family: 'Libre Barcode 128 Text', sans-serif;
    text-align: center;
    color: papayawhip;
`;

const Details = styled.h3`
    /* display: block; */
    line-height: 1.5;
    font-size: smaller;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    //flexbox
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

const Button = styled.button` 
    border: 3px papayawhip solid;
    border-radius: 100%;
    background: none;
    height: 7rem;
    width: 7rem;
    margin: 0 3rem;
`;

const Card = styled.div` 
    margin: 20 auto;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    height: 8rem;
`;

const Line = styled.hr` 
    margin: 0 1rem;
    height: 7rem;
`;



export { Title, Details, Button, Card, Line }