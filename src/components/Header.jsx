import ScoreBoard from "./ScoreBoard";
import logo from "./../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-4 border-outline rounded-2xl max-w-2xl w-full">
      <img src={logo} alt="logo" />
      <ScoreBoard />
    </div>
  );
};

export default Header;
