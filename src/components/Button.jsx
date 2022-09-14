const Button = ({ text, isRed = false, onClick }) => {
  return (
    <button
      className={`text-sm font-bold uppercase tracking-widest bg-white px-12 py-3 rounded-lg ${
        isRed && "text-red-700"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
