import useEngineWrite from "@/libs/hooks/useEngineWrite";
import React from "react";

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

  const handleWrite = async () => {
    const result = await write();
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
