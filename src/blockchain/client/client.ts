import { createThirdwebClient } from "thirdweb";

import Strings from "@/config/strings"

const clientId = Strings.thirdwebClientId;

if (!clientId) {
  console.log("clientId missing");
}

export const client = createThirdwebClient({
  clientId: clientId,
});