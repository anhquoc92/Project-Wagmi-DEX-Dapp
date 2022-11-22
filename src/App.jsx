import { useAccount } from "wagmi";
import React from "react";
import { Account, Connect, NetworkSwitcher } from "./components";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import MainSwap from "./components/MainSwap";
import Footer from "./components/Footer";

export function App() {
  const { isConnected } = useAccount();

  return (
    <Container>
      <div>
        {/* <h1>wagmi + Create React App</h1> */}
        <Navbar />
        {/* <Connect /> */}
        {/* {isConnected && (
          <>
            <Account />
            <NetworkSwitcher />
          </>
        )} */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: #e3eef3;
  min-height: 100vh;
  background: rgb(255,222,236);
  background: linear-gradient(180deg, rgba(255,222,236,1) 0%, rgba(255,245,254,1) 100%);
`;
