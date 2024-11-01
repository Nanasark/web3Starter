import {Read} from "@/app/api/backend-wallet/backend.type"
import { NextResponse } from "next/server";



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const engineUrl = searchParams.get("engineUrl");
  const engineAccessToken = searchParams.get("engineAccessToken");
  const chainId = parseInt(searchParams.get("chainId") || "", 10);
  const contractAddress = searchParams.get("contractAddress");
  const functionName = searchParams.get("functionName");
  const arg = searchParams.get("arg");

  if (
    !engineUrl ||
    !chainId ||
    !contractAddress ||
    !functionName ||
    !arg ||
    !engineAccessToken
  ) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  const params: Read = {
    engineUrl,
    chainId,
    contractAddress,
    functionName,
    arg,
    engineAccessToken,
  };
  return await readWithArg(params);
}

export async function POST(request: Request) {
  const params: Read = await request.json();
  if (
    !params.engineUrl ||
    !params.chainId ||
    !params.contractAddress ||
    !params.functionName ||
    !params.arg ||
    !params.engineAccessToken
  ) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  return await readWithArg(params);
}


async function readWithArg(params:Read) {

  try {
    
    const response = await fetch(
      `${params.engineUrl}/contract/${params.chainId}/${params.contractAddress}/read?functionName=${params.functionName}&args=${params.arg}`,
      {
        headers: {
          Authorization: `Bearer ${params.engineAccessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorMsg = await response.text();
      throw new Error(`Failed to check : ${params.arg}. Error: ${errorMsg}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error(`Error checking  ${params.arg} args:`, error);
  }
}

