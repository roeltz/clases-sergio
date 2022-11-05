import MetaMaskSDK from '@metamask/sdk';

const ethereum = MetaMaskSDK.getProvider();

console.log("Corriendo MetaMask SDK:", ethereum, ethereum.request({ method: 'eth_requestAccounts' }));