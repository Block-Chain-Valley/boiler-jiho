import { useEffect, useState } from "react";
import { getPairContract } from "../../contracts/getPairContract";
import { UniswapV2Pair } from "../../typechain/UniswapV2Pair";
import { makeEtherFromBigNumber } from "../../utils/transform";
import styled from "styled-components";

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
    //getContract();
  }, []);

  return (
    <Wrap>
      <div>SWAP</div>
      <div className="flex justify-center items-center w-88 h-48 bg-[#0D0D2B]">
        <div>
          <div className="flex">
            <input type="text" />
            <select>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
          <div className="flex">
            <input type="text" />
            <select>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>
        <div>
          <button>Swap</button>
        </div>
      </div>
      <button onClick={getPairBalance}>Get Pair Balance</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #0d0d2b;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 200px;
    height: 40px;
    background-color: #0d0d2b;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }
  select {
    width: 100px;
    height: 40px;
    background-color: #0d0d2b;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }
  button {
    width: 200px;
    height: 40px;
    background-color: #0d0d2b;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
  }
`;

export default TradeBox;
