import { useEffect, useState } from "react";
import { getPairContract } from "../../contracts/getPairContract";
import { UniswapV2Pair } from "../../typechain/UniswapV2Pair";
import { makeEtherFromBigNumber } from "../../utils/transform";

function TradeBox() {
  const [pairContract, setPairContract] = useState<UniswapV2Pair>();
  const getContract = async () => {
    const contract = await getPairContract();
    setPairContract(contract);
    console.log(contract);
  };
  const getPairBalance = async () => {
    const Reserve = await pairContract?.getReserves();
    console.log(Reserve);
    //console.log(makeEtherFromBigNumber(Reserve[0]));
  };

  useEffect(() => {
    getContract();
  }, []);

  return (
    <div>
      <h1>Trad1e</h1>
      <button onClick={getPairBalance}>Get Pair Balance</button>
    </div>
  );
}

export default TradeBox;
