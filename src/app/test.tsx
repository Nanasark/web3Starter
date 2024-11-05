import useEngineWrite from "@/libs/hooks/useEngineWrite";
import React from "react";
import useEngineRead from "../libs/hooks/useEngineRead";
import { Read } from './api/backend-wallet/backend.type';

const test = () => {
  const { write } = useEngineWrite({
    backendWalletAddress: "csdcsdcds",
    contractAddress: "",
    chainId: 0,
    engineAccessToken: "cdsv0",
    engineUrl: "csdvs",
    functionName: "cs",
    arg: ["dadas", "dsada"],
  });

  const { read } = useEngineRead({
    backendWalletAddress: "dsad",
    chainId: 0,
    contractAddress: "dasd",
    engineAccessToken: "dsds",
    engineUrl: "csc",
    functionName: "cs",
    hasArgs:true,
    arg:["cs"]
  })
  
   const handleRead = async () => {
     const result = await read();
     return result;
   };


  const handleWrite = async () => {
    const result = await write();
    return result
  };

  return (
    <div>
      test
      <button
        onClick={() => {
          handleWrite;
        }}
      ></button>
    </div>
  );
};

export default test;
