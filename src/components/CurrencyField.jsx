import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

const CurrencyField = (props) => {
  const getPrice = (value) => {
    props.getSwapPrice(value);
  };
  return (
    <Container>
      <div className="row currencyInput">
        <div className="col-md-6 numberContainer">
          {props.loading ? (
            <div className="spinnerContainer">
              <props.spiner />
            </div>
          ) : (
            <input
              className="currencyInputField"
              placeholder="0.0"
              value={props.value}
              onBlur={(e) =>
                props.field === "input" ? getPrice(e.target.value) : null
              }
            />
          )}
        </div>
        <div className="col-md-6 tokenContainer">
          <span className="tokenName">{props.tokenName}</span>
          <div className="balanceContainer">
            <span>Balance: {props.balance?.toFix(3)}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CurrencyField;

const Container = styled.div`
  .currencyInput {
    background-color: rgb(217,236,242);
    margin: 10px !important;
    padding: 10px;
    border-radius: 20px;
  }
  .currencyInput :hover {
    border-color: #65cdee !important;
  }
`;
