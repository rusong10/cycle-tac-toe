import GameState from "./GameState";

function Tile({ value, onClick, playerTurn, gameState, xPositions, oPositions, index, winningTile }) {
    let hoverClass = null;
    let opacity = null;
    let strike = null;
    let playerColor = null;

    if (value === 'X') {
        playerColor = 'text-tron-orange';
    } else if (value === 'O') {
        playerColor = 'text-tron-blue';
    }

    if (value == null && playerTurn != null && gameState === GameState.inProgress) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }

    if (gameState === GameState.inProgress && ((value !== null && playerTurn === 'X' && xPositions.length === 3 && index === xPositions[0]) || (value !== null && playerTurn === 'O' && oPositions.length === 3 && index === oPositions[0]))) {
        opacity = 'text-opacity'
    }

    if (winningTile.includes(index)) {
        strike = 'bg-sunshine-yellow'
    }


    return (
        <div onClick={onClick} className={`flex size-32 bg-gray-900 rounded-xl justify-center items-center text-6xl font-bold ${hoverClass} ${strike}`}>
            <span className={`${opacity} ${playerColor}`}>{value}</span>
        </div>
    );
}

export default Tile;