import styled from "styled-components";

const Title = styled.h1`
    font-family: 'Libre Barcode 128 Text', sans-serif;
    text-align: center;
    color: papayawhip;
`;

const Details = styled.h3`
    display: block;
    line-height: 1.5;
    font-size: smaller;
    font-family: 'Raleway', sans-serif;
`;

const Button = styled.button` 
    border: 3px papayawhip solid;
    border-radius: 100%;
    background: none;
    height: 7rem;
    width: 7rem;
`;

const Card = styled.div` 
    margin: 30 auto;
    margin-bottom: 2rem;
`;



export { Title, Details, Button, Card }