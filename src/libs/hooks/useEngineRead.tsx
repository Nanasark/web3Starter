import React, { useCallback, useState } from "react";
import { Read } from "@/app/api/backend-wallet/backend.type";

export default function useEngineRead(params: Read) {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const read = useCallback(async () => {
    setData(null);
    setLoading(true);

    const url =
      params.hasArgs === true
        ? "/api/backend-wallet/readwithArg"
        : "/api/backend-wallet/readWithoutArg";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          engineUrl: params.engineUrl,
          chainId: params.chainId,
          contractAddress: params.contractAddress,
          functionName: params.functionName,
          engineAccessToken: params.engineAccessToken,
          backendWalletAddress: params.backendWalletAddress,
          arg: params.arg,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to write to contract: ${response.statusText}`);
      }

      const result = await response.json();

      setData(result);
      return result;
    } catch (error) {}
  }, [params]);

  return {
    read,
    error,
    loading,
    data,
  };
}
