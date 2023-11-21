import React, { useState } from 'react';
import { styled } from '@mui/system';

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

interface SqureProps { 
    clickedValue: 'X' | 0;
}

const Square: React.FC<SqureProps> = ({ clickedValue }) => {
    const [value, setValue] = useState<'X'| 0 | null>(null);

    return (
        <MyButtonStyled onClick={() =>setValue(clickedValue)}>
            {value}
        </MyButtonStyled>
    );
}

export default Square