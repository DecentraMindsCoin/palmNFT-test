import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      
      flex-col p-3 rounded-md border-2"
    >
      <div className="flex flex-col items-center w-full mt-3 ">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://explorer.palm-uat.xyz/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-yellow-300 hover:text-purple-300 text-base">
             <span className="font-bold text-white">From: </span> {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://explorer.palm-uat.xyz/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-yellow-300 hover:text-purple-300 text-base">
              <span className="font-bold text-white">To:</span>  {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base"> <span className="font-bold">Amount:</span>  {amount} PALM</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={
            gifUrl
              ? gifUrl
              : url ||
                "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
          }
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-purple-300 font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-black">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10 ">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
