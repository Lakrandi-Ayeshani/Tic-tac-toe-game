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

const Square = () => {

    return (
        <MyButtonStyled >
           X
        </MyButtonStyled>
    );
}

export default Square