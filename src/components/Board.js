import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, gameState, xPositions, oPositions, winningTile }) {

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2.5 cursor-pointer my-10">
            {
                tiles.map((value, index) => (
                    <Tile
                        key={index}
                        index={index}
                        gameState={gameState}
                        playerTurn={playerTurn}
                        onClick={() => onTileClick(index)}
                        value={value}
                        xPositions={xPositions}
                        oPositions={oPositions}
                        winningTile={winningTile}
                    />
                ))
            }
        </div>
    );
}

export default Board;