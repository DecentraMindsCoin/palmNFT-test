import React, { useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import Loader from "../components/Loader";
import { RiSendToBack } from "react-icons/ri";
import MetamaskButton from "../components/MetamaskButton";
import TokenLogo from "../../images/palm-token-logo.png";

import { HiMenuAlt4 } from "react-icons/hi";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 px-4 w-full rounded-full p-2 bg-black text-white border-gray-200 border-2 text-sm "
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const [data, setData] = useState([]);

  const url = `https://explorer.palm-uat.xyz/api?module=account&action=balance&address=${currentAccount}
  `;
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
        return apiData;
      });
  }, [currentAccount]);

  return (
    <div className="flex w-full justify-center items-center">
      
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">

          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Transactions in the PALM of your hand!
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Send PALM tokens to any wallet easily with
            our PALM Wallet.
          </p>
          <MetamaskButton />

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Palm Tokens
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div
          className="flex flex-col cursor-pointer flex-1 items-center justify-start w-full mf:mt-0 mt-10"
          onClick={connectWallet}
        >
          <div className="border-2 shadow-white/50 hover:shadow-white shadow-lg p-6 flex justify-end items-start flex-col rounded-xl h-52 sm:w-96 w-full my-5 eth-card .white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full rounded-xl bg-gray-200 p-4">
              <div className="flex  justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={TokenLogo} alt="logo token" />
                </div>{" "}
                <h1 className="font-bold">
                  {!currentAccount ? "Connect Wallet" : "Your Wallet"}
                </h1>
                <a
                  href={`https://explorer.palm-uat.xyz/address/${currentAccount}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <BsInfoCircle
                    fontSize={17}
                    color="black"
                    className="hover:bg-purple-400 rounded-full"
                  />{" "}
                </a>
              </div>
              <div>
                <p className="font-light text-sm">
                  <span className="font-bold">Account:</span>{" "}
                  {shortenAddress(currentAccount)}
                </p>
                <div className=" font-light text-sm flex">
                  <span className="font-bold"> Balance:</span>{" "}
                  <p className="pl-1">{`${data.result / 1e17}`.slice(0, 4)}</p>
                </div>
                <p className=" font-bold text-lg mt-1">PALM</p>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-gray-200 rounded-xl border-2 border-white shadow-white/50 hover:shadow-white/100 shadow-lg eth-card .white-glassmorphism">
            <Input
              placeholder="Send PALM to this wallet address"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (PALM)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter keywords for GIF."
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter a message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="hover:text-white w-full mt-2 border-2 p-2 border-black bg-gray-200 text-black rounded-full cursor-pointer hover:bg-black"
              >
                Send PALM
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
