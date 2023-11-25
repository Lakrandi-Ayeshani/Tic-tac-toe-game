import React from 'react';
import { styled } from '@mui/system';
import { SquareValue } from '../type/Type';
import { Button } from '@mui/material';

// const MyButtonStyled = styled('button')({
//     width: '100px',
//     height: '100px',
//     padding: 0,
//     cursor: 'pointer',
//     backgroundColor: '',
//     fontSize: '70px',
//     color: 'white',
//     '&:hover': {
//         backgroundColor: '#3f51b5',
//     },
//     '&:actiive': {
//         backgroundColor: 'black',
//     },
// });

const MyButtonStyled = styled('button')<{
    $bgColor?: string;
}>`
    width: 100px;
    height: 100px;
    padding: 0;
    cursor: pointer;
    background-color: ${props => props.$bgColor};
    font-size: 70px;
    color: white;
    &:hover {
        background-color: #3f51b5;
    }
    &:active { /* Fixed the typo in :active */
        background-color: black;
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
        <MyButtonStyled  $bgColor={props.color} onClick={handleSetValue}>
            {props.value}
        </MyButtonStyled>   
    );
}

export default Square;


