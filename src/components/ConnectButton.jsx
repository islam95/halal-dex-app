const ConnectButton = ({ styles, address, buttonText, handleClick }) => {
  return (
    <button className={`${styles} justify-center items-center bg-[#1C1924] self-stretch flex max-w-full flex-row px-4 py-2 rounded-[100px] gap-4`} onClick={handleClick}>
      <div className="text-sm font-bold leading-6 text-green-500 self-stretch whitespace-nowrap">
        {address.length > 0 ? address.substring(0, 6) + '...' + address.substring(address.length - 4) : buttonText}
      </div>
    </button>
  );
};

export default ConnectButton;
