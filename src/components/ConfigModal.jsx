import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const ConfigModal = (props) => {
  return (
    <Container>
      <div className="modaly" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-body">
            <h4 className="titleHeader">Settings</h4>
            <div className="row">
              <label className="labelField">
                <span>Slippage Tolerance</span>
                <li>
                  <div>
                    <AiOutlineQuestionCircle />
                    <span>aaaaa</span>
                  </div>
                </li>
              </label>
            </div>
            <div className="row">
              <div className="col-md-9 fieldContainer">
                <input
                  type="text"
                  className="inputField"
                  placeholder="0.10"
                  value={props.sloppageAmount}
                  onChange={(e) => props.setSlippageAmount(e.target.value)}
                />
              </div>
              <div className="col-md-3 inputFieldUnitsContainer">
                <span>%</span>
              </div>
            </div>
            <div className="row">
              <label className="labelField">Transaction deadline</label>
            </div>
            <div className="row">
              <div className="col-md-9 fieldContainer">
                <input
                  type="text"
                  className="inputField"
                  placeholder="30"
                  value={props.deadlineMinutes}
                  onChange={(e) => props.setDeadlineMinutes(e.target.value)}
                />
              </div>
              <div className="col-md-3 inputFieldUnitsContainer">
                <span>minutes</span>
              </div>
            </div>
            <h4 className="titleHeader">Interface Settings</h4>
            <div className="row">
              <label className="labelField">Auto Rounr API</label>
            </div>
            <div className="row">
              <label className="labelField">Expert Mode</label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConfigModal;

const Container = styled.div`
  .modaly {
    /* position: fixed;
    top: 2rem;
    right: 0rem;
    bottom: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(86, 90, 105);
  }
  .modal-content {
    background-color: #fff;
    width: 300px !important;
    padding: 0px 15px;
    background-color: rgb(237, 238, 242) !important;
    border: 1px solid rgb(2062, 208, 217) !important;
  }
  .titleHeader {
    /* margin-left: 0px; */
    font-size: 14px;
    font-weight: 600;
  }
  .labelField {
    padding-left: 15px !important;
    font-weight: 500;
  }
  .fieldContainer {
    /* padding-left: 0px !important; */
  }

  .row {
    display: flex;
  }

  //setup tooltip
  li {
    display: flex;
    gap: 1rem;
    cursor: pointer;
    color: white;
    transition: 0.3s ease-in-out;
    &:hover {
      color: greenyellow;
    }
  }
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 7rem;
    background-color: #302f2f;
    color: rgb(86, 90, 105);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    font-size: 1rem;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .inputField {
    padding-left: 10px;
    border-radius: 12px;
    border: 1px solid #65cdee;
    height: 2rem;
    width: 100%;
  }
`;
