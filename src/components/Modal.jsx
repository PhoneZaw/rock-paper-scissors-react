import { useGameStateContext } from "../context/GameStateContext";

//-TODO: isRulesVisible to be stored

const Modal = () => {
  const { isRulesVisible, setIsRulesVisible } = useGameStateContext();
  return (
    <div
      className={
        "fixed inset-0 bg-black/60 justify-center items-center " +
        (isRulesVisible ? "flex" : "hidden")
      }
    >
      <div className="flex flex-col bg-white rounded-lg w-full max-w-sm p-7">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold uppercase">Rules</h3>
          <button
            className="bg-transparent p-2"
            onClick={() => setIsRulesVisible(false)}
          >
            <img src="/icon-close.svg" alt="close" />
          </button>
        </div>
        <img className="mx-6 mt-10" src="/image-rules.svg" alt="Rules" />
      </div>
    </div>
  );
};

export default Modal;
