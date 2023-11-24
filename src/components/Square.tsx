import React from 'react';
import { styled } from '@mui/system';
import { SquareValue } from '../type/Type';

const MyButtonStyled = styled('button')({
    width: '100px',
    height: '100px',
    padding: 0,
    cursor: 'pointer',
    backgroundColor: '',
    fontSize: '70px',
    '&:hover': {
        backgroundColor: '435585',
    },
    '&:actiive': {
        backgroundColor: 'black',
    },
});

interface SquareProps {
    value: SquareValue | null;
    setValue: (index: number) => void;
    index: number;
}

const Square: React.FC<SquareProps> = (props) => {
    
    const handleSetValue = () => {
        if(props.value === null) {
            props.setValue(props.index);
        }
    }

    return (
        <MyButtonStyled onClick={handleSetValue}>
            {props.value}
        </MyButtonStyled>   
    );
}

export default Square