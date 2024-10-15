import {prepareEvent } from "thirdweb";

//Sample Event 2

const ProductPurchased = prepareEvent({
    signature:
      "event ProductPurchased(address indexed buyer, uint256 indexed productId, uint256 price, string hash)", // this signature should be exact from your smart contract
  });
  export const ProductPurchasedEvent = [ProductPurchased];


  //Sample Event 2
  const ProductListed = prepareEvent({
    signature:
      "event ProductListed(address indexed seller, uint256 indexed productId)",
  });
  
  export const ProductListedEvent = [ProductListed];