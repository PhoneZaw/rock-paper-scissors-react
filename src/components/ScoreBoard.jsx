import { useGameStateContext } from "../context/GameStateContext";

const ScoreBoard = () => {
  const { score } = useGameStateContext();
  return (
    <div className="flex flex-col justify-center items-center px-12 py-3 bg-white max-w-fit rounded-lg">
      <p className="text-sm font-bold uppercase text-score tracking-widest">
        score
      </p>
      <h3 className="text-6xl font-bold text-dark">{score}</h3>
    </div>
  );
};

export default ScoreBoard;
