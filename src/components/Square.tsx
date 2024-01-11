import React from 'react';
import { styled } from '@mui/system';
import { SquareValue } from '../type/Type';
import { Button } from '@mui/material';


const MyButtonStyled = styled('button')<{
    $bgColor?: string;
}>`
    width: 150px;
    height: 150px;
    padding: 0;
    cursor: pointer;
    background-color: ${props => props.$bgColor};
    font-size: 70px;
    text
    &:hover {
        background-color: #1b5e20;
    }
    &:active {
        background-color: black;
    }
    @media (max-width: 700px) {
        width: 100px;
        height: 100px
    }
`;

interface SquareProps {
    value: SquareValue | null;
    setValue: (index: number) => void;
    index: number;
    color: string;
}

const Square: React.FC<SquareProps> = (props) => {
    
    const handleSetValue = () => {
        if(props.value === null) {
            props.setValue(props.index);
        }
    }

    return (
        // <MyButtonStyled  $bgColor={props.color} onClick={handleSetValue}>
        <MyButtonStyled  className={`${props.color === '#2e7d32' ? 'squre' : ' squre win-squre'}`} onClick={handleSetValue}>
            {props.value}
        </MyButtonStyled>   
    );
}

export default Square;


