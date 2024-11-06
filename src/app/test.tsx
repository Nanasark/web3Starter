import useEngineWrite from "@/libs/hooks/useEngineWrite";
import React from "react";
import useEngineRead from "../libs/hooks/useEngineRead";
import useDownloadFile from "@/libs/hooks/useDownloadFile";
import { client } from "@/blockchain/client/client";
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

  const { downloadFile } = useDownloadFile({
    client,
    fileName: "file Name",
    ipfsHash: "ipfshash",
    platformName: "this is optional",
  });

  const { read } = useEngineRead({
    backendWalletAddress: "dsad",
    chainId: 0,
    contractAddress: "dasd",
    engineAccessToken: "dsds",
    engineUrl: "csc",
    functionName: "cs",
    hasArgs: true,
    arg: ["cs"],
  });

  const handleRead = async () => {
    const result = await read();
    return result;
  };

  const handleDownload = async () => {
    const result = await downloadFile();
    return result;
  };

  const handleWrite = async () => {
    const result = await write();
    return result;
  };

  return (
    <div>
      test
      <button
        onClick={() => {
          handleWrite;
        }}
      >
        test engine WRITE
      </button>
      <button
        onClick={() => {
          handleRead;
        }}
      >
        {" "}
        test engine READ
      </button>
      <button
        onClick={() => {
          handleDownload;
        }}
      >
        {" "}
        test File Download 
      </button>
    </div>
  );
};

export default test;
