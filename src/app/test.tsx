import React from "react";
import useBackendWallets from "@/libs/hooks/useBackendWallet";

const test = () => {
  const { write } = useBackendWallets({
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
