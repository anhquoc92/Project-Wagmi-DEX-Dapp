import React from "react";
import styled from "styled-components";
import ConnectWalletButton from "./ConnectButton";
import LogoLeftNav from "./LogoLeftNav";

import PageButton from "./PageButton";

export default function Navbar() {
  return (
    <Container>
      <LogoLeftNav />
      <div className="middle_nav">
        <PageButton name={"Swap"} isBold={true} />
        <PageButton name={"Tokens"} />
        <PageButton name={"Pool"} />
      </div>
      <ConnectWalletButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
