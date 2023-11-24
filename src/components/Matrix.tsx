import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Square from './Square';
import { styled } from '@mui/system';
import { SquareValue } from '../type/Type';

const GridStyled = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '300px',
  height: '300px',
});

const Matrix: React.FC = () => {
    const defaultValues = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const [values, setValues] = useState<Array<SquareValue | null>>(
        defaultValues
    );
    return (
        <GridStyled>
                {values.map((valueDisplay , index) => (
                    <Grid item xs={4} key={index} style={{ padding: 0 }}>   
                        <Square index={index} value={valueDisplay}  setValue={setValue}/>
                </Grid>
            ))}
        </GridStyled>
    );
};

export default Matrix;
