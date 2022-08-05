import { keyStores, connect, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "dev-1634742185963-52355839606274";
export const gas = new BN("70000000000000");

export const getWallet = async () => {
  const near = await connect({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });
  const wallet = new WalletConnection(near, "miguelislas");
  return wallet;
};

export const getHospitalsData = async (wallet) => {
  const response = await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "getHospitalsData",
    gas,
  });
  return response;
};

export const registerHospital = async (wallet, hospital) => {
  const response = await wallet.account().functionCall({
    contractId: CONTRACT_ID,
    methodName: "registerHospital",
    args: hospital,
    gas,
  });
  return response;
};
