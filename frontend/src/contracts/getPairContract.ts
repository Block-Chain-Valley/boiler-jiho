import UniswapV2PairABI from "../abi/UniswapV2Pair.json";
import { ethers } from "ethers";
import { UniswapV2Pair } from "../typechain/UniswapV2Pair";

export const getPairContract = async () => {
  if (!window.ethereum) return;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const pairAddress = "0x611a419694c822d6822A3b1b579C741DD3357cE4";
  const pairContract = new ethers.Contract(
    pairAddress,
    UniswapV2PairABI,
    signer
  ) as UniswapV2Pair;
  return pairContract;
};
