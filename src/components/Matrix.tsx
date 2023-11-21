import React from 'react';
import { Grid } from '@mui/material';
import Square from './Square';
import { styled } from '@mui/system';

const GridStyled = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    height: '300px',
});

const Matrix = () => {
    return (
        <GridStyled>
            {Array.from(Array(9)).map((_, index) => (
                <Grid item xs={4} key={index} style={{ padding: 0 }}>
                    if
                    <Square/>
                </Grid>
            ))}
        </GridStyled>
    );
};

export default Matrix;
