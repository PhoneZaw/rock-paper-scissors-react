import { useGameStateContext } from "../context/GameStateContext";
import ActionBtn from "./ActionBtn";

const Actions = () => {
  const { actions, setIsPlaying, setPlayer1Action, getRandomAction } =
    useGameStateContext();

  const handleButtonClick = (action) => {
    setIsPlaying(true);
    setPlayer1Action(action);
    getRandomAction();
    console.log(action);
  };
  return (
    <div className="bg-action flex flex-col gap-10 justify-center items-center w-full max-w-lg mt-16">
      <div className="flex justify-between gap-20">
        <ActionBtn action={actions[0]} handleButtonClick={handleButtonClick} />
        <ActionBtn action={actions[1]} handleButtonClick={handleButtonClick} />
      </div>

      <ActionBtn action={actions[2]} handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Actions;
