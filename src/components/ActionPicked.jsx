import { useEffect } from "react";
import { useGameStateContext } from "../context/GameStateContext";
import ActionBtn from "./ActionBtn";
import Button from "./Button";

const ActionPicked = () => {
  let flag = true;
  const {
    result,
    player1Action,
    player2Action,
    calculateResult,
    setIsPlaying,
  } = useGameStateContext();

  const handleButtonClick = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (flag) {
      calculateResult();
      flag = false;
    }
    flag = false;
  }, []);
  return (
    <div className="flex justify-center items-center gap-16">
      <div className="flex flex-col justify-center items-center gap-12">
        <h5 className=" uppercase text-xl text-white tracking-widest">
          You Picked
        </h5>
        <ActionBtn big action={player1Action} />
      </div>

      {/* <!-- Win/Lose State display --> */}
      {result === "W" ? (
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-5xl font-bold uppercase text-white my-6">
            You Win
          </h3>
          <Button text="Play Again" onClick={handleButtonClick} />
        </div>
      ) : result === "L" ? (
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-5xl font-bold uppercase text-white my-6">
            You Lose
          </h3>
          <Button text="Play Again" isRed onClick={handleButtonClick} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <h3 className="text-5xl font-bold uppercase text-white my-6">
            Draw!
          </h3>
          <Button text="Play Again" onClick={handleButtonClick} />
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-12">
        <h5 className=" uppercase text-xl text-white tracking-widest">
          The House Picked
        </h5>
        <ActionBtn big action={player2Action} />
      </div>
    </div>
  );
};

export default ActionPicked;
