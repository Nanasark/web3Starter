import { Write } from "../backend.type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return await handleWrite(req);
}

export async function POST(req: NextRequest) {
  return await handleWrite(req);
}

async function handleWrite(req: NextRequest) {
  const {
    engineUrl,
    chainId,
    contractAddress,
    functionName,
    engineAccessToken,
    backendWalletAddress,
    arg,
  } = await req.json();

  if (
    !engineUrl ||
    !chainId ||
    !contractAddress ||
    !functionName ||
    !engineAccessToken ||
    !backendWalletAddress
  ) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  const argument: string[] = Array.isArray(arg)
    ? arg.map((arg) => arg.toString())
    : arg
    ? [arg.toString()]
    : [];

  try {
    const tx = await fetch(
      `${engineUrl}/contract/${chainId}/${contractAddress}/write`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${engineAccessToken}`,
          "x-backend-wallet-address": backendWalletAddress,
        },
        body: JSON.stringify({
          functionName: `${functionName}`,
          args: argument, //If no arg leave the [] empty
        }),
      }
    );

    //always debug to check if your argument is valid or reachable
    if (!tx.ok) {
      throw new Error(`Failed to ...: `);
    }
    const responseData = await tx.json();
    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error on chain ${chainId}: ${error.message}`);
    return NextResponse.json(
      { error: `Transaction failed: ${error.message}` },
      { status: 500 }
    );
  }
}

// import { Write } from "../backend.type";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const engineUrl = searchParams.get("engineUrl");
//   const engineAccessToken = searchParams.get("engineAccessToken");
//   const chainId = parseInt(searchParams.get("chainId") || "", 10);
//   const contractAddress = searchParams.get("contractAddress");
//   const functionName = searchParams.get("functionName");
//   const arg = searchParams.get("arg");
//   const backendWalletAddress = searchParams.get("backendWalletAddress");

//   if (
//     !engineUrl ||
//     !chainId ||
//     !contractAddress ||
//     !functionName ||
//     !arg ||
//     !engineAccessToken ||
//     !backendWalletAddress
//   ) {
//     return NextResponse.json(
//       { error: "Missing required parameters" },
//       { status: 400 }
//     );
//   }

//   const params: Write = {
//     engineUrl,
//     chainId,
//     contractAddress,
//     functionName,
//     engineAccessToken,
//     backendWalletAddress,
//   };
//   return await handleWrite(params);
// }

// export async function POST(request: Request) {
//   const params: Write = await request.json();
//   if (
//     !params.engineUrl ||
//     !params.chainId ||
//     !params.contractAddress ||
//     !params.functionName ||
//     !params.engineAccessToken ||
//     !params.backendWalletAddress
//   ) {
//     return NextResponse.json(
//       { error: "Missing required parameters" },
//       { status: 400 }
//     );
//   }

//   return await handleWrite(params);
// }

// async function handleWrite(params: Write) {
//   const argument: string[] = Array.isArray(params.arg)
//     ? params.arg.map((arg) => arg.toString())
//     : params.arg
//     ? [params.arg.toString()]
//     : [];

//   try {
//     const tx = await fetch(
//       `${params.engineUrl}/contract/${params.chainId}/${params.contractAddress}/write`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${params.engineAccessToken}`,
//           "x-backend-wallet-address": params.backendWalletAddress,
//         },
//         body: JSON.stringify({
//           functionName: `${params.functionName}`,
//           args: argument, //If no arg leave the [] empty
//         }),
//       }
//     );

//     //always debug to check if your argument is valid or reachable
//     if (!tx.ok) {
//       throw new Error(`Failed to ...: `);
//     }

//     console.log(`... ${params} .. successfully`);
//   } catch (error: any) {
//     throw new Error(`Error ....${params}: ${error.message}`);
//   }
// }
