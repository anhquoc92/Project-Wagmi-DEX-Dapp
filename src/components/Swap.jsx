import React, { useState } from "react";
import styled from "styled-components";
import { BsGear } from "react-icons/bs";
import ConfigModal from "./ConfigModal";
import CurrencyField from "./CurrencyField";

export default function Swap() {
  const [slippageAmount, setSlippageAmount] = useState(undefined);
  const [deadlineMinutes, setDeadlineMinutes] = useState(undefined);
  const [showModal, setShowModal] = useState(undefined);

  return (
    <Container>
      <div className="swapHeader">
        <span className="swapText">Swap</span>
        <span className="gearContainer" onClick={() => setShowModal(true)}>
          <BsGear />
        </span>
        {showModal && (
          <ConfigModal
            onClose={() => setShowModal(false)}
            setDeadlineMinutes={setDeadlineMinutes}
            deadlineMinutes={deadlineMinutes}
            setSlippageAmount={setSlippageAmount}
            slippageAmount={slippageAmount}
          />
        )}
      </div>
      <div className="swapBody">
        <CurrencyField
          field="input"
          tokenName="WETH"
          getSwapPrice={getSwapPrice}
          signer={signer}
          balance={wethAmount}
        />
        <CurrencyField
          field="input"
          tokenName="UNI"
          value = {outputAmount}
          signer={signer}
          balance={wethAmount}
          spinner = {BeatLoader}
          loading = {loading}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .swapHeader {
    text-align: left;
    padding: 4px 20px 0px 20px;
  }
  .swapText {
    color: #000;
    font-size: 18px;
  }

  .gearContainer {
    float: right;
    font-size: 20px;
  }
`;
