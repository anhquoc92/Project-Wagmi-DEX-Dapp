import React from "react";
import styled from "styled-components";

export default function NavFunction() {
  return (
    <Container>
      <div>
        <a className="nav_logo">
          <span>AAAA</span>
          <img
            height="100%"
            src="wagmi_uniswap_v3\src\data\uniswap_logo.png"
            alt=""
          />
        </a>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
