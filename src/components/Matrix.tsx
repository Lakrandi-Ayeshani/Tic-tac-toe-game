import React, { useState } from 'react';
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
    const [clickedCount, setClickedCount] = useState(1);
    return (
        <GridStyled>
            {Array.from(Array(9)).map((_, index) => (
                <Grid item xs={4} key={index} style={{ padding: 0 }} onClick = {() => setClickedCount(clickedCount+1)}>
                    {clickedCount < 9 ? (
                        clickedCount % 2 === 0 ? (
                            <Square clickedValue={0}/>
                        ) : (
                            <Square clickedValue={'X'} />
                        )
                    ) : (
                        clickedCount === 1
                    )}
                    
                </Grid>
            ))}
        </GridStyled>
    );
};

export default Matrix;
