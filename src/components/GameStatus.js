import GameState from "./GameState";

function GameStatus({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <div></div>

        case GameState.playerOWins:
            return <div className="my-6 outline-sunshine-yellow outline-dashed outline-2 outline-offset-2 w-full p-6 rounded-xl text-xl text-center text-tron-blue font-semibold">O wins</div>

        case GameState.playerXWins:
            return <div className="my-6 outline-sunshine-yellow outline-dashed outline-2 outline-offset-2 w-full p-6 rounded-xl text-xl text-center text-tron-orange font-semibold">X wins</div>

        default:
            return <></>;
    }
}

export default GameStatus;