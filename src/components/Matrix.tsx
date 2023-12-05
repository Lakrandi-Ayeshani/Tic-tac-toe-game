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
  marginLeft: 'auto',
  marginRight: 'auto',
});

const Matrix: React.FC = () => {
    const defaultValues = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    const defaultColors = [
        '#2e7d32', '#2e7d32', '#2e7d32',
        '#2e7d32', '#2e7d32', '#2e7d32',
        '#2e7d32', '#2e7d32', '#2e7d32',
    ];
    const [squareColors, setSquareColors] = useState<Array<string>>(
        defaultColors
    );
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
    const [player, setPlayer] = useState<SquareValue>('O');
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [isWinner, setIsWinner] = useState<boolean>(false);

    const setValue = (index: number) => {
        if(gameOver) {
            return false;
        }
        let newValues = [...values];
        newValues[index] = player;
        setValues(newValues);
        let isWin = checkWinner(newValues);
        setIsWinner(checkWinner(newValues)); //state update 45 ekedi true wenne ne 1st attempt after won . ehanda isWin ekath add kala.
        if(isWin) {
            setGameOver(true);
        }
        setPlayer(player === 'X' ? 'O' : 'X');
    }

    const handleNewGame = () => {
        setValues(defaultValues);
        setSquareColors(defaultColors);
        setGameOver(false);
    }

    const checkWinner = (newValues: Array<SquareValue | null>) => {
        const isWin: boolean = winningCombinations.some((combination) => {
            const [a, b, c] = combination;
            if (newValues[a] && newValues[a] === newValues[b] && newValues[a] === newValues[c]){
                const newColors = [...squareColors];
                newColors[a] = '#81c784';
                newColors[b] = '#81c784';
                newColors[c] = '#81c784';
                setSquareColors(newColors);
                return true;
            }
            return false;
        });
        return isWin;
    }
    console.log(isWinner);
    return (
        <Grid container >
            <Grid item xs={12} sm={6} paddingTop={5} alignContent={''} >
                <GridStyled>
                    {values.map((valueDisplay , index) => (
                        <Grid item xs={4} key={index} style={{ padding: 0 }}>   
                            <Square index={index} value={valueDisplay}  setValue={setValue} color={squareColors[index]}/>
                        </Grid>
                    ))}
                </GridStyled>
            </Grid>
            <Grid item paddingTop={6} marginRight={'auto'} marginLeft={'auto'}>    
                <Grid item marginLeft={'auto'} marginRight={'auto'}>
                    <Button variant="contained" color="success" onClick={handleNewGame} sx={{marginLeft:'auto', marginRight: 'auto'}}>New Game</Button>
                </Grid>     
                {isWinner && gameOver ? (
                    <p style={{color: '#2e7d32'}}>{player === 'O' ? 'Congratulations...! Player X won' : 'Congratulations...! Player O won'}</p>
                ) : (
                    <p style={{color: '#2e7d32'}}>{player === 'O' ? 'TURN: Player O, click one squre ' : 'TURN: Player X, click one squre'}</p>
                )}                
            </Grid>
        </Grid>
    );
};

export default Matrix;
