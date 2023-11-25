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
    const [defaulColors, setDefaultColors] = useState<Array<string>>([
        '#2c387e', '#2c387e', '#2c387e',
        '#2c387e', '#2c387e', '#2c387e',
        '#2c387e', '#2c387e', '#2c387e'
    ]);
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
    let [isWinner, setIsWinner] = useState<boolean>(false);

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
        setGameOver(false);
    }

    const checkWinner = (newValues: Array<SquareValue | null>) => {
        const isWin: boolean = winningCombinations.some((combination) => {
            const [a, b, c] = combination;
            if (newValues[a] && newValues[a] === newValues[b] && newValues[a] === newValues[c]){
                const newColors = [...defaulColors];
                newColors[a] = '#039be5';
                newColors[b] = '#039be5';
                newColors[c] = '#039be5';
                setDefaultColors(newColors);
                return true;
            }
            return false;
        });
        return isWin;
    }
    console.log(isWinner);
    return (
        <Grid container margin={4}>
            <Grid item xs={12} sm={6} padding={1}>
                <GridStyled>
                    {values.map((valueDisplay , index) => (
                        <Grid item xs={4} key={index} style={{ padding: 0 }}>   
                            <Square index={index} value={valueDisplay}  setValue={setValue} color={defaulColors[index]}/>
                        </Grid>
                    ))}
                </GridStyled>
            </Grid>
            <Grid paddingTop={2} width={'30%'}>
                <Button variant="contained" color="success" onClick={handleNewGame}>New Game</Button>
                {isWinner && gameOver ? (
                    <p>{player === 'O' ? 'Congratulations...! Player X won' : 'Congratulations...! Player O won'}</p>
                ) : (
                    <p>{player === 'O' ? 'TERN: Player O ' : 'TERN: Player X'}</p>
                )}
                
            </Grid>
        </Grid>
    );
};

export default Matrix;


    // const [clickedCount, setClickedCount] = useState(0);

    // const checkWinner = (board) => {
    //     for (let i = 0; i < winningCombinations.length; i++) {
    //       const [a, b, c] = winningCombinations[i];
    //       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    //         return true; // We have a winner
    //       }onClick = {() => setClickedCount(clickedCount+1)}
    //     }
    //     return false;
    //   };

    /* {   clickedCount < 10 ? (
                                clickedCount % 2 === 0 ? (
                                    <Square clickedValue={0} clickedCount={clickedCount} setClickedCount={setClickedCount}/>
                                ) : (
                                    <Square clickedValue={'X'} clickedCount={clickedCount} setClickedCount={setClickedCount}/>
                                )
                            ) : (
                                <div>
                                    {Array.from(Array(9)).map((_, index) => (
                                        <Square clickedValue={null}  key={index} clickedCount={0} setClickedCount={setClickedCount}/>
                                    ))} 
                                </div>
                            )
                        }     */

    /* <div>
                <Button onClick={() => setClickedCount(10)}>New Game</Button>
            </div> */