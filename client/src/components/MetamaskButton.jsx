import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { AiFillPlayCircle } from "react-icons/ai";
const MetamaskButton = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  return (
    <div className="" >
      {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-gradient-to-r from-purple-500 to-yellow-500 hover:from-yellow-500 hover:to-purple-500 p-3 rounded-full cursor-pointer "
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">Connect</p>
        </button>
      )}
    </div>
  );
};

export default MetamaskButton;
