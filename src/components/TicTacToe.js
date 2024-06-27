'use client'

import { useEffect, useState } from "react";
import Board from "./Board";
import GameStatus from "./GameStatus";
import GameState from "./GameState";
import Reset from "./Reset";

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const winningCombo = [
    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //column
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    //diagonal
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner(tiles, setCombo, setGameState) {
    for (const combo of winningCombo) {

        const [a, b, c] = combo;

        const tileValue1 = tiles[a]
        const tileValue2 = tiles[b]
        const tileValue3 = tiles[c]

        if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3) {
            setCombo(combo);

            if (tiles[a] === PLAYER_X) {
                setGameState(GameState.playerXWins);
            } else {
                setGameState(GameState.playerOWins);
            }
            return;
        }
    }
}

function TicTacToe() {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [gameState, setGameState] = useState(GameState.inProgress);
    const [xPositions, setXPositions] = useState([]);
    const [oPositions, setOPositions] = useState([]);
    const [combo, setCombo] = useState([]);

    useEffect(() => {
        checkWinner(tiles, setCombo, setGameState);
    }, [tiles])

    const handleTileClick = (index) => {
        if (gameState !== GameState.inProgress) {
            return;
        }

        if (tiles[index] !== null) {
            return;
        }

        const newTiles = [...tiles];
        const newXPositions = [...xPositions];
        const newOPositions = [...oPositions];

        if (playerTurn === PLAYER_X) {
            newXPositions.push(index);
            if (newXPositions.length > 3) {
                const oldestXIndex = newXPositions.shift();
                newTiles[oldestXIndex] = null;
            }
            setXPositions(newXPositions);
        } else {
            newOPositions.push(index);
            if (newOPositions.length > 3) {
                const oldestOIndex = newOPositions.shift();
                newTiles[oldestOIndex] = null;
            }
            setOPositions(newOPositions);
        }

        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if (playerTurn === PLAYER_X) {
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
    }

    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setXPositions([]);
        setOPositions([]);
        setCombo([]);
    }

    return (
        <div>
            <h1 className="font-bold text-center text-5xl">Cycle Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} gameState={gameState} xPositions={xPositions} oPositions={oPositions} winningTile={combo} />
            <GameStatus gameState={gameState} />
            <Reset gameState={gameState} onReset={handleReset} />
        </div>
    );
}

export default TicTacToe;