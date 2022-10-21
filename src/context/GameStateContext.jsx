import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const GameStateContext = createContext();

const ContextProvider = ({ children }) => {
  const [isRulesVisible, setIsRulesVisible] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const [result, setResult] = useState("W");

  const [player1Action, setPlayer1Action] = useState("");

  const [player2Action, setPlayer2Action] = useState("");

  const [score, setScore] = useState(0);

  const actions = ["rock", "paper", "scissors"];

  const getRandomAction = () => {
    const randomAction = actions[Math.floor(Math.random() * 3)];
    setPlayer2Action(randomAction);
  };

  const calculateResult = () => {
    if (player1Action === player2Action) {
      setResult("D");
    } else if (player1Action === "rock") {
      if (player2Action === "paper") {
        setResult("L");
        setScore((prev) => (prev -= 1));
      } else {
        setResult("W");
        setScore((prev) => (prev += 1));
      }
    } else if (player1Action === "paper") {
      if (player2Action === "scissors") {
        setResult("L");
        setScore((prev) => (prev -= 1));
      } else {
        setResult("W");
        setScore((prev) => (prev += 1));
      }
    } else if (player1Action === "scissors") {
      if (player2Action === "rock") {
        setResult("L");
        setScore((prev) => (prev -= 1));
      } else {
        setResult("W");
        setScore((prev) => (prev += 1));
      }
    }
  };

  return (
    <GameStateContext.Provider
      value={{
        actions,
        isRulesVisible,
        setIsRulesVisible,
        isPlaying,
        setIsPlaying,
        result,
        setResult,
        player1Action,
        setPlayer1Action,
        player2Action,
        getRandomAction,
        calculateResult,
        score,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export default ContextProvider;
export const useGameStateContext = () => useContext(GameStateContext);
