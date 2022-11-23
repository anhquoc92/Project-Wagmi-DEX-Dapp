import React from "react";
import styled from "styled-components";
import Swap from "./Swap";

export default function MainSwap() {
  return (
    <Container>
      <div className="appBody">
        <div className="swapContainer">
          <Swap />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
.appBody {
  height: 100%;
  padding-top: 80px;
}
.swapContainer {
  background-color: rgb(255,255,255);
  width: 440px;
  height: 350px;
  margin: 0 auto;
  top: 50%;
  border-radius: 16px;
  border: 1px solid rgb(210, 217, 238);
  padding: 6px;
}
`;
