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
      <StyledTitle>SWAP</StyledTitle>
      <StyledTradeBox>
        <div>
          <StyledInputBox className="flex">
            <StyledInput type="text" value="0.00" />
            <select>
              <option value="ETH" selected>
                ETH
              </option>
              <option value="USDT">USDT</option>
            </select>
          </StyledInputBox>
          <StyledInputBox className="flex">
            <StyledInput type="text" value="0.00" />
            <select>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </StyledInputBox>
        </div>

        <StyledSwapButton>Swap</StyledSwapButton>
      </StyledTradeBox>
      <button onClick={getPairBalance}>Get Pair Balance</button>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 664px;
  height: 316px;
  border-radius: 20px;
  background-color: #4f4c64;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 79px;
  height: 32px;
  margin: 20px;
  background: #ffffff;
  color: #000000;
  border-radius: 32px;
`;

const StyledTradeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 535px;
  height: 212px;
  background: #0d0d2b;
  border-radius: 20px;
`;
const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 52px;
  margin: 20px;
  background: #ffffff;
  border-radius: 10px;
  select {
    width: 81px;
    height: 32px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    :focus {
      outline: none;
    }

    option {
      color: #000000;
    }
  }
`;

const StyledInput = styled.input`
  width: 110px;
  height: 52px;

  background: #ffffff;
  color: #000000;
  border-radius: 10px;
  &::placeholder {
    color: #000000;
  }
  :focus {
    outline: none;
  }
`;

const StyledSwapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 52px;
  margin: 0 20px;
  /* primary */

  background: #4452fe;
  /* shadow */

  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export default TradeBox;
