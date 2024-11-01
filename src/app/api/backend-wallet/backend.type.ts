export interface Read {
  arg?: string;
  functionName: string;
  engineUrl: string;
  contractAddress: string;
  engineAccessToken: string;
  chainId: number;
}

export interface Write {
  arg?: string;
  functionName: string;
  engineUrl: string;
  contractAddress: string;
  engineAccessToken: string;
  chainId: number;
  backendWalletAddress: string;
}
