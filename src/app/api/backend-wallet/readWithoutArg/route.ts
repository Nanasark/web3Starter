import { chain } from "@/blockchain/chain/chain";
import { Read } from "@/app/api/backend-wallet/backend.type";
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
    engineAccessToken,
  };
  return await readWithoutArgs(params);
}

export async function POST(request: Request) {
  const params: Read = await request.json();
  if (
    !params.engineUrl ||
    !params.chainId ||
    !params.contractAddress ||
    !params.functionName ||
    !params.engineAccessToken
  ) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  return await readWithoutArgs(params);
}

async function readWithoutArgs(params: Read) {
  const resp = await fetch(
    `${params.engineUrl}/contract/${chain.id}/${params.contractAddress}/read?functionName=${params.functionName}`,
    {
      headers: {
        Authorization: `Bearer ${params.engineAccessToken}`,
      },
    }
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch auctions");
  }

  const rawData = await resp.json();
}
