const ActionBtn = ({
  action = "rock",
  big = false,
  handleButtonClick = () => {},
}) => {
  return (
    <button
      className={`bg-${action}1 p-6 rounded-full`}
      onClick={() => handleButtonClick(action)}
    >
      <div
        className={
          "bg-white rounded-full w-24 lg:w-36 h-24 lg:h-36 flex items-center justify-center shadow-inner" +
          (big ? "w-24 h-24 lg:w-48 lg:h-48" : "")
        }
      >
        <img
          className={big ? "w-12 lg:w-24" : "w-10 lg:w-16"}
          src={`/icon-${action}.svg`}
          alt={`${action} icon`}
        />
      </div>
    </button>
  );
};

export default ActionBtn;
