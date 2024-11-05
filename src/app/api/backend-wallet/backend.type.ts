export interface Read {
  arg?: string[];
  functionName: string;
  engineUrl: string;
  contractAddress: string;
  engineAccessToken: string;
  chainId: number;
  backendWalletAddress: string;
  hasArgs: boolean;
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
