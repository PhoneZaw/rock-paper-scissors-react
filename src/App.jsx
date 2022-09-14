import ActionPicked from "./components/ActionPicked";
import Actions from "./components/Actions";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useGameStateContext } from "./context/GameStateContext";

const App = () => {
  const { setIsRulesVisible, isPlaying } = useGameStateContext();

  return (
    <main className="bg-radial min-h-screen px-8 py-8 font-barlow flex flex-col justify-between items-center">
      <Header />
      {isPlaying ? <ActionPicked /> : <Actions />}
      <button
        className="bg-transparent border text-white uppercase px-12 py-2 rounded-lg text-lg tracking-widest self-end"
        onClick={() => setIsRulesVisible(true)}
      >
        Rules
      </button>
      <Modal />
    </main>
  );
};

export default App;
