// "use client";

// import { useCallback, useState } from "react";

// interface WriteParams {
//   engineUrl: string;
//   chainId: number;
//   contractAddress: string;
//   functionName: string;
//   engineAccessToken: string;
//   backendWalletAddress: string;
//   arg?: string | string[];
// }

// export default function useBackendWrite(params: WriteParams) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const write = useCallback(async () => {
//     setLoading(true);
//     // setError(null);

//     try {
//       const response = await fetch("/api/backend-wallet/write-contract", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           engineUrl: params.engineUrl,
//           chainId: params.chainId,
//           contractAddress: params.contractAddress,
//           functionName: params.functionName,
//           engineAccessToken: params.engineAccessToken,
//           backendWalletAddress: params.backendWalletAddress,
//           arg: params.arg,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to write to contract: ${response.statusText}`);
//       }
//       const result = await response.json();
//       console.log(
//         `Contract write for ${params.functionName} completed successfully`
//       );
//       return result;
//     } catch (error: any) {
//       setError(`Error writing to contract: ${error.message}`);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   }, [params]);

//   return {
//     write,
//     loading,
//     error,
//   };
// }
