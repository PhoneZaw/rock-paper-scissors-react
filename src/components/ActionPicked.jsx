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
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-full max-w-4xl flex justify-between items-start gap-16">
        <div className="flex flex-col-reverse lg:flex-col justify-center items-center gap-6">
          <h5 className=" uppercase text-xl text-center text-white tracking-widest">
            You Picked
          </h5>
          <ActionBtn big action={player1Action} />
        </div>

        <div className="flex flex-col-reverse lg:flex-col justify-center items-center gap-6">
          <h5 className="uppercase text-xl text-center text-white tracking-widest">
            The House Picked
          </h5>
          <ActionBtn big action={player2Action} />
        </div>
      </div>
      <div className="lg:relative lg:bottom-40">
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
      </div>
    </div>
  );
};

export default ActionPicked;
