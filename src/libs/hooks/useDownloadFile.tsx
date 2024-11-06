"use client";
import { download } from "thirdweb/storage";
type ThirdwebClient = {
  readonly clientId: string;
  readonly secretKey: string | undefined;
};

type Props = {
  client: ThirdwebClient;
  ipfsHash: string;
  fileName: string;
  platformName?: string;
};
import { useCallback } from "react";

export default function useDownloadFile(params: Props) {
  const downloadFile = useCallback(async () => {
    const defaultFilename = `${params.fileName} ${params.platformName}`;
    try {
      const client = params.client;
      const uri = `ipfs://${params.ipfsHash}`;
      const file = await download({ client, uri });

      // Get the blob of the file and determine its MIME type
      const fileBlob = await file.blob();
      const fileExtension = fileBlob.type.split("/")[1] || "jpg"; // Default to jpg if unknown
      const filename = `${defaultFilename}.${fileExtension}`;

      const url = window.URL.createObjectURL(fileBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);

      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download the file:", error);
    }
  }, []);

  return {
    downloadFile,
  };
}
