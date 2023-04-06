import MetaMaskSDK from '@metamask/sdk';

const options = {
    injectProvider: false,
    dappMetadata: {name: "Boilerplate", url: "https://mydapp.com"}
  };

  
const MMSDK = new MetaMaskSDK(options);

export const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum


// ethereum.request({ method: 'eth_requestAccounts', params: [] });